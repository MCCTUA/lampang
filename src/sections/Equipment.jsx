import React, { useState } from 'react';
import { Section, SectionHeader, Card, Pill, Note, FadeUp } from '../components/ui.jsx';

/* Photo slot with graceful fallback — drop the .png into public/images/lampang/ */
function EquipPhoto({ file }) {
  const [failed, setFailed] = useState(false);
  if (!failed) {
    return (
      <img
        src={`./images/lampang/${file}`}
        alt=""
        onError={() => setFailed(true)}
        className="w-full block rounded-lg mb-3"
        style={{ border: '1px solid var(--h-line)', aspectRatio: '4 / 3', objectFit: 'cover' }}
      />
    );
  }
  return (
    <div
      className="flex items-center justify-center text-center rounded-lg px-3 mb-3"
      style={{ aspectRatio: '4 / 3', border: '2px dashed var(--h-gold)', background: 'var(--h-gold-soft)', color: '#7A5A1E', fontSize: 12.5 }}
    >
      วางรูป: <span className="latin">&nbsp;images/lampang/{file}</span>
    </div>
  );
}

/* Small line-icon for support equipment (no photo) */
function Glyph({ kind }) {
  const c = 'var(--h-green2)';
  const common = { width: 40, height: 40, viewBox: '0 0 40 40', fill: 'none' };
  if (kind === 'barrier')
    return (
      <svg {...common}><rect x="6" y="28" width="28" height="4" rx="1" fill="var(--h-road)" /><rect x="8" y="10" width="3" height="18" fill="#8A8270" /><line x1="10" y1="14" x2="34" y2="14" stroke="var(--h-red)" strokeWidth="3" strokeLinecap="round" /></svg>
    );
  if (kind === 'led')
    return (
      <svg {...common}><rect x="6" y="9" width="28" height="16" rx="2" fill="#143F2A" /><text x="20" y="21" fontSize="9" fill="#E7C46A" textAnchor="middle" fontFamily="monospace">3.3m</text><rect x="18" y="25" width="4" height="8" fill="#8A8270" /></svg>
    );
  // strobe
  return (
    <svg {...common}>
      <circle cx="20" cy="20" r="6" fill="var(--h-gold)" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line
          key={a}
          x1={20 + 9 * Math.cos((a * Math.PI) / 180)}
          y1={20 + 9 * Math.sin((a * Math.PI) / 180)}
          x2={20 + 14 * Math.cos((a * Math.PI) / 180)}
          y2={20 + 14 * Math.sin((a * Math.PI) / 180)}
          stroke="var(--h-gold)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

function ProCon({ pros, cons }) {
  return (
    <div className="mt-3 grid grid-cols-1 gap-2.5">
      <div className="rounded-lg px-3 py-2.5" style={{ background: '#E7F0E9' }}>
        <div className="text-[12.5px] font-bold mb-1" style={{ color: 'var(--h-green)' }}>ข้อดี</div>
        <ul className="list-disc pl-4 text-[13.5px] space-y-0.5" style={{ color: 'var(--h-ink)' }}>
          {pros.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
      <div className="rounded-lg px-3 py-2.5" style={{ background: 'var(--h-gold-soft)' }}>
        <div className="text-[12.5px] font-bold mb-1" style={{ color: '#8A5A12' }}>ข้อจำกัด</div>
        <ul className="list-disc pl-4 text-[13.5px] space-y-0.5" style={{ color: 'var(--h-ink)' }}>
          {cons.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      </div>
    </div>
  );
}

const SENSORS = [
  {
    file: 'sensor_radar.png',
    name: 'เรดาร์ตรวจจับยานพาหนะ',
    role: 'ยามด่านหน้า — ตรวจว่ามีรถเข้ามาและน่าจะเป็นเป้าหมายไหม แล้วปลุกกล้อง+เซนเซอร์สแกนเฉพาะตอนจำเป็น',
    pros: ['ตรวจจับ + ระยะ + ความเร็วได้ทุกสภาพอากาศ (กลางคืน · หมอกควัน · ฝน)', 'ไม่เก็บภาพบุคคล', 'คัดกรองให้ sensor หลักทำงานเท่าที่จำเป็น → ยืดอายุอุปกรณ์'],
    cons: ['วัดความสูง/รูปทรงละเอียดไม่ได้ (เป็น “ตัวคัดกรอง” ไม่ใช่ตัววัด)', 'ไวต่อโลหะสะท้อน (หม้อแปลง/ราวเหล็ก) ต้องเว้นระยะ ≥ 5 ม. + ปรับมุม'],
  },
  {
    file: 'sensor_camera.png',
    name: 'กล้องบันทึกเหตุการณ์ (ITS)',
    role: 'ประเมินความสูงด้วยกล้องคู่ + เก็บภาพหลักฐานเหตุการณ์ (อ่านป้ายเฉพาะตอนเกิดเหตุ)',
    pros: ['ภาพคมชัดกลางวัน–กลางคืน (ไฟส่อง + สู้แสงย้อน)', 'ให้บริบทภาพ + หลักฐานเหตุการณ์', 'ทำงานร่วม AI ได้'],
    cons: ['ใช้ 2 ตัวประมวลผลร่วมกันหาความสูง (คลาดเคลื่อน ~5–10 ซม. และช้า)', 'แม่นสุดเมื่อรถวิ่งช้า (≤ 20–30 กม./ชม.)', 'แสงจ้าเข้าเลนส์ / หมอกควันหนา ลดระยะ'],
  },
  {
    file: 'sensor_lidar.png',
    name: 'เซนเซอร์สแกนระยะ (LiDAR)',
    role: 'วัดความสูง/รูปทรงเชิงเรขาคณิตแม่นยำ ไม่พึ่งแสง — ยืนยันซ้ำกับกล้อง',
    pros: ['วัดความสูงแม่นเชิงรูปทรง ไม่พึ่งแสง', 'สแกนขวางถนน ได้ผลเร็ว (ไม่ต้องสะสมหลายเฟรมเหมือนกล้อง)'],
    cons: ['ผิวดำ/เปียก/เงา สะท้อนแสงกลับน้อย (สีทั่วไปสะท้อน ~80–90% · สีดำเหลือ ~10%) → คอกกระบะเปล่าสีดำอาจวัดพลาด', 'อ่อนลงในฝน/หมอก/ฝุ่นจัด', 'มีชิ้นส่วนหมุน อายุการใช้งานจำกัด (อยู่ระหว่างยืนยันข้อมูลกับผู้ผลิต)'],
  },
];

const SUPPORT = [
  {
    kind: 'barrier',
    name: 'ไม้กั้นจำกัดความสูง',
    pros: ['ด่านกายภาพที่แน่นอน — เปิด/ปิดเร็ว', 'ออกแบบกันชนราวสะพาน (พับหนีทางโล่ง · ข้อต่อเปลี่ยนได้)', 'รถทั่วไปลอดผ่านปกติ'],
    cons: ['มีกลไก ต้องบำรุงรักษาตามรอบ', 'ต้องมีไฟเลี้ยง + ฐานบนทางเดินใหม่'],
  },
  {
    kind: 'led',
    name: 'ป้ายแสดงผล LED (เตือนล่วงหน้า)',
    pros: ['ปรับข้อความเรียลไทม์ตามเหตุการณ์', 'สว่างเห็นชัด · กินไฟต่ำ'],
    cons: ['กลางแดดจ้าต้องความสว่างสูงพอ', 'ต้องมุมมอง + โครงสร้างรับ + ไฟเลี้ยง'],
  },
  {
    kind: 'strobe',
    name: 'ไฟสัญญาณเตือน (strobe)',
    pros: ['ดึงความสนใจได้เร็ว เห็นแต่ไกล', 'ทนทาน · กินไฟต่ำ'],
    cons: ['เป็นการ “เตือน” ไม่หยุดรถเอง', 'ต้องคุมความสว่าง/เวลา ไม่ให้รบกวนชุมชน'],
  },
];

export default function Equipment() {
  return (
    <Section id="equipment" tone="cream">
      <SectionHeader
        kicker="อุปกรณ์ & เหตุผลวิศวกรรม"
        title="ทำไมต้องใช้ 3 เซนเซอร์ร่วมกัน"
        lead="ไม่มีเซนเซอร์ตัวใดตัวเดียวที่แม่นและทนทุกสภาพ — เราจึงให้แต่ละตัวทำหน้าที่ที่ตัวเองเก่งที่สุด แล้วชดเชยจุดอ่อนซึ่งกันและกัน"
      />

      {/* 3 sensor cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {SENSORS.map((s, i) => (
          <FadeUp key={s.file} delay={i * 0.06}>
            <Card className="h-full">
              <EquipPhoto file={s.file} />
              <div className="font-bold text-[16px]" style={{ color: 'var(--h-green)' }}>{s.name}</div>
              <Note className="mt-1">{s.role}</Note>
              <ProCon pros={s.pros} cons={s.cons} />
            </Card>
          </FadeUp>
        ))}
      </div>

      {/* hard-case honest note */}
      <FadeUp delay={0.1}>
        <Card accent="red" className="mt-6">
          <div className="font-semibold mb-1" style={{ color: 'var(--h-red)' }}>ข้อจำกัดที่แจ้งตามตรง — เคสที่ยากที่สุด</div>
          <p className="text-[14.5px]">
            รถที่พาด <strong>เหล็กหรือไม้ยาว ๆ ขึ้นหลังคาหรือท้ายกระบะ</strong> โดยยื่นสูงเกินตัวรถ เป็นวัตถุ “บาง · รูปทรงไม่สม่ำเสมอ · และมีจำนวนน้อย”
            จึงต้องสะสม <strong>ชุดข้อมูล (dataset) จำนวนมาก</strong> เพื่อฝึกให้ AI จำได้แม่น · ระหว่างที่ข้อมูลยังไม่พอ เคสนี้ <strong>อาจหลุดได้</strong>
          </p>
          <Note className="mt-2">
            การลดความเสี่ยง: ใช้ 3 เซนเซอร์ร่วมกัน (เรดาร์จับว่ามีรถ · สแกนจับขอบบนสุด) + สะสมข้อมูลหน้างานต่อเนื่องเพื่อพัฒนาความแม่น + มีไม้กั้นกายภาพเป็นด่านสุดท้าย
          </Note>
        </Card>
      </FadeUp>

      {/* comparison table */}
      <FadeUp delay={0.05}>
        <h3 className="font-bold mt-12 mb-4" style={{ fontSize: 'clamp(1.25rem, 1rem + 1.2vw, 1.7rem)', color: 'var(--h-green)' }}>
          กล้องอย่างเดียว vs กล้อง + สแกน + เรดาร์
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[14px] border-collapse">
            <thead>
              <tr>
                {['หัวข้อ', 'กล้องอย่างเดียว', 'กล้อง + สแกน + เรดาร์'].map((h) => (
                  <th key={h} className="text-left p-2.5 font-semibold text-white" style={{ background: 'var(--h-green)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['ความเร็วรถที่ยังแม่น', '≤ 20–30 กม./ชม.', '≤ 40–50 กม./ชม.'],
                ['วิธีวัดความสูง', 'กล้องคู่ (ต้องหลายเฟรม → ช้า)', 'สแกนระยะ (ไม่กี่รอบ → เร็ว)'],
                ['กลางคืน/หมอกควัน/ฝน', 'อ่อน (พึ่งแสง)', 'ทน (เรดาร์ครอบทุกสภาพ)'],
                ['ผิวดำ/คอกกระบะเปล่า', 'พลาดได้', 'กล้อง+เรดาร์ช่วยชดเชย'],
                ['อายุอุปกรณ์', 'กล้องทำงานหนักตลอด', 'เรดาร์คัดกรอง → ยืดอายุตัวสแกน'],
                ['ความมั่นใจ (ปล่อยรถสูงหลุด)', 'สูงกว่า', 'ต่ำกว่า (ยืนยัน 3 ตัว)'],
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 ? '#FBF8EF' : '#fff' }}>
                  <td className="p-2.5 font-semibold" style={{ border: '1px solid var(--h-line)' }}>{row[0]}</td>
                  <td className="p-2.5" style={{ border: '1px solid var(--h-line)' }}>{row[1]}</td>
                  <td className="p-2.5" style={{ border: '1px solid var(--h-line)', background: i % 2 ? '#EEF5EE' : '#F3F9F3' }}>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Note className="mt-3">
          สรุป: ระบบ 3 เซนเซอร์ลดข้อจำกัดของกล้องเดี่ยว ทำให้รถวิ่งเร็วขึ้นได้ประมาณ 2 เท่า และทำงานได้ทุกสภาพอากาศ · ตัวเลขความเร็วเป็นค่าประมาณการออกแบบ ยืนยันด้วยการทดสอบหน้างาน
        </Note>
      </FadeUp>

      {/* 3 support equipment */}
      <FadeUp delay={0.05}>
        <h3 className="font-bold mt-12 mb-4" style={{ fontSize: 'clamp(1.25rem, 1rem + 1.2vw, 1.7rem)', color: 'var(--h-green)' }}>
          อุปกรณ์สั่งการ & เตือน
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SUPPORT.map((s, i) => (
            <FadeUp key={s.name} delay={i * 0.06}>
              <Card className="h-full">
                <Glyph kind={s.kind} />
                <div className="font-bold text-[16px] mt-2" style={{ color: 'var(--h-green)' }}>{s.name}</div>
                <ProCon pros={s.pros} cons={s.cons} />
              </Card>
            </FadeUp>
          ))}
        </div>
      </FadeUp>

      {/* why sensor is far from LED */}
      <FadeUp delay={0.05}>
        <h3 className="font-bold mt-12 mb-4" style={{ fontSize: 'clamp(1.25rem, 1rem + 1.2vw, 1.7rem)', color: 'var(--h-green)' }}>
          ทำไมเซนเซอร์ต้องอยู่ “ห่าง” จากป้าย LED
        </h3>
        {/* sequence flow */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {['① ตรวจจับ (เซนเซอร์)', '② ประมวลผล', '③ แสดงบนป้าย LED', '④ คนขับอ่าน + เบรก', '⑤ ไม้กั้น (คอสะพาน)'].map((step, i, arr) => (
            <React.Fragment key={step}>
              <span className="rounded-full px-3 py-1.5 text-[13px] font-medium" style={{ background: i === 4 ? 'var(--h-red-soft)' : '#E7F0E9', color: i === 4 ? 'var(--h-red)' : 'var(--h-green)', border: '1px solid var(--h-line)' }}>
                {step}
              </span>
              {i < arr.length - 1 && <span style={{ color: 'var(--h-muted)' }}>→</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card accent="green">เซนเซอร์อยู่ <strong>ต้นน้ำก่อนป้าย</strong> เพื่อให้ระบบตรวจ+ตัดสินเสร็จ “ก่อน” รถถึงป้าย → ป้ายแสดงข้อความถูกต้องทันเวลา</Card>
          <Card accent="green">ป้าย LED อยู่ <strong>ก่อนคอสะพานพอให้คนขับหยุดทัน</strong> — ระยะหยุด ~21 ม. ที่ 30 กม./ชม. · ~45 ม. ที่ 50 กม./ชม.</Card>
          <Card accent="gold">แยกห่างยัง <strong>กันแสงจ้า/ไฟกระพริบของป้ายรบกวนกล้อง</strong> และไม่ให้โครงป้ายบังมุมเรดาร์/ตัวสแกน</Card>
        </div>
      </FadeUp>

      {/* why rubber speed bump */}
      <FadeUp delay={0.05}>
        <Card accent="gold" className="mt-8">
          <div className="font-bold text-[17px] mb-2" style={{ color: 'var(--h-green)' }}>ทำไมต้องมี “ลูกระนาดยาง” (rubber speed bump)</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-[13px] font-bold mb-1" style={{ color: 'var(--h-green)' }}>บังคับความเร็ว ≤ 30 กม./ชม. = แก้ที่ต้นเหตุ</div>
              <ul className="list-disc pl-5 text-[14px] space-y-1">
                <li>ทุกเซนเซอร์วัดแม่นขึ้น (แม้กล้องอย่างเดียวก็ยังไหว)</li>
                <li>อ่านป้ายทะเบียนชัด</li>
                <li>ไม้กั้นพับลงทันมีมาร์จิน + คนขับหยุดได้</li>
                <li>จับจังหวะสั้น → ยืดอายุตัวสแกน</li>
              </ul>
            </div>
            <div>
              <div className="text-[13px] font-bold mb-1" style={{ color: 'var(--h-green)' }}>ทำไมเป็น “ยาง” ไม่ใช่คอนกรีต</div>
              <ul className="list-disc pl-5 text-[14px] space-y-1">
                <li>ถอด/ปรับตำแหน่งได้ · ไม่ต้องทุบผิวถนน (สำคัญมากในเขตมรดก)</li>
                <li>ติดตั้งเร็ว · งบต่ำ · บำรุงรักษาง่าย</li>
                <li>เป็นสัญญาณกายภาพว่า “กำลังเข้าเขตควบคุม”</li>
              </ul>
            </div>
          </div>
        </Card>
      </FadeUp>
    </Section>
  );
}
