import React, { useState } from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const RED = 'var(--h-red)';

const LV = {
  g: { bg: '#E7F0E9', c: G },
  m: { bg: 'var(--h-gold-soft)', c: '#8A5A12' },
  b: { bg: 'var(--h-red-soft)', c: RED },
};
function Cell({ lv, text }) {
  const s = LV[lv];
  return <span style={{ display: 'block', background: s.bg, color: s.c, borderRadius: 8, padding: '6px 8px', fontSize: 12, fontWeight: 700, textAlign: 'center', lineHeight: 1.25 }}>{text}</span>;
}

// รูป: วางลิงก์อินเทอร์เน็ต/ไฟล์ในฟิลด์ img (เว้นว่าง = กรอบ placeholder)
function VImg({ img, name }) {
  const [failed, setFailed] = useState(!img);
  if (!failed && img) return <img src={img} alt={name} onError={() => setFailed(true)} style={{ width: 60, height: 42, objectFit: 'cover', borderRadius: 7, border: '1px solid var(--h-line)', flexShrink: 0, display: 'block' }} />;
  return <div style={{ width: 60, height: 42, borderRadius: 7, border: '2px dashed var(--h-gold)', background: 'var(--h-gold-soft)', color: '#7A5A1E', fontSize: 8.5, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexShrink: 0, padding: 2 }}>รูป</div>;
}

// vehicle | [cam,radar,lidar] each = [level,text]
const ROWS = [
  { name: 'รถบรรทุก 6 ล้อ', note: 'ตัวทึบ สูงชัด', img: '', cam: ['g', 'ดี'], radar: ['g', 'ดี'], lidar: ['g', 'ดีมาก'] },
  { name: 'รถกระบะตู้ทึบ / หลังคาสูง', note: 'รูปทรงชัด', img: '', cam: ['g', 'ดี'], radar: ['g', 'ดี'], lidar: ['g', 'ดีมาก'] },
  { name: 'รถกระบะคอกเปล่า สีดำ', note: 'ผิวดำ สะท้อนน้อย', img: '', cam: ['m', 'ดำ · คืนต้อง IR'], radar: ['g', 'ไม่ขึ้นกับสี'], lidar: ['b', 'สะท้อนน้อย'] },
  { name: 'รถพาดเหล็ก / ไม้ยาว ยื่นสูง', note: 'บาง · ตัวอย่างน้อย', img: '', cam: ['m', 'บาง/ต้องข้อมูล'], radar: ['m', 'รูปทรงบาง'], lidar: ['m', 'จับขอบบนได้'] },
  { name: 'รถบรรทุกโปร่ง / ตาข่าย / นั่งร้าน', note: 'ไม่ทึบ', img: '', cam: ['m', 'ต้องเก็บข้อมูล'], radar: ['g', 'ตรวจได้'], lidar: ['m', 'โปร่งอาจทะลุ'] },
  { name: 'รถเก๋ง / กระบะเปล่า (ต่ำ 3.3 ม.)', note: 'ไม่เข้าเกณฑ์', img: '', cam: ['g', 'ผ่านปกติ'], radar: ['g', 'ผ่านปกติ'], lidar: ['g', 'ผ่านปกติ'] },
];

export default function VehicleReview() {
  return (
    <Section id="veh" tone="cream">
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>
        รีวิว · ประเภทรถ
      </span>
      <h2 className="font-bold tracking-tight mt-2.5" style={{ fontSize: 29, lineHeight: 1.15, color: G }}>
        รถแต่ละประเภท — เทียบการตรวจของ 3 เซนเซอร์
      </h2>
      <p className="mt-1.5" style={{ fontSize: 14, color: 'var(--h-muted)' }}>
        เฉพาะรถที่เข้าถนนแคบ/เขตมรดกได้จริง (รถบัส/พ่วง/คอนเทนเนอร์เข้าไม่ได้ ตัดออก) — เขียว = ดี · เหลือง = จำกัด · แดง = แพ้
      </p>

      <div style={{ marginTop: 12 }}>
        {/* header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr 1fr 1fr', gap: 9, marginBottom: 7 }}>
          <div />
          {[['กล้อง', true], ['เรดาร์', false], ['LiDAR', false]].map(([h, camCol]) => (
            <div key={h} style={{ textAlign: 'center', fontSize: 14, fontWeight: 800, color: '#fff', background: camCol ? RED : G, borderRadius: 8, padding: '6px 0' }}>{h}</div>
          ))}
        </div>
        {ROWS.map((r) => (
          <div key={r.name} style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr 1fr 1fr', gap: 9, alignItems: 'center', marginBottom: 7 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <VImg img={r.img} name={r.name} />
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--h-ink)', lineHeight: 1.2 }}>{r.name}</div>
                <div style={{ fontSize: 11, color: 'var(--h-muted)' }}>{r.note}</div>
              </div>
            </div>
            <Cell lv={r.cam[0]} text={r.cam[1]} />
            <Cell lv={r.radar[0]} text={r.radar[1]} />
            <Cell lv={r.lidar[0]} text={r.lidar[1]} />
          </div>
        ))}
      </div>

      <div style={{ marginTop: 10, background: '#E7F0E9', border: `1px solid ${G}`, borderRadius: 12, padding: '11px 18px', fontSize: 13.5, lineHeight: 1.55 }}>
        <strong style={{ color: G }}>เคสยากที่สุด = ผิวดำ + วัตถุบางยื่นสูง</strong> — กล้อง/LiDAR แพ้บางจังหวะ แต่เรดาร์ครอบให้ · ลดเสี่ยงด้วย fusion 3 ตัว + สะสมข้อมูลต่อเนื่อง (ยิ่งใช้ยิ่งแม่น) + ไม้กั้นเป็นด่านสุดท้าย
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--h-muted)', marginTop: 7 }}>
        ระดับเชิงคุณภาพ (ประมาณการ) · ยืนยันด้วยการทดสอบหน้างาน · รูปรถใส่เป็นลิงก์/ไฟล์ได้ (ฟิลด์ img ในโค้ด)
      </p>
    </Section>
  );
}
