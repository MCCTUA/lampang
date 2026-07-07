import React from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const GOLD = 'var(--h-gold)';
const RED = 'var(--h-red)';

function Header({ kicker, title, lead }) {
  return (
    <>
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>{kicker}</span>
      <h2 className="font-bold tracking-tight mt-3" style={{ fontSize: 31, lineHeight: 1.15, color: G }}>{title}</h2>
      {lead && <p className="mt-2" style={{ fontSize: 15, color: 'var(--h-muted)' }}>{lead}</p>}
    </>
  );
}

/* ---------- Page 1 · roles + strengths/limits + fusion (merged) ---------- */
const SENSORS = [
  {
    color: G, soft: '#E7F0E9', name: 'เรดาร์', role: 'ยามด่านหน้า — ปลุก sensor หลักเฉพาะตอนจำเป็น',
    pros: ['ตรวจจับ+ระยะ+ความเร็ว ทุกสภาพอากาศ', 'ไม่เก็บภาพบุคคล', 'คัดกรอง → ยืดอายุ sensor หลัก'],
    cons: ['วัดความสูง/รูปทรงละเอียดไม่ได้', 'ต้องห่างหม้อแปลง ≥ 5 ม.'],
  },
  {
    color: GOLD, soft: 'var(--h-gold-soft)', name: 'กล้องคู่ (ITS)', role: 'ประเมินความสูง + เก็บภาพหลักฐานเหตุการณ์',
    pros: ['ภาพคมชัดกลางวัน–กลางคืน', 'ให้บริบท + หลักฐานเหตุการณ์'],
    cons: ['2 ตัวประมวลผลร่วม (คลาด ~5–10 ซม. · ช้า)', 'แม่นเมื่อรถช้า (≤ 20–30 กม./ชม.)', 'แสงจ้า/หมอกควันลดระยะ'],
  },
  {
    color: RED, soft: 'var(--h-red-soft)', name: 'เซนเซอร์สแกน (LiDAR)', role: 'วัดรูปทรง/ความสูงแม่นยำ ไม่พึ่งแสง',
    pros: ['วัดสูงแม่นเชิงรูปทรง', 'เร็ว (ไม่ต้องสะสมหลายเฟรม)'],
    cons: ['ผิวดำ/เปียก/เงา สะท้อนน้อย → ระยะสั้นลง', 'อ่อนในฝน/หมอก/ฝุ่นจัด', 'มีชิ้นส่วนหมุน อายุจำกัด'],
  },
];

export function WhySensorsMain() {
  return (
    <Section id="why1" tone="cream">
      <Header
        kicker="ทำไมเลือกอุปกรณ์แบบนี้"
        title="ทำไมต้องใช้ 3 เซนเซอร์ร่วมกัน"
        lead="ไม่มีเซนเซอร์ตัวใดตัวเดียวที่แม่นและทนทุกสภาพ — แต่ละตัวทำสิ่งที่ตัวเองเก่งที่สุด แล้วชดเชยจุดอ่อนกันและกัน"
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginTop: 16 }}>
        {SENSORS.map((s) => (
          <div key={s.name} style={{ background: '#fff', border: '1px solid var(--h-line)', borderTop: `5px solid ${s.color}`, borderRadius: 14, overflow: 'hidden' }}>
            <div style={{ background: s.soft, padding: '10px 14px' }}>
              <div style={{ fontSize: 16.5, fontWeight: 800, color: s.color }}>{s.name}</div>
              <div style={{ fontSize: 12.5, color: 'var(--h-ink)', marginTop: 2, lineHeight: 1.35 }}>{s.role}</div>
            </div>
            <div style={{ padding: '10px 14px' }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: s.color, marginBottom: 3 }}>ข้อดี</div>
              <ul style={{ margin: '0 0 8px', paddingLeft: 15, fontSize: 12.8, lineHeight: 1.45 }}>{s.pros.map((p) => <li key={p}>{p}</li>)}</ul>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: '#8A5A12', marginBottom: 3, borderTop: '1px dashed var(--h-line)', paddingTop: 7 }}>ข้อจำกัด</div>
              <ul style={{ margin: 0, paddingLeft: 15, fontSize: 12.8, lineHeight: 1.45 }}>{s.cons.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, background: 'var(--h-green-deep)', color: '#F3EFE2', borderRadius: 14, padding: '14px 20px' }}>
        <div style={{ fontSize: 15, fontWeight: 800, color: '#E7C46A', marginBottom: 5 }}>หลักการเสริมกัน (fusion)</div>
        <div style={{ fontSize: 14, lineHeight: 1.55 }}>
          เรดาร์สู้หมอก/ฝน/มืด · LiDAR แม่นเชิงรูปทรง · กล้องให้บริบทและหลักฐาน → <strong style={{ color: '#fff' }}>ไม่มีสภาพใดที่ระบบตาบอดพร้อมกันทั้งหมด</strong> · ตัดสินแบบ voting ลดทั้งกั้นรถปกติผิด และปล่อยรถสูงหลุด
        </div>
      </div>
    </Section>
  );
}

/* ---------- Page 2 · how they cover each other + hardest case ---------- */
const CMP = [
  ['กลางคืน / หมอกควัน / ฝน', 'อ่อน (พึ่งแสง)', 'ทน (เรดาร์ครอบทุกสภาพ)'],
  ['ผิวดำ / คอกกระบะเปล่า', 'พลาดได้', 'กล้อง+เรดาร์ช่วยชดเชย'],
  ['อายุอุปกรณ์', 'กล้องทำงานหนักตลอด', 'เรดาร์คัดกรอง → ยืดอายุตัวสแกน'],
  ['ปล่อยรถสูงหลุด (false miss)', 'สูงกว่า', 'ต่ำกว่า (ยืนยัน 3 ตัว)'],
];

export function WhySensorsFusion() {
  return (
    <Section id="why2" tone="soft">
      <Header kicker="ทำไมต้องใช้ 3 เซนเซอร์ (ต่อ)" title="เสริมกันอย่างไร + เคสที่ยากที่สุด" />
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 22, marginTop: 16, alignItems: 'start' }}>
        <div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.8 }}>
            <thead>
              <tr>
                {['หัวข้อ', 'กล้องอย่างเดียว', 'กล้อง + สแกน + เรดาร์'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: '8px 10px', color: '#fff', background: G, fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CMP.map((r, i) => (
                <tr key={i} style={{ background: i % 2 ? '#FBF8EF' : '#fff' }}>
                  <td style={{ padding: '8px 10px', border: '1px solid var(--h-line)', fontWeight: 600 }}>{r[0]}</td>
                  <td style={{ padding: '8px 10px', border: '1px solid var(--h-line)' }}>{r[1]}</td>
                  <td style={{ padding: '8px 10px', border: '1px solid var(--h-line)', background: i % 2 ? '#EEF5EE' : '#F3F9F3' }}>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: 12.5, color: 'var(--h-muted)', marginTop: 8 }}>
            (เรื่องความเร็ว/ระยะ/ลูกระนาด อยู่ในหน้าก่อนหน้าแล้ว จึงไม่ซ้ำที่นี่)
          </p>
        </div>
        <div style={{ background: 'var(--h-red-soft)', border: `1px solid ${RED}`, borderRadius: 14, padding: '16px 18px' }}>
          <div style={{ fontSize: 15.5, fontWeight: 800, color: RED, marginBottom: 6 }}>เคสที่ยากที่สุด (แจ้งตามตรง)</div>
          <p style={{ fontSize: 13.8, lineHeight: 1.55 }}>
            รถที่พาด <strong>เหล็ก/ไม้ยาว ขึ้นหลังคาหรือท้ายกระบะ</strong> โดยยื่นสูง — วัตถุบาง รูปทรงไม่สม่ำเสมอ และมีตัวอย่างน้อย ต้องสะสม <strong>dataset จำนวนมาก</strong> เพื่อฝึก AI · ระหว่างข้อมูลยังไม่พอ อาจหลุดได้
          </p>
          <p style={{ fontSize: 13, color: 'var(--h-ink)', marginTop: 8 }}>
            ลดความเสี่ยง: fusion 3 ตัว + จับขอบบนสุด + สะสมข้อมูลต่อเนื่อง + ไม้กั้นกายภาพเป็นด่านสุดท้าย
          </p>
        </div>
      </div>
    </Section>
  );
}
