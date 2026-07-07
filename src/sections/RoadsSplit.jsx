import React, { useState } from 'react';
import { Section } from '../components/ui.jsx';
import { R1Map, R2Map, R3Map } from '../components/diagrams.jsx';

const G = 'var(--h-green)';
const GOLD = 'var(--h-gold)';
const RED = 'var(--h-red)';
const ZONECOLORS = [G, GOLD, RED]; // จุดวัด · ป้าย · ไม้กั้น

// prominent sketch image with graceful fallback
function Sketch({ file }) {
  const [failed, setFailed] = useState(false);
  const box = { width: '100%', height: 178, display: 'block' };
  if (!failed) return <img src={`./images/lampang/${file}`} alt="" onError={() => setFailed(true)} style={{ ...box, objectFit: 'cover' }} />;
  return <div style={{ ...box, background: 'var(--h-gold-soft)', color: '#7A5A1E', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 8 }}>วางรูป: {file}</div>;
}

function ZoneColumn({ i, label, file, devices }) {
  const c = ZONECOLORS[i];
  return (
    <div style={{ background: '#fff', border: '1px solid var(--h-line)', borderTop: `5px solid ${c}`, borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <Sketch file={file} />
      <div style={{ padding: '11px 15px', flex: 1 }}>
        <div style={{ fontSize: 14.5, fontWeight: 800, color: c, lineHeight: 1.25, marginBottom: 7 }}>{label}</div>
        <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, lineHeight: 1.5 }}>
          {devices.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </div>
    </div>
  );
}

function RoadSlide({ id, tone, kicker, title, subtitle, Map, zones, notes }) {
  return (
    <Section id={id} tone={tone}>
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>{kicker}</span>
      <h2 className="font-bold tracking-tight mt-2" style={{ fontSize: 27, lineHeight: 1.15, color: G }}>{title}</h2>
      <p className="mt-1" style={{ fontSize: 13.5, color: 'var(--h-muted)' }}>{subtitle}</p>

      {/* map (flow reference) */}
      <div style={{ width: '82%', margin: '10px auto 0' }}><Map /></div>

      {/* 3 columns following the map: จุดวัด → ป้าย → ไม้กั้น */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginTop: 12 }}>
        {zones.map((z, i) => <ZoneColumn key={z.file} i={i} label={z.label} file={z.file} devices={z.devices} />)}
      </div>

      {/* compact notes strip */}
      <div style={{ marginTop: 12, background: 'var(--h-cream-soft)', border: '1px solid var(--h-line)', borderRadius: 10, padding: '9px 16px' }}>
        <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12.5, lineHeight: 1.45, columns: 2, columnGap: 28 }}>
          {notes.map((n) => <li key={n}>{n}</li>)}
        </ul>
      </div>
    </Section>
  );
}

export function RoadR1() {
  return (
    <RoadSlide
      id="r1" tone="paper"
      kicker="R1 · รายละเอียดถนน"
      title="ถนนรัษฎา ฝั่งใต้ — ตรง ~126 ม. (ไม่มีซอย)"
      subtitle="เข้าจากสามแยก Tipchang · รถเพิ่งเลี้ยวจึงวิ่งช้า = จับง่าย"
      Map={R1Map}
      zones={[
        { label: '① จุดวัดความสูง (ปากทาง)', file: 'R1_1_entry.png', devices: ['กล้องประเมินสูง 2 ต้น', 'เรดาร์', 'ลูกระนาด', 'ป้ายเตือน'] },
        { label: '② ป้าย LED (จุด Sirimas ~55 ม.)', file: 'R1_2_led.png', devices: ['ป้าย LED', 'ตู้ควบคุม + สมองกล'] },
        { label: '③ ไม้กั้น (คอสะพานใต้)', file: 'R1_3_throat.png', devices: ['ไม้กั้น 3.3 ม.', 'กล้องบันทึกเหตุการณ์ ×2', 'strobe'] },
      ]}
      notes={['ถนนตรง ไม่มีซอย = จับรถได้ครบ', 'Sirimas ลึก 28 ม. → เรดาร์ไม่มีตัวสะท้อนกวน', 'ทน.ให้ทำลูกระนาด → ชุดประหยัด (กล้อง)', 'ถ้าไม่ให้ → เต็มระบบ (เรดาร์ตรวจไกล)']}
    />
  );
}

export function RoadR2() {
  return (
    <RoadSlide
      id="r2" tone="soft"
      kicker="R2 · รายละเอียดถนน"
      title="ถนนรัษฎา ฝั่งเหนือ — ตรง ~98 ม."
      subtitle="รถหนีไม่ได้ · สายไฟ/หม้อแปลงหนาสุด · ออกจากไฟแดงช้า = จับง่ายกว่าที่คิด"
      Map={R2Map}
      zones={[
        { label: '① จุดวัดความสูง (ปากทาง 10 ม.)', file: 'R2_1_entry.png', devices: ['กล้อง 2 ต้น', 'เรดาร์', 'เซนเซอร์สแกน'] },
        { label: '② ป้าย LED (เสากลาง ~50 ม.)', file: 'R2_2_led.png', devices: ['ป้าย LED', 'ตู้ควบคุม'] },
        { label: '③ ไม้กั้น (คอสะพานเหนือ)', file: 'R2_3_throat.png', devices: ['ไม้กั้น 3.3 ม.', 'กล้องบันทึกเหตุการณ์', 'strobe'] },
      ]}
      notes={['รถเข้าแล้วหนีไม่ได้ → ไม้กั้น = ด่านเดียว', 'เตือนตั้งแต่ปากทาง + เสนอป้ายที่สี่แยก', 'เรดาร์ห่างหม้อแปลง ≥ 5 ม. + ปรับมุม', 'ตรวจก่อนต้นก้ามปู · ถนนแคบ 7.5 ม.']}
    />
  );
}

export function RoadR3() {
  return (
    <RoadSlide
      id="r3" tone="paper"
      kicker="R3 · รายละเอียดถนน (ทางเลือกเสริม)"
      title="ถนนตลาดเก่า (กาดกองต้า) — ~93 ม."
      subtitle="ถนนคนเดินสุดสัปดาห์ · แคบ · ไม่มีเสาไฟ (เสาโคมมรดก ห้ามแตะ)"
      Map={R3Map}
      zones={[
        { label: '① จุดวัด (3-แยกปากทาง)', file: 'R3_1_junction.png', devices: ['กล้อง + เรดาร์ + เซนเซอร์สแกน', '(บนเสาไฟเดิม)'] },
        { label: '② ป้าย LED (ที่ 3-แยก)', file: 'R3_2_led.png', devices: ['ป้าย LED', 'ตู้ (กลมกลืน ไม่เสียตลาด)'] },
        { label: '③ ไม้กั้น (คอสะพานใต้)', file: 'R3_3_throat.png', devices: ['ไม้กั้น', 'กล้องบันทึกเหตุการณ์ (ร่วม R1)'] },
      ]}
      notes={['ตัด R3 ได้ สะพานยังปลอดภัย (ไม้กั้นร่วม R1)', 'เซนเซอร์ R3 เพิ่มแค่เตือนล่วงหน้า → เลือกตามงบ', 'ต้องถาม ทน.: รถสูงเข้าถนนตลาดได้ไหม', 'วัน/เวลาถนนคนเดิน · สาย 93 ม. ชิดลิมิต']}
    />
  );
}
