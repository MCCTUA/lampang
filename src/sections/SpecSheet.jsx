import React, { useState } from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
// warm gold gradient backdrop + drop-shadow (never white) for device cutouts
const IMG_BG = 'radial-gradient(circle at 50% 42%, #FCF0CC 0%, #F3DEA0 60%, #E7CB80 100%)';
const IMG_SHADOW = 'drop-shadow(0 6px 6px rgba(88,58,10,0.28))';

function Photo({ file, img, cover }) {
  const [failed, setFailed] = useState(false);
  // cover = full-bleed illustration (fills box) · else device cutout on gold gradient
  const box = { width: '100%', height: 108, borderRadius: 8, border: '1px solid var(--h-gold)', display: 'block', background: cover ? 'var(--h-gold-soft)' : IMG_BG, boxSizing: 'border-box' };
  // `img` = full URL (ideal reference photo from net · no brand) · fallback to local file · fallback to labeled box
  const src = img || (file ? `./images/lampang/${file}` : '');
  if (src && !failed) return <img src={src} alt="" onError={() => setFailed(true)} style={{ ...box, objectFit: cover ? 'cover' : 'contain', padding: cover ? 0 : 6, filter: cover ? 'none' : IMG_SHADOW }} />;
  return <div style={{ ...box, border: '2px dashed var(--h-gold)', background: 'var(--h-gold-soft)', color: '#7A5A1E', fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 4 }}>{file}</div>;
}

function SpecRow({ file, img, cover, name, specs }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 14, background: '#fff', border: '1px solid var(--h-line)', borderLeft: `5px solid ${G}`, borderRadius: 12, padding: 11, alignItems: 'center' }}>
      <Photo file={file} img={img} cover={cover} />
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
  { file: 'sensor_lidar.png', name: 'เลเซอร์สแกนเนอร์ 2D วัดความสูงรถ', specs: ['สแกนเลเซอร์ 2D (time-of-flight) · Class 1 ปลอดภัยต่อสายตา', 'ประเมิน “เขตความสูง” @3.30 ม. ในตัวสแกนเนอร์ → ส่งสัญญาณ on/off ตรงเข้า Edge AI', 'เอาต์พุต 5 ช่อง (PNP) + อินพุต 4 ช่อง · Ethernet 100BASE-TX (M12) สำหรับตั้งค่า', 'ติดตั้งสูง ~4.3 ม. ก้ม ~18° · IP67 · จ่ายไฟ 24 VDC'] },
  { file: 'sensor_camera.png', name: 'กล้องบันทึกเหตุการณ์ + อ่านป้าย (ITS)', specs: ['ความละเอียด 4 MP (2560×1440) · เลนส์ moto varifocal 2.8–12 มม.', 'ชัตเตอร์เร็วสุด ~1/100,000 วิ (รถ ~40 กม./ชม. ใช้ ~1/1000 ภาพไม่เบลอ)', 'อ่านป้ายทะเบียนเป็นหลักฐาน + วัดสูงแบบเส้นอ้างอิงเสมือน · WDR · IR-cut', 'PoE · บันทึกที่ NVR 8CH PoE 4K + HDD (เก็บ ~44 วัน) · IP67'] },
  { file: 'sensor_radar.png', name: 'เรดาร์ตรวจจับรถเข้าพื้นที่ (trigger)', specs: ['คลื่นวิทยุ (mmWave) · ทำงานทุกสภาพอากาศ กลางคืน/หมอก/PM2.5/ฝน', 'บทบาทหลัก: ตรวจจับรถเข้าพื้นที่ → สั่งกล้องถ่าย + “ปลุก” สแกนเนอร์เฉพาะตอนจำเป็น', 'ตรวจได้หลายเป้าพร้อมกัน · ต่อ dry-contact / RS-485 · ไม่ขึ้นกับสีรถ', 'IP67 · 12–24 VDC · ไม่ใช้เป็นตัววัดความสูง (คลาดจากมุม/ระยะ)'] },
  { file: 'equip_ai_box.png', name: 'Edge AI Computer (ประมวลผลหน้างาน)', specs: ['หน่วยเร่ง AI ระดับ ~100 TOPS (GPU+CPU+AI accelerator) · RAM 16 GB', 'รวมข้อมูล 3 เซนเซอร์ (fusion) ประมวลผลเรียลไทม์ · ไม่พึ่งเครือข่าย', 'I/O: รับสัญญาณสแกนเนอร์ (PNP/DI) · USB-RS485 · relay 4ch คุมไม้กั้น/ป้าย/strobe', 'Ethernet + เชื่อม 4G/5G ส่ง event ขึ้น cloud · ช่วงอุณหภูมิกว้าง · 12–19 VDC'] },
];

const SET2 = [
  { file: 'equip_barrier.png', name: 'ไม้กั้นจำกัดความสูง (boom barrier)', specs: ['แขนกั้นจำกัดความสูง 3.3 ม. + กล่องควบคุม · fail-safe พับหนีต้นน้ำ', 'safety photo-eye (เซนเซอร์กันหนีบ) + loop detector ใต้ผิวถนน', 'เวลาขึ้น–ลง ~2–6 วิ (ปรับได้) · มอเตอร์ + encoder ตำแหน่ง', 'สั่งงานผ่าน relay/GPIO จาก Edge AI · IP54–65 · 220 VAC'] },
  { file: 'led_sign.png', cover: true, name: 'ป้ายจอ LED เตือนล่วงหน้า', specs: ['full-color outdoor · pixel pitch P3.91 (3.91 มม.)', 'ขนาดจอ ~1.5 × 0.5 ม. · ความละเอียด 384 × 128 พิกเซล', 'ความสว่างสูงสู้แดด + auto-dimming · อ่านชัด ~30–50 ม.', 'ควบคุมข้อความเรียลไทม์ (Ethernet/RS-485) · IP65 · 220 VAC'] },
  { file: 'equip_ir.png', cover: true, name: 'ไฟส่องอินฟราเรด (IR) ช่วยกล้อง', specs: ['ความยาวคลื่น 850 / 940 nm · ระยะส่อง ~30–50 ม.', 'มุมกระจาย 30–60° · เปิดอัตโนมัติกลางคืน (ช่วยกล้องอ่านป้าย)', 'IP66 · 12–24 VDC'] },
  { file: 'equip_strobe.png', cover: true, name: 'ไฟสัญญาณเตือน (strobe) + ลำโพง', specs: ['strobe LED สว่างสูง · กระพริบปรับได้ · เห็นไกล', 'ลำโพงเตือน 115–123 dB · มีหน่วยเสียง (MP3) ในตัว (“รถสูงเกิน 3.3 ม.”)', 'กันน้ำ IP · 12–24 VDC'] },
];

const SET3 = [
  { file: 'equip_mdb.png', name: 'ตู้ควบคุม + ตู้ไฟ MDB (แยกกัน)', specs: ['ตู้ IT (บันทึก/Edge AI/เครือข่าย) แยกจากตู้ไฟ MDB — กัน noise + ปลอดภัย', 'MDB IP55: เบรกเกอร์หลัก+ย่อย · RCBO 30mA กันไฟดูด · earth bar', 'กันฟ้าผ่า: SPD Type 1 (12.5–25 kA) + Type 2 + SPD IP68 กลางแจ้ง', 'ตู้เหล็ก IP55 แขวนเสา · พัดลม + เทอร์โมสตัทระบายความร้อน'] },
  { file: 'equip_ups.png', cover: true, name: 'UPS / สำรองไฟ + power', specs: ['UPS online double-conversion ~3 kVA + แบตเตอรี่', 'สำรองไฟเมื่อไฟดับ — คงการหยุดรถ/แจ้งเตือนต่อได้ (fail-safe)', 'PSU 24V DC 240W (DIN-rail) จ่ายเซนเซอร์/สแกนเนอร์'] },
  { file: 'equip_speedbump.png', name: 'ลูกระนาดยาง (rubber speed bump)', specs: ['ยางอุตสาหกรรม modular · ติดตั้งด้วย epoxy ไม่ทุบผิวถนน (เหมาะเขตมรดก)', 'บังคับความเร็ว ≤ 30 กม./ชม. → กล้อง/สแกนแม่น + เบรกทัน', 'ถอด/ปรับตำแหน่งได้'] },
  { file: 'equip_pole.png', name: 'เสา/โครงติดตั้ง + เครือข่าย', specs: ['เสาเหล็กชุบกัลวาไนซ์ ~6 ม. (hot-dip) + แขนยื่น · กราวด์ rod มอก. + สายทองแดง 35 มม.²', 'สวิตช์อุตสาหกรรม 5-port GbE (DIN-rail · -40~75°C)', 'router 4G/5G dual-SIM (failover) + RS-485 · เสาอากาศ + กันฟ้าผ่าสายสัญญาณ', 'ตัวเลือกไฟเบอร์ (fiber) — งานส่วนเพิ่ม'] },
];

export function SpecSheet1() {
  return <SpecPage id="spec1" tone="cream" title="สเปกอุปกรณ์ (1/3) — เซนเซอร์ตรวจจับ & Edge AI Computer" rows={SET1} />;
}
export function SpecSheet2() {
  return <SpecPage id="spec2" tone="soft" title="สเปกอุปกรณ์ (2/3) — ไม้กั้น · ป้าย · ไฟเตือน" rows={SET2} />;
}
export function SpecSheet3() {
  return <SpecPage id="spec3" tone="cream" title="สเปกอุปกรณ์ (3/3) — ไฟฟ้า · ลูกระนาด · โครงสร้าง" rows={SET3} />;
}
