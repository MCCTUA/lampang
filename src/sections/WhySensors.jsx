import React, { useState } from 'react';
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

// image with graceful dashed fallback
function Photo({ file, h = 96, radius = 0, caption }) {
  const [failed, setFailed] = useState(false);
  const box = { width: '100%', height: h, borderRadius: radius };
  return (
    <figure style={{ margin: 0 }}>
      {!failed ? (
        <img src={`./images/lampang/${file}`} alt={caption || ''} onError={() => setFailed(true)} style={{ ...box, objectFit: 'cover', border: '1px solid var(--h-line)', display: 'block' }} />
      ) : (
        <div style={{ ...box, border: '2px dashed var(--h-gold)', background: 'var(--h-gold-soft)', color: '#7A5A1E', fontSize: 11.5, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 6 }}>
          วางรูป: {file}
        </div>
      )}
      {caption && <figcaption style={{ fontSize: 12, color: 'var(--h-muted)', marginTop: 4, textAlign: 'center' }}>{caption}</figcaption>}
    </figure>
  );
}

/* ---------- Page 1 · roles + strengths/limits + fusion ---------- */
const SENSORS = [
  {
    color: G, soft: '#E7F0E9', file: 'sensor_radar.png', name: 'เรดาร์', role: 'ยามด่านหน้า — ปลุก sensor หลักเฉพาะตอนจำเป็น',
    pros: ['ตรวจจับ+ระยะ+ความเร็ว ทุกสภาพอากาศ', 'ไม่เก็บภาพบุคคล', 'คัดกรอง → ยืดอายุ sensor หลัก'],
    cons: ['วัดความสูง/รูปทรงละเอียดไม่ได้', 'ต้องห่างหม้อแปลง ≥ 5 ม.'],
  },
  {
    color: GOLD, soft: 'var(--h-gold-soft)', file: 'sensor_camera.png', name: 'กล้องคู่ (ITS)', role: 'ประเมินความสูง + เก็บภาพหลักฐานเหตุการณ์',
    pros: ['ภาพคมชัดกลางวัน–กลางคืน', 'ให้บริบท + หลักฐานเหตุการณ์'],
    cons: ['2 ตัวประมวลผลร่วม (คลาด ~5–10 ซม. · ช้า)', 'แม่นเมื่อรถช้า (≤ 20–30 กม./ชม.)', 'แสงจ้า/หมอกควันลดระยะ'],
  },
  {
    color: RED, soft: 'var(--h-red-soft)', file: 'sensor_lidar.png', name: 'เซนเซอร์สแกน (LiDAR)', role: 'วัดรูปทรง/ความสูงแม่นยำ ไม่พึ่งแสง',
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
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginTop: 14 }}>
        {SENSORS.map((s) => (
          <div key={s.name} style={{ background: '#fff', border: '1px solid var(--h-line)', borderTop: `5px solid ${s.color}`, borderRadius: 14, overflow: 'hidden' }}>
            <Photo file={s.file} h={158} />
            <div style={{ background: s.soft, padding: '9px 14px' }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: s.color }}>{s.name}</div>
              <div style={{ fontSize: 12, color: 'var(--h-ink)', marginTop: 2, lineHeight: 1.3 }}>{s.role}</div>
            </div>
            <div style={{ padding: '9px 14px' }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: s.color, marginBottom: 3 }}>ข้อดี</div>
              <ul style={{ margin: '0 0 7px', paddingLeft: 15, fontSize: 12.5, lineHeight: 1.4 }}>{s.pros.map((p) => <li key={p}>{p}</li>)}</ul>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: '#8A5A12', marginBottom: 3, borderTop: '1px dashed var(--h-line)', paddingTop: 6 }}>ข้อจำกัด</div>
              <ul style={{ margin: 0, paddingLeft: 15, fontSize: 12.5, lineHeight: 1.4 }}>{s.cons.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, background: 'var(--h-green-deep)', color: '#F3EFE2', borderRadius: 14, padding: '13px 20px' }}>
        <div style={{ fontSize: 14.5, fontWeight: 800, color: '#E7C46A', marginBottom: 4 }}>หลักการเสริมกัน (fusion)</div>
        <div style={{ fontSize: 13.5, lineHeight: 1.5 }}>
          เรดาร์สู้หมอก/ฝน/มืด · LiDAR แม่นเชิงรูปทรง · กล้องให้บริบทและหลักฐาน → <strong style={{ color: '#fff' }}>ไม่มีสภาพใดที่ระบบตาบอดพร้อมกันทั้งหมด</strong> · ตัดสินแบบ voting ลดทั้งกั้นรถปกติผิด และปล่อยรถสูงหลุด
        </div>
      </div>
    </Section>
  );
}

/* ---------- Page 2 · comparison + hardest case (with photos) ---------- */
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

      {/* comparison table (full width) */}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.8, marginTop: 14 }}>
        <thead>
          <tr>
            {['หัวข้อ', 'กล้องอย่างเดียว', 'กล้อง + สแกน + เรดาร์'].map((h) => (
              <th key={h} style={{ textAlign: 'left', padding: '8px 12px', color: '#fff', background: G, fontWeight: 600 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {CMP.map((r, i) => (
            <tr key={i} style={{ background: i % 2 ? '#FBF8EF' : '#fff' }}>
              <td style={{ padding: '7px 12px', border: '1px solid var(--h-line)', fontWeight: 600 }}>{r[0]}</td>
              <td style={{ padding: '7px 12px', border: '1px solid var(--h-line)' }}>{r[1]}</td>
              <td style={{ padding: '7px 12px', border: '1px solid var(--h-line)', background: i % 2 ? '#EEF5EE' : '#F3F9F3' }}>{r[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* hard case: images (left) + text (right) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 16, alignItems: 'start' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <Photo file="case_black_pickup.png" h={150} radius={10} caption="รถกระบะคอกสีดำ (เปล่า) — สะท้อนแสงน้อย" />
          <Photo file="case_steel_load.png" h={150} radius={10} caption="รถพาดเหล็ก/ไม้ยาวสูง — วัตถุบาง ยื่นสูง" />
        </div>
        <div style={{ background: 'var(--h-red-soft)', border: `1px solid ${RED}`, borderRadius: 14, padding: '14px 18px' }}>
          <div style={{ fontSize: 15.5, fontWeight: 800, color: RED, marginBottom: 6 }}>เคสที่ยากที่สุด (แจ้งตามตรง)</div>
          <p style={{ fontSize: 13.6, lineHeight: 1.55 }}>
            2 เคสนี้เป็นวัตถุ <strong>บาง · รูปทรงไม่สม่ำเสมอ · สะท้อนแสงน้อย</strong> และมีตัวอย่างน้อย ต้องสะสม <strong>dataset จำนวนมาก</strong> เพื่อฝึก AI · ระหว่างข้อมูลยังไม่พอ อาจหลุดได้
          </p>
          <p style={{ fontSize: 13, color: 'var(--h-ink)', marginTop: 8 }}>
            ลดความเสี่ยง: fusion 3 ตัว + จับขอบบนสุด + สะสมข้อมูลต่อเนื่อง + ไม้กั้นกายภาพเป็นด่านสุดท้าย
          </p>
        </div>
      </div>
    </Section>
  );
}
