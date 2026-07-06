import React from 'react';
import { motion } from 'framer-motion';

// Pain-first hero: opens with the risk to a 108-year heritage bridge,
// not with the product. CTA scrolls to the system overview.
export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center px-5 sm:px-6 pt-14"
      style={{
        background:
          'radial-gradient(120% 90% at 80% 0%, #256B47 0%, #1F5C3D 45%, #143F2A 100%)',
        color: '#F6EFD9',
      }}
    >
      {/* subtle bridge-arch motif */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-[0.10]"
        viewBox="0 0 1200 240"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ height: '38%' }}
      >
        <path d="M0 240 Q300 40 600 40 Q900 40 1200 240" fill="none" stroke="#E7C46A" strokeWidth="3" />
        <path d="M0 240 h1200" stroke="#E7C46A" strokeWidth="2" />
        {[150, 350, 600, 850, 1050].map((x) => (
          <line key={x} x1={x} y1="240" x2={x} y2={x === 600 ? 42 : 90} stroke="#E7C46A" strokeWidth="2" />
        ))}
      </svg>

      <div className="max-w-[1040px] mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="inline-block text-[12.5px] font-bold tracking-wide rounded-full px-3.5 py-1 mb-6"
            style={{ background: 'rgba(231,196,106,0.16)', color: '#E7C46A' }}
          >
            ร่างเพื่อหารือ · ยังไม่ใช่ข้อสรุป
          </span>

          <h1
            className="font-bold tracking-tight"
            style={{ fontSize: 'clamp(2rem, 1.2rem + 4.2vw, 3.6rem)', lineHeight: 1.1 }}
          >
            สะพานรัษฎาภิเศก 108 ปี<br />
            <span style={{ color: '#E7C46A' }}>ปกป้องจากรถสูงชน</span> ก่อนจะสาย
          </h1>

          <p
            className="mt-6 max-w-[62ch]"
            style={{ fontSize: 'clamp(1.05rem, 1rem + 0.6vw, 1.35rem)', color: 'rgba(246,239,217,0.9)' }}
          >
            สะพานมรดกอายุกว่าศตวรรษ เสี่ยงเสียหายถาวรทุกครั้งที่รถสูงเกินพิกัดวิ่งขึ้นสะพาน
            เราเสนอ “ประตูจำกัดความสูง 3.3 เมตร” ที่ <strong style={{ color: '#fff' }}>หยุดเฉพาะรถสูงเกิน</strong>{' '}
            โดยรถทั่วไปและทัศนียภาพสะพานไม่ได้รับผลกระทบ
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => go('overview')}
              className="rounded-full px-7 py-3 text-[15px] font-semibold cursor-pointer border-none"
              style={{ background: '#E7C46A', color: '#3A2A08' }}
            >
              ดูระบบทั้งหมด ↓
            </button>
            <button
              onClick={() => go('barrier')}
              className="rounded-full px-7 py-3 text-[15px] font-semibold cursor-pointer"
              style={{ background: 'transparent', color: '#F6EFD9', border: '1px solid rgba(246,239,217,0.5)' }}
            >
              หัวใจระบบ: ไม้กั้น 3.3 ม.
            </button>
          </div>

          {/* three principles as trust chips */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-[860px]">
            {[
              ['ไม่แตะสะพาน/โบราณสถาน', 'อุปกรณ์อยู่บนถนนสาธารณะ ห่างสะพาน ≥ 20 ม.'],
              ['เฝ้าระวัง ไม่ใช่ตรวจวัด', 'บันทึกเฉพาะเหตุการณ์ · ไม่ใช่เครื่องตรวจวัดทางการ'],
              ['รถทั่วไปไม่กระทบ', 'ระบบทำงานเฉพาะรถสูงเกิน 3.3 เมตร'],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-xl px-4 py-3.5"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(231,196,106,0.22)' }}
              >
                <div className="text-[14px] font-semibold" style={{ color: '#E7C46A' }}>{t}</div>
                <div className="text-[12.5px] mt-1" style={{ color: 'rgba(246,239,217,0.8)' }}>{d}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
