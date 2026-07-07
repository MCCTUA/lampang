import React, { useState } from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';

function Photo({ file }) {
  const [failed, setFailed] = useState(false);
  const box = { width: '100%', height: '100%', minHeight: 92 };
  if (!failed) return <img src={`./images/lampang/${file}`} alt="" onError={() => setFailed(true)} style={{ ...box, objectFit: 'cover', borderRadius: 8, border: '1px solid var(--h-line)', display: 'block' }} />;
  return <div style={{ ...box, border: '2px dashed var(--h-gold)', background: 'var(--h-gold-soft)', color: '#7A5A1E', fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, textAlign: 'center', padding: 4 }}>{file}</div>;
}

function SpecRow({ file, name, specs }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 14, background: '#fff', border: '1px solid var(--h-line)', borderLeft: `5px solid ${G}`, borderRadius: 12, padding: 11, alignItems: 'center' }}>
      <Photo file={file} />
      <div>
        <div style={{ fontSize: 15, fontWeight: 800, color: G, marginBottom: 4 }}>{name}</div>
        <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12.6, lineHeight: 1.5 }}>
          {specs.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </div>
    </div>
  );
}

function SpecPage({ id, tone, title, rows }) {
  return (
    <Section id={id} tone={tone}>
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>สเปกอุปกรณ์ (datasheet อ้างอิง · ไม่ระบุยี่ห้อ/รุ่น)</span>
      <h2 className="font-bold tracking-tight mt-2" style={{ fontSize: 27, lineHeight: 1.15, color: G }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
        {rows.map((r) => <SpecRow key={r.name} {...r} />)}
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--h-muted)', marginTop: 8 }}>เผื่อเจ้าหน้าที่สอบถามสเปก · ตัวเลขเป็นช่วงอ้างอิงเชิงเทคนิค ยืนยันกับซัพพลายเออร์เมื่อ lock รุ่น</p>
    </Section>
  );
}

const SET1 = [
  { file: 'sensor_radar.png', name: 'เรดาร์ตรวจจับยานพาหนะ', specs: ['ความถี่ 76–77 GHz (FMCW mmWave)', 'ระยะตรวจจับสูงสุด ~150–200 ม. · วัดความเร็ว 0–~250 กม./ชม.', 'ความแม่นระยะ ±0.1–0.5 ม. · มุมมอง ~±60° · ติดตามหลายเป้าพร้อมกัน', 'ทุกสภาพอากาศ (กลางคืน/หมอก/ฝน) · IP67 · 12–24 VDC'] },
  { file: 'sensor_camera.png', name: 'กล้องบันทึกเหตุการณ์ (ITS)', specs: ['เซนเซอร์ 2–4 MP (1080p/1440p) · 25–60 fps', 'ชัตเตอร์ 1/1000–1/10000 วิ (หยุดภาพไม่เบลอ) · WDR ≥ 120 dB', 'Day/Night + IR-cut · เลนส์ varifocal · GigE/RTSP', 'IP67 · -30 ถึง +60°C · PoE/12 VDC'] },
  { file: 'sensor_lidar.png', name: 'เซนเซอร์สแกนระยะ (2D LiDAR)', specs: ['Time-of-flight 905 nm · Class 1 (ปลอดภัยต่อสายตา)', 'มุมสแกน ~275° · อัตรา 10–80 Hz · ละเอียด 0.05–0.25°', 'ระยะ 0.08–25 ม. (สะท้อน 90%) · ±10 มม. · ทำซ้ำ ≤5 มม.', 'โซนตรวจสูงสุด ~16 ชุด × 3 โซน · IP67 · Ethernet + I/O'] },
  { file: 'equip_ai_box.png', name: 'สมองกลประมวลผล AI (Edge AI Box)', specs: ['หน่วยเร่ง AI ~20–100 TOPS · GPU + CPU + AI accelerator ในตัว', 'ประมวลผลเรียลไทม์หน้างาน รองรับหลายกล้อง/เซนเซอร์ · ไม่พึ่งเครือข่าย', 'I/O: GPIO คุมไม้กั้น/ป้าย/strobe · Ethernet · 4G/5G', 'อุณหภูมิใช้งานกว้าง (industrial) · 12–19 VDC'] },
];

const SET2 = [
  { file: 'equip_barrier.png', name: 'ไม้กั้นจำกัดความสูง', specs: ['ความสูงจำกัด 3.3 ม. · แขนคลุมเลนเดียว', 'ความเร็วขึ้น–ลง ~2–6 วินาที (ปรับได้)', 'fail-safe: พับหนีทางต้นน้ำ · ข้อต่อ sacrificial + สลิงกันปลิว', 'มอเตอร์ + encoder ตำแหน่ง · คุมผ่าน GPIO · IP54–65 · 220 VAC'] },
  { file: 'led_sign.png', name: 'ป้ายจอ LED', specs: ['full-color outdoor · pixel pitch ~P6–P10', 'ความสว่าง ~5,000–7,000 nits · auto-dimming', 'ระยะอ่านชัด ~30–50 ม. · ควบคุมข้อความเรียลไทม์', 'IP65 · 220 VAC'] },
  { file: 'equip_ir.png', name: 'ไฟส่องอินฟราเรด (IR)', specs: ['ความยาวคลื่น 850 / 940 nm · ระยะส่อง ~30–50 ม.', 'มุมกระจาย 30–60° · เปิดอัตโนมัติกลางคืน (ช่วยกล้อง)', 'IP66 · 12–24 VDC'] },
  { file: 'equip_strobe.png', name: 'ไฟสัญญาณเตือน (strobe) + ลำโพง', specs: ['strobe LED สว่างสูง · ความถี่กระพริบปรับได้ · เห็นไกล', 'ลำโพงเสียงเตือน/ประกาศ ~110 dB (“รถสูงเกิน 3.3 ม.”)', 'IP66 · 12–24 VDC'] },
];

const SET3 = [
  { file: 'equip_mdb.png', name: 'ตู้ควบคุม + ตู้ไฟ MDB', specs: ['ตู้เหล็ก/สแตนเลส IP54–65 · มีระบายความร้อน', 'MDB: เมนเบรกเกอร์ + RCD กันไฟรั่ว + surge protection', 'รวมชุดควบคุมอุปกรณ์ในโซน'] },
  { file: 'equip_ups.png', name: 'UPS / แบตเตอรี่สำรอง', specs: ['สำรองไฟเมื่อไฟดับ (fail-safe) · ~1–3 kVA', 'online / line-interactive', 'คงการทำงานหยุดรถได้ช่วงไฟดับ'] },
  { file: 'equip_speedbump.png', name: 'ลูกระนาดยาง (rubber speed bump)', specs: ['ยางรีไซเคิล modular · ถอด/ปรับตำแหน่งได้', 'บังคับความเร็ว ≤ 30 กม./ชม.', 'ติดตั้งไม่ต้องทุบผิวถนน (เหมาะเขตมรดก)'] },
  { file: 'equip_pole.png', name: 'เสา/โครงติดตั้ง + เครือข่าย', specs: ['เสาเหล็กชุบกัลวาไนซ์ + แขนยื่น/ฐานราก', 'รองรับกล้อง/เซนเซอร์/ป้าย', 'เครือข่าย 4G/5G router หรือ fiber (งานส่วนเพิ่ม)'] },
];

export function SpecSheet1() {
  return <SpecPage id="spec1" tone="cream" title="สเปกอุปกรณ์ (1/3) — เซนเซอร์ตรวจจับ & สมองกล AI" rows={SET1} />;
}
export function SpecSheet2() {
  return <SpecPage id="spec2" tone="soft" title="สเปกอุปกรณ์ (2/3) — ไม้กั้น · ป้าย · ไฟเตือน" rows={SET2} />;
}
export function SpecSheet3() {
  return <SpecPage id="spec3" tone="cream" title="สเปกอุปกรณ์ (3/3) — ไฟฟ้า · ลูกระนาด · โครงสร้าง" rows={SET3} />;
}
