import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { builderJsonToHtml } from '../utils/BuildElements';
import jsonTemplate1 from '../template/temp-1.json';

function normalizePath(p) {
  if (!p) return '/';
  let out = p.startsWith('/') ? p : `/${p}`;
  if (out.length > 1 && out.endsWith('/')) out = out.slice(0, -1);
  return out;
}

const jsonRegistry = {
  'temp-1': jsonTemplate1,
};

const htmlRegistry = {
  'gov-shutdown-banner': 'template/GovShutDownBanner.html',
};

export default function TemplateView({ path, loading = null, notFound = null }) {
  const location = typeof useLocation === 'function' ? useLocation() : null;
  const urlPath = normalizePath(path || (location ? location.pathname : (typeof window !== 'undefined' ? window.location.pathname : '/')));
  const [, , nameRaw] = useMemo(() => urlPath.split('/'), [urlPath]);
  const [html, setHtml] = useState(undefined); // undefined=loading, null=not found, string=ready

  useEffect(() => {
    let cancelled = false;
    setHtml(undefined);

    async function load() {
      const name = nameRaw || '';

      // Try HTML templates from /public/template
      if (htmlRegistry[name]) {
        try {
          const res = await fetch(`/${htmlRegistry[name]}`, { cache: 'no-store' });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const text = await res.text();
          if (!cancelled) setHtml(text);
          return;
        } catch (e) {
          if (!cancelled) setHtml(null);
          return;
        }
      }

      // Try JSON templates compiled in app
      if (jsonRegistry[name]) {
        try {
          const json = jsonRegistry[name];
          const blocks = json?.data?.blocks;
          if (Array.isArray(blocks) && blocks.length) {
            const htmlStr = blocks.map(b => builderJsonToHtml(b)).join('');
            if (!cancelled) setHtml(htmlStr);
            return;
          }
        } catch (e) {
          // ignore
        }
      }

      if (!cancelled) setHtml(null);
    }

    load();
    return () => { cancelled = true; };
  }, [nameRaw]);

  if (html === undefined) return loading;
  if (html === null) return notFound ?? null;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
