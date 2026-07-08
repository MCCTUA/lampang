import React from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const RED = 'var(--h-red)';

// level → badge style
const LV = {
  g: { bg: '#E7F0E9', c: G, },
  m: { bg: 'var(--h-gold-soft)', c: '#8A5A12' },
  b: { bg: 'var(--h-red-soft)', c: RED },
};
function Badge({ lv, text }) {
  const s = LV[lv];
  return <span style={{ display: 'inline-block', background: s.bg, color: s.c, borderRadius: 8, padding: '5px 9px', fontSize: 12.5, fontWeight: 700, width: '100%', textAlign: 'center', lineHeight: 1.2 }}>{text}</span>;
}

// surface, swatch, [camera, lidar, radar] each = [level, text]
const ROWS = [
  { name: 'ขาว / สีอ่อน', sw: '#EDEBE2', cam: ['g', 'ดี'], lidar: ['g', 'ดีมาก'], radar: ['g', 'ดี'] },
  { name: 'สีกลาง (แดง/น้ำเงิน/เทา)', sw: '#5F7286', cam: ['g', 'ดี'], lidar: ['g', 'ดี'], radar: ['g', 'ดี'] },
  { name: 'ดำด้าน', sw: '#1C1C1C', cam: ['m', 'ปานกลาง (คืนต้อง IR)'], lidar: ['b', 'แย่'], radar: ['g', 'ดี'] },
  { name: 'ผิวเงา/มันวาว (โครเมียม/กระจก)', sw: 'linear-gradient(135deg,#dfe4e8,#8b95a0)', cam: ['m', 'แสงจ้า/สะท้อน'], lidar: ['b', 'สะท้อนหนีมุม'], radar: ['g', 'ดี'] },
  { name: 'ผิวเปียก (ฝน)', sw: '#4C6B78', cam: ['m', 'ปานกลาง'], lidar: ['m', 'ลดลง'], radar: ['g', 'ดี'] },
];

export default function ColorReview() {
  return (
    <Section id="color" tone="soft">
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>
        รีวิว · สี / ผิว / ความมันวาว
      </span>
      <h2 className="font-bold tracking-tight mt-2.5" style={{ fontSize: 29, lineHeight: 1.15, color: G }}>
        สีและผิววัตถุ มีผลต่อเซนเซอร์แต่ละตัวอย่างไร
      </h2>
      <p className="mt-1.5" style={{ fontSize: 14, color: 'var(--h-muted)' }}>
        สี/ความมันวาว/ความเปียก กระทบกล้องและ LiDAR — แต่ <strong>เรดาร์ไม่ขึ้นกับสี</strong> จึงเป็นตัวกันพลาด
      </p>

      {/* matrix */}
      <div style={{ marginTop: 14 }}>
        {/* header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 10, marginBottom: 8 }}>
          <div />
          {['กล้อง', 'LiDAR', 'เรดาร์'].map((h, i) => (
            <div key={h} style={{ textAlign: 'center', fontSize: 14, fontWeight: 800, color: '#fff', background: i === 2 ? G : 'var(--h-green2)', borderRadius: 8, padding: '6px 0' }}>{h}{i === 2 ? ' ★' : ''}</div>
          ))}
        </div>
        {ROWS.map((r) => (
          <div key={r.name} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 10, alignItems: 'center', marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 30, height: 30, borderRadius: 7, background: r.sw, border: '1px solid var(--h-line)', flexShrink: 0 }} />
              <span style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--h-ink)' }}>{r.name}</span>
            </div>
            <Badge lv={r.cam[0]} text={r.cam[1]} />
            <Badge lv={r.lidar[0]} text={r.lidar[1]} />
            <Badge lv={r.radar[0]} text={r.radar[1]} />
          </div>
        ))}
      </div>

      <div style={{ marginTop: 14, background: '#E7F0E9', border: `1px solid ${G}`, borderRadius: 12, padding: '12px 18px', fontSize: 14, lineHeight: 1.6 }}>
        <strong style={{ color: G }}>เรดาร์เขียวทุกแถว</strong> — ไม่ขึ้นกับสี/ความมันวาว/ความเปียก → นี่คือเหตุผลที่ <strong>LiDAR ต้องมีเรดาร์คู่เสมอ</strong> (เรดาร์ครอบจุดที่กล้อง/LiDAR แพ้)
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--h-muted)', marginTop: 8 }}>ระดับเชิงคุณภาพ (ประมาณการ) · ยืนยันด้วยการทดสอบหน้างาน</p>
    </Section>
  );
}
