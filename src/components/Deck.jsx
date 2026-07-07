import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

// ---------------------------------------------------------------------------
// Fixed-slide deck kit (1280×720), modelled on the ElderlyCare deck.
//  · AutoSlide : scales the slide to fit the viewport AND scales its content
//                down to fit 720px height (so nothing overflows / is cut).
//  · Toolbar   : "พิมพ์ / บันทึก PDF" (window.print) + jump-to-slide menu.
//  · ScrollDots: right-edge navigation dots.
// ---------------------------------------------------------------------------

const GREEN = '#1F5C3D';
const GREEN_HOVER = '#2F7D54';

function computeViewportScale() {
  if (typeof window === 'undefined') return 1;
  const availW = Math.max(window.innerWidth - 32, 320);
  const availH = Math.max(window.innerHeight - 150, 320);
  return Math.min(availW / 1280, availH / 720, 1);
}

function AutoSlide({ children }) {
  const [vp, setVp] = useState(computeViewportScale);
  const [fit, setFit] = useState(1);
  const contentRef = useRef(null);
  const lastW = useRef(typeof window === 'undefined' ? 0 : window.innerWidth);

  // viewport fit — re-fit only on width change (mobile address-bar safe)
  useEffect(() => {
    const apply = () => {
      if (window.visualViewport && Math.abs(window.visualViewport.scale - 1) > 0.01) return;
      if (window.innerWidth === lastW.current) return;
      lastW.current = window.innerWidth;
      setVp(computeViewportScale());
    };
    window.addEventListener('resize', apply);
    window.addEventListener('orientationchange', apply);
    return () => {
      window.removeEventListener('resize', apply);
      window.removeEventListener('orientationchange', apply);
    };
  }, []);

  // content fit — scale the slide's content down if it is taller than 720px
  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () => {
      const h = el.scrollHeight;
      setFit(h > 720 ? Math.max(720 / h, 0.2) : 1);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    const t = setTimeout(measure, 500);          // re-measure after fonts/images load
    window.addEventListener('load', measure);
    return () => {
      ro.disconnect();
      clearTimeout(t);
      window.removeEventListener('load', measure);
    };
  }, []);

  return (
    <div className="slide-wrapper" style={{ width: 1280 * vp, height: 720 * vp }}>
      <div className="slide-scale" style={{ transform: `scale(${vp})`, width: 1280, height: 720 }}>
        <div
          ref={contentRef}
          className="slide-fit"
          style={{ transform: fit < 1 ? `scale(${fit})` : 'none', width: 1280 }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function Toolbar({ titles }) {
  const [open, setOpen] = useState(false);
  const goTo = (i) => {
    document.getElementById(`slide-${i + 1}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };
  return (
    <div className="deck-toolbar">
      <span style={{ fontWeight: 600 }}>สะพานรัษฎาภิเศก · ทน.ลำปาง</span>
      <span style={{ flex: 1 }} />
      <span className="note">กด "พิมพ์/บันทึก PDF" แล้วเลือก Landscape</span>
      <button onClick={() => setOpen(!open)}>{open ? 'ปิดเมนู' : 'ไปสไลด์...'}</button>
      <button onClick={() => window.print()}>พิมพ์ / บันทึก PDF</button>
      {open && (
        <div style={{ position: 'absolute', top: 44, right: 16, background: '#FFF', color: '#22271F', borderRadius: 8, boxShadow: '0 10px 30px rgba(0,0,0,.2)', padding: 8, maxHeight: 'calc(100vh - 110px)', overflowY: 'auto', minWidth: 300, zIndex: 1100 }}>
          {titles.map((t, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              style={{ display: 'block', width: '100%', textAlign: 'left', padding: '8px 12px', fontSize: 13, color: '#22271F', background: 'transparent', border: 'none', borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#F5F1E4')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              {i + 1} · {t}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ScrollDots({ count }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = parseInt(e.target.dataset.idx, 10);
          if (!isNaN(idx)) setActive(idx);
        }
      }),
      { threshold: 0.45, rootMargin: '-20% 0px -20% 0px' }
    );
    for (let i = 0; i < count; i++) {
      const el = document.getElementById(`slide-${i + 1}`);
      if (el) { el.dataset.idx = String(i); obs.observe(el); }
    }
    return () => obs.disconnect();
  }, [count]);

  return (
    <div className="scroll-dots">
      {Array.from({ length: count }).map((_, i) => {
        const on = i === active;
        return (
          <button
            key={i}
            type="button"
            aria-label={`ไปยังสไลด์ที่ ${i + 1}`}
            title={`สไลด์ ${i + 1}`}
            onClick={() => {
              document.getElementById(`slide-${i + 1}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              setActive(i);
            }}
            style={{
              width: on ? 12 : 8, height: on ? 12 : 8, padding: 0, borderRadius: '50%',
              background: on ? '#FFF' : 'rgba(255,255,255,0.45)',
              border: on ? `2px solid ${GREEN_HOVER}` : '1px solid rgba(255,255,255,0.6)',
              transition: 'all .2s ease', cursor: 'pointer', flexShrink: 0,
            }}
          />
        );
      })}
    </div>
  );
}

export default function Deck({ slides }) {
  return (
    <>
      <Toolbar titles={slides.map((s) => s.label)} />
      <ScrollDots count={slides.length} />
      <div className="deck-root">
        {slides.map((s, i) => (
          <div key={s.id} id={`slide-${i + 1}`}>
            <AutoSlide>{s.node}</AutoSlide>
          </div>
        ))}
      </div>
    </>
  );
}
