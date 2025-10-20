import React, { useEffect, useMemo, useState } from 'react';
import { BuilderComponent, builder, Builder } from '@builder.io/react';
import { fetchOneEntry } from '@builder.io/sdk-react';
import pkg from '../../package.json';
import { useLocation } from 'react-router-dom';
import { Hero } from './Hero';

// Initialize Builder with injected public key
const PUBLIC_KEY = window?.injectedEnv?.PUBLIC_BUILDER_KEY;
if (PUBLIC_KEY) builder.init(PUBLIC_KEY);

// Register custom components once for Builder editor usage
if (typeof window !== 'undefined' && !window.__HERO_REGISTERED__) {
  window.__HERO_REGISTERED__ = true;
  Builder.registerComponent(Hero, {
    name: 'Hero',
    inputs: [
      { name: 'title', type: 'string', required: true },
      { name: 'subtitle', type: 'string' },
      {
        name: 'backgroundImage',
        type: 'file',
        allowedFileTypes: ['jpeg', 'jpg', 'png', 'gif', 'webp'],
      },
      { name: 'align', type: 'string', enum: ['left', 'center', 'right'], defaultValue: 'center' },
      { name: 'maxWidth', type: 'number', defaultValue: 960 },
    ],
  });
}

function usePreviewFlags() {
  const search = typeof window !== 'undefined' ? window.location.search : '';
  const isDev = typeof process !== 'undefined' && process.env.NODE_ENV !== 'production';
  const isPreview = new URLSearchParams(search).has('builder.preview') || isDev;
  return useMemo(
    () => ({ includeUnpublished: isPreview, cachebust: isPreview }),
    [isPreview]
  );
}

function normalizePath(p) {
  if (!p) return '/';
  let out = p.startsWith('/') ? p : `/${p}`;
  if (out.length > 1 && out.endsWith('/')) out = out.slice(0, -1);
  return out;
}

export default function ContentView({
  model = 'page',
  path,
  loading = 'Loading…',
  notFound,
}) {
  const location = typeof useLocation === 'function' ? useLocation() : null;
  const [entry, setEntry] = useState(); // undefined=loading, null=not found
  const { includeUnpublished, cachebust } = usePreviewFlags();

  const rawPath = path || (location ? location.pathname : (typeof window !== 'undefined' ? window.location.pathname : '/'));
  const urlPath = normalizePath(rawPath);
  const host = typeof window !== 'undefined' ? window.location.host : '';
  const url = typeof window !== 'undefined' ? window.location.href : '';

  // Derive canonical homepage from package.json to bypass host-based targeting in Builder
  let canonicalHomepage = undefined;
  try { canonicalHomepage = pkg?.homepage; } catch (_) { /* ignore */ }
  const canonical = (() => {
    try {
      if (!canonicalHomepage) return null;
      const u = new URL(canonicalHomepage);
      const href = new URL(urlPath.replace(/^\//, ''), u).href;
      return { host: u.host, url: href };
    } catch (_) {
      return null;
    }
  })();

  useEffect(() => {
    let cancelled = false;
    setEntry(undefined);

    async function load() {
      try {
        const tryPaths = [urlPath];
        if (!tryPaths.includes('/home')) tryPaths.push('/home');
        for (const p of tryPaths) {
          // Try with current host/url first
          const primary = await fetchOneEntry({
            model,
            apiKey: PUBLIC_KEY,
            userAttributes: { urlPath: p, host, url },
            options: { includeUnpublished, cachebust },
          });
          if (cancelled) return;
          if (primary) { setEntry(primary); return; }

          // Fallback: try canonical homepage host/url from package.json (e.g., GitHub Pages)
          if (canonical && (canonical.host !== host)) {
            const secondary = await fetchOneEntry({
              model,
              apiKey: PUBLIC_KEY,
              userAttributes: { urlPath: p, host: canonical.host, url: canonical.url },
              options: { includeUnpublished, cachebust },
            });
            if (cancelled) return;
            if (secondary) { setEntry(secondary); return; }
          }
        }
        if (!cancelled) setEntry(null);
      } catch (e) {
        console.error('Builder fetchOneEntry error:', e);
        if (!cancelled) setEntry(null);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [model, urlPath, includeUnpublished, cachebust]);

  if (entry === undefined) return typeof loading === 'string' ? <div>{loading}</div> : loading || null;
  if (entry === null) return notFound ?? <div>No Builder content found for {urlPath} (also tried /home and canonical host)</div>;

  return <BuilderComponent model={model} content={entry} />;
}
