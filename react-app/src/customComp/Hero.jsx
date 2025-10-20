import React from 'react';

export function Hero({
  title,
  subtitle,
  backgroundImage,
  align = 'center',
  maxWidth = 960,
}) {
  const justify =
    align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center';
  const textAlign = align;
  console.log('Hero')
  return (
    <section
      aria-label="Hero"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: justify,
        minHeight: 360,
        padding: '64px 24px',
        backgroundColor: '#0f172a',
        color: 'white',
        overflow: 'hidden',
      }}
    > 
      <h2>test123123</h2>
      {backgroundImage && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.55)',
          }}
        />
      )}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign,
          width: '100%',
          maxWidth,
          margin: '0 auto',
        }}
      >
        <h1 style={{ margin: 0, fontSize: 40, lineHeight: 1.1 }}>{title}</h1>
        {subtitle && (
          <p style={{ marginTop: 12, fontSize: 18, opacity: 0.9 }}>{subtitle}</p>
        )}
      </div>
    </section>
  );
}
