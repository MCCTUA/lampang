import React, { useState } from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const GOLD = 'var(--h-gold)';

// รูป 6 แบบ: วางไฟล์ชื่อ Thai_Identity_Boom_Gate_1.png ... _6.png ใน public/images/lampang/
function DesignImg({ file, n }) {
  const [failed, setFailed] = useState(false);
  const box = { width: '100%', height: 232, borderRadius: 12, display: 'block', background: 'var(--h-gold-soft)' };
  if (!failed) return <img src={`./images/lampang/${file}`} alt={`แบบที่ ${n}`} onError={() => setFailed(true)} style={{ ...box, objectFit: 'cover', border: '1px solid var(--h-line)' }} />;
  return <div style={{ ...box, border: `2px dashed ${GOLD}`, color: '#7A5A1E', fontSize: 12.5, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 8 }}>วางรูป: {file}</div>;
}

const DESIGNS = [1, 2, 3, 4, 5, 6].map((n) => ({ n, file: `Thai_Identity_Boom_Gate_${n}.png` }));

export default function BarrierHousing() {
  return (
    <Section id="barrier-housing" tone="cream">
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>
        งานตกแต่ง · เขตอนุรักษ์มรดก
      </span>
      <h2 className="font-bold tracking-tight mt-2.5" style={{ fontSize: 29, lineHeight: 1.15, color: G }}>
        6 แบบ “เสารับ/ครอบไม้กั้น” ให้กลมกลืนสะพานมรดก
      </h2>
      <p className="mt-1.5" style={{ fontSize: 14.5, color: 'var(--h-muted)' }}>
        เมื่อไม้กั้นยกขึ้น ตัวแขน/เสารับจะถูกออกแบบให้ดูสวยงาม กลมกลืนกับพื้นที่อนุรักษ์ — เลือก 1 แบบ (หรือปรับแต่งเพิ่ม)
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginTop: 16 }}>
        {DESIGNS.map((d) => (
          <div key={d.n} style={{ background: '#fff', border: '1px solid var(--h-line)', borderTop: `4px solid ${GOLD}`, borderRadius: 14, overflow: 'hidden' }}>
            <DesignImg file={d.file} n={d.n} />
            <div style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: GOLD, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 12.5, flexShrink: 0 }}>{d.n}</span>
              <span style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--h-ink)' }}>แบบที่ {d.n}</span>
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 11.5, color: 'var(--h-muted)', marginTop: 12 }}>
        ภาพร่างเพื่อเลือกแบบ · วัสดุ / สี / ลวดลายปรับได้ตามความเหมาะสม · ประสานกรมศิลปากรตามขั้นตอนก่อนติดตั้งจริง
      </p>
    </Section>
  );
}
