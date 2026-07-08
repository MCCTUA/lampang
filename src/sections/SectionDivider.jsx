import React from 'react';

/* Full-bleed heritage-green section divider slide.
   props: n (section number, or symbol e.g. "＋"), title, items, kicker (optional override) */
export default function SectionDivider({ n, title, items = [], kicker }) {
  const nn = typeof n === 'number' ? String(n).padStart(2, '0') : String(n);
  const kick = kicker || `ส่วนที่ ${nn}`;
  return (
    <div
      className="slide-section"
      style={{
        background: 'var(--h-green)',
        color: '#F3EFE2',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 96px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* oversized faded section number */}
      <div
        style={{
          position: 'absolute', right: 40, top: -30, fontSize: 460, fontWeight: 800,
          lineHeight: 1, color: 'rgba(231,196,106,0.10)', userSelect: 'none', fontFamily: 'Sarabun, sans-serif',
        }}
      >
        {nn}
      </div>

      {/* gold rule */}
      <div style={{ width: 72, height: 5, background: '#E7C46A', borderRadius: 3, marginBottom: 24 }} />

      <div style={{ fontSize: 17, letterSpacing: 3, color: '#E7C46A', fontWeight: 700, marginBottom: 12 }}>
        {kick}
      </div>

      <h2 style={{ fontSize: 50, fontWeight: 800, lineHeight: 1.08, color: '#FFFFFF', margin: 0, maxWidth: 880 }}>
        {title}
      </h2>

      {items.length > 0 && (
        <ul style={{ marginTop: 30, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '12px 34px', maxWidth: 860 }}>
          {items.map((it) => (
            <li key={it} style={{ fontSize: 18.5, color: 'rgba(243,239,226,0.92)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#E7C46A', flexShrink: 0 }} />
              {it}
            </li>
          ))}
        </ul>
      )}

      <div style={{ position: 'absolute', bottom: 36, left: 96, fontSize: 14, color: 'rgba(231,196,106,0.72)' }}>
        สะพานรัษฎาภิเศก 108 ปี · เทศบาลนครลำปาง
      </div>
    </div>
  );
}
