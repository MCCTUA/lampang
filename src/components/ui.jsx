import React from 'react';
import { motion } from 'framer-motion';

/* ------------------------------------------------------------------ *
 * Shared design-system primitives — heritage palette.
 * Mirrors the smartdata site's Section / SectionHeader / Card pattern.
 * ------------------------------------------------------------------ */

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// FadeUp — wrap any block to animate on scroll-into-view.
export function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// Section — one deck slide surface (1280×720). Content is centred at ~1112px.
export function Section({ id, tone = 'cream', className = '', children }) {
  const tones = {
    cream: { background: 'var(--h-cream)', color: 'var(--h-ink)' },
    paper: { background: 'var(--h-paper)', color: 'var(--h-ink)' },
    soft: { background: 'var(--h-cream-soft)', color: 'var(--h-ink)' },
    dark: { background: 'var(--h-green-deep)', color: '#F3EFE2' },
    green: { background: 'var(--h-green)', color: '#F3EFE2' },
  };
  return (
    <div id={id} className={`slide-section ${className}`} style={tones[tone]}>
      <div style={{ padding: '44px 84px' }}>{children}</div>
    </div>
  );
}

// Kicker — small pill label above a heading.
export function Kicker({ children, color = 'var(--h-green)', bg }) {
  return (
    <span
      className="inline-block text-[12.5px] font-bold tracking-wide rounded-full px-3.5 py-1 mb-4"
      style={{ background: bg || 'rgba(31,92,61,0.10)', color }}
    >
      {children}
    </span>
  );
}

// SectionHeader — kicker + title + optional lead paragraph.
export function SectionHeader({ kicker, kickerColor, kickerBg, title, lead, dark = false }) {
  return (
    <div className="mb-10">
      {kicker && <Kicker color={kickerColor} bg={kickerBg}>{kicker}</Kicker>}
      <h2
        className="font-bold leading-[1.15] tracking-tight"
        style={{
          fontSize: 'clamp(1.6rem, 1rem + 2.4vw, 2.5rem)',
          color: dark ? '#F6EFD9' : 'var(--h-green)',
        }}
      >
        {title}
      </h2>
      {lead && (
        <p
          className="mt-4 max-w-[68ch]"
          style={{
            fontSize: 'clamp(1rem, 0.95rem + 0.4vw, 1.15rem)',
            color: dark ? 'rgba(246,239,217,0.82)' : 'var(--h-muted)',
          }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

// Card — bordered surface with an optional left accent stripe.
export function Card({ accent, className = '', children, style }) {
  const stripe = {
    green: 'var(--h-green2)',
    gold: 'var(--h-gold)',
    red: 'var(--h-red)',
  };
  return (
    <div
      className={`avoid-break rounded-xl p-5 sm:p-6 ${className}`}
      style={{
        background: 'var(--h-paper)',
        border: '1px solid var(--h-line)',
        borderLeft: accent ? `5px solid ${stripe[accent]}` : '1px solid var(--h-line)',
        boxShadow: '0 4px 18px rgba(20,40,30,0.05)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Pill — inline tag (ประหยัด / เต็มระบบ / ตัดออก / keyman …).
export function Pill({ variant = 'eco', children }) {
  const map = {
    eco: { background: '#E7F0E9', color: 'var(--h-green)' },
    full: { background: 'var(--h-gold-soft)', color: '#8A5A12' },
    out: { background: 'var(--h-red-soft)', color: 'var(--h-red)' },
    key: { background: '#FDF3D6', color: '#8A6D12' },
  };
  return (
    <span
      className="inline-block rounded-full px-2.5 py-0.5 text-[12.5px] font-bold align-middle"
      style={map[variant]}
    >
      {children}
    </span>
  );
}

// Note — muted small print (e.g. "ระยะเป็นค่าประมาณ").
export function Note({ children, className = '', style }) {
  return (
    <p className={`text-[13.5px] leading-relaxed ${className}`} style={{ color: 'var(--h-muted)', ...style }}>
      {children}
    </p>
  );
}
