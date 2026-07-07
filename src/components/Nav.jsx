import React, { useState, useEffect } from 'react';

// Single-page anchor nav. Uses scrollIntoView (not href hashes) so it does
// not collide with HashRouter's own use of the URL hash.
const NAV = [
  { id: 'overview', label: 'ภาพรวม' },
  { id: 'barrier', label: 'ไม้กั้น 3.3 ม.' },
  { id: 'roads', label: '3 เส้นทาง' },
  { id: 'equipment', label: 'อุปกรณ์' },
  { id: 'cabinet', label: 'ตู้ควบคุม' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'faq', label: 'FAQ วิศวกรรม' },
  { id: 'lidar', label: 'LiDAR' },
  { id: 'qa', label: 'คำถาม' },
];

const PRIMARY = '#1F5C3D';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav
        className="no-print fixed top-0 left-0 right-0 z-50 h-14 transition-colors duration-200"
        style={{
          background: scrolled ? 'rgba(20,63,42,0.97)' : 'rgba(20,63,42,0.82)',
          fontFamily: "'Sarabun', system-ui, sans-serif",
        }}
      >
        <div className="max-w-[1160px] mx-auto h-full flex items-center px-4 sm:px-6 gap-3">
          <button
            className="md:hidden text-white text-2xl leading-none p-2 -ml-2"
            onClick={() => setOpen(true)}
            aria-label="เปิดเมนู"
          >
            ☰
          </button>

          <button onClick={() => go('hero')} className="flex items-center gap-2 bg-transparent border-none cursor-pointer">
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="6" fill={PRIMARY} />
              <path d="M5 19 Q14 7 23 19" fill="none" stroke="#E7C46A" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M5 19 h18" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <span className="text-white text-[13px] font-semibold tracking-wide hidden sm:inline">
              สะพานรัษฎาภิเศก · ทน.ลำปาง
            </span>
          </button>

          <div className="hidden md:flex items-center gap-5 ml-auto">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-[12.5px] bg-transparent border-none cursor-pointer transition-colors duration-150"
                style={{ color: 'rgba(255,255,255,0.80)', fontFamily: 'inherit' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.80)')}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {open && (
        <div
          className="no-print fixed inset-0 z-[999] overflow-y-auto md:hidden"
          style={{ background: 'rgba(20,63,42,0.98)', fontFamily: "'Sarabun', system-ui, sans-serif" }}
        >
          <button
            className="absolute top-3 right-5 text-white text-3xl leading-none p-2"
            onClick={() => setOpen(false)}
            aria-label="ปิดเมนู"
          >
            ✕
          </button>
          <div className="flex flex-col items-start gap-1 pt-16 pb-6 px-6">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-[18px] text-white font-medium py-2.5 w-full text-left bg-transparent border-none cursor-pointer"
                style={{ fontFamily: 'inherit' }}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
