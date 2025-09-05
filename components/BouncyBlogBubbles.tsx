import React from 'react';
import type { Card } from '../types';
import { audio } from '../web/audio';

type Props = {
  cards: Card[];
  height?: number; // Keep for backward compatibility but won't be used
};

export default function BouncyBlogBubbles({ cards }: Props) {
  const scrollLeft = () => {
    const container = document.querySelector('.blog-bubbles-grid');
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.querySelector('.blog-bubbles-grid');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="blog-container" style={{ position: 'relative' }}>
      <div className="blog-bubbles-grid">
        {cards.map((c) => (
          <div key={c.id} className="blog-bubble-card" role="link" tabIndex={0} 
               style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
               onClick={() => { audio.click(); window.open(c.url, '_blank', 'noopener'); }}
               onMouseEnter={(e) => {
                 (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
                 (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
               }}
               onMouseLeave={(e) => {
                 (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                 (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
               }}>
            <div className="blog-bubble-title">{(c.title || '').toLowerCase()}</div>
            {c.subtitle ? <div className="blog-bubble-sub" style={{ fontSize: '10px' }}>{c.subtitle}</div> : null}
          </div>
        ))}
      </div>
      <button className="blog-arrow blog-arrow-left" onClick={scrollLeft} aria-label="Scroll left">‹</button>
      <button className="blog-arrow blog-arrow-right" onClick={scrollRight} aria-label="Scroll right">›</button>
    </div>
  );
}


