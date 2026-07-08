import React, { useState } from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const GOLD = 'var(--h-gold)';
const RED = 'var(--h-red)';

// score → color + label + bar width
const SCORE = {
  good: { c: G, w: 1.0, label: 'ตรวจดี' },
  ok: { c: '#B07A1E', w: 0.6, label: 'พอใช้/ต้องทดสอบ' },
  limit: { c: RED, w: 0.35, label: 'ข้อจำกัด' },
  pass: { c: 'var(--h-green2)', w: 0.9, label: 'ผ่านปกติ (ไม่เข้าเกณฑ์)' },
};

// รูป: วางลิงก์อินเทอร์เน็ตในฟิลด์ img (เว้นว่าง = แสดงกรอบชื่อรถ)
const VEHICLES = [
  { name: 'รถบรรทุก 6 ล้อ', note: 'สูงเกินได้ · ตัวทึบชัดเจน', score: 'good', img: '' },
  { name: 'รถกระบะตู้ทึบ / หลังคาสูง', note: 'ห้องเย็น/ตู้ทึบ · รูปทรงชัด', score: 'good', img: '' },
  { name: 'รถกระบะ (เปล่า)', note: 'ต่ำกว่า 3.3 ม. · ผ่านปกติ', score: 'pass', img: '' },
  { name: 'รถเก๋ง', note: 'ต่ำกว่า 3.3 ม. · ผ่านปกติ', score: 'pass', img: '' },
  { name: 'รถกระบะคอกเปล่า สีดำ', note: 'LiDAR สะท้อนน้อย → เสริมเรดาร์/กล้อง', score: 'limit', img: '' },
  { name: 'รถพาดเหล็ก/ไม้ยาว ยื่นสูง', note: 'บาง · รูปทรงไม่สม่ำเสมอ · ตัวอย่างน้อย', score: 'limit', img: '' },
  { name: 'รถบรรทุกโปร่ง/ตาข่าย/นั่งร้าน', note: 'ไม่ทึบ → ต้องเก็บข้อมูลเพิ่ม', score: 'ok', img: '' },
];

function VImg({ img, name }) {
  const [failed, setFailed] = useState(!img);
  if (!failed && img) return <img src={img} alt={name} onError={() => setFailed(true)} style={{ width: '100%', height: 56, objectFit: 'cover', borderRadius: 8, border: '1px solid var(--h-line)', display: 'block' }} />;
  return <div style={{ width: '100%', height: 56, borderRadius: 8, border: '2px dashed var(--h-gold)', background: 'var(--h-gold-soft)', color: '#7A5A1E', fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 3 }}>รูป (ลิงก์)</div>;
}

export default function VehicleReview() {
  return (
    <Section id="veh" tone="cream">
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>
        รีวิว · ประเภทรถ
      </span>
      <h2 className="font-bold tracking-tight mt-2.5" style={{ fontSize: 29, lineHeight: 1.15, color: G }}>
        รถแต่ละประเภท ตรวจความสูงได้ดีแค่ไหน
      </h2>
      <p className="mt-1.5" style={{ fontSize: 14, color: 'var(--h-muted)' }}>
        เฉพาะรถที่เข้าถนนแคบ/เขตมรดกได้จริง (รถบัส/พ่วง/คอนเทนเนอร์เข้าไม่ได้ ตัดออก) — แถบสีคือระดับการตรวจจับของระบบ 3 เซนเซอร์
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
        {VEHICLES.map((v) => {
          const s = SCORE[v.score];
          const col = s.c;
          return (
            <div key={v.name} style={{ display: 'grid', gridTemplateColumns: '92px 1fr 250px', gap: 14, alignItems: 'center', background: '#fff', border: '1px solid var(--h-line)', borderRadius: 10, padding: '8px 14px' }}>
              <VImg img={v.img} name={v.name} />
              <div>
                <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--h-ink)' }}>{v.name}</div>
                <div style={{ fontSize: 12, color: 'var(--h-muted)', marginTop: 1 }}>{v.note}</div>
              </div>
              <div>
                <div style={{ position: 'relative', height: 16, background: '#EDE8DA', borderRadius: 8 }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${s.w * 100}%`, background: col, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 8 }}>
                    <span style={{ fontSize: 10.5, fontWeight: 800, color: '#fff' }}>{s.label}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p style={{ fontSize: 11.5, color: 'var(--h-muted)', marginTop: 10 }}>
        ระดับเชิงคุณภาพ (ประมาณการ) · ข้อจำกัดลดความเสี่ยงด้วย fusion 3 ตัว + สะสมข้อมูลต่อเนื่อง + ไม้กั้นกายภาพ · รูปรถใส่เป็นลิงก์ (แก้ฟิลด์ img ในโค้ด)
      </p>
    </Section>
  );
}
