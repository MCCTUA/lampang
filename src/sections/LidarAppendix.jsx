import React from 'react';
import { Section, SectionHeader, Card, Note, FadeUp } from '../components/ui.jsx';

const G = 'var(--h-green)';
const GOLD = 'var(--h-gold)';
const RED = 'var(--h-red)';

/* --- Diagram 1: time-of-flight + rotating fan scan --- */
function ScanPrinciple() {
  const cx = 90, cy = 150;
  const rays = [];
  for (let a = -70; a <= 70; a += 10) {
    const r = (a * Math.PI) / 180;
    rays.push(<line key={a} x1={cx} y1={cy} x2={cx + 300 * Math.cos(r)} y2={cy + 300 * Math.sin(r)} stroke={GOLD} strokeWidth="0.8" opacity="0.5" />);
  }
  return (
    <svg className="diagram" viewBox="0 0 560 300" role="img" aria-label="หลักการสแกน time-of-flight">
      {rays}
      {/* device */}
      <rect x={cx - 22} y={cy - 22} width="44" height="44" rx="6" fill={G} />
      <text x={cx} y={cy + 40} fontSize="12" fill={G} textAnchor="middle" fontWeight="700">ตัวสแกน</text>
      <text x={cx} y={cy + 55} fontSize="11" fill="#555" textAnchor="middle">(กระจกหมุน)</text>
      {/* object: vehicle top */}
      <rect x="410" y="118" width="90" height="64" rx="6" fill="#7C93A6" />
      <text x="455" y="154" fontSize="11" fill="#fff" textAnchor="middle">รถ / วัตถุ</text>
      {/* main beam + return */}
      <line x1={cx + 22} y1={cy} x2="410" y2="150" stroke={GOLD} strokeWidth="2.5" markerEnd="url(#lpArr)" />
      <line x1="410" y1="162" x2={cx + 22} y2={cy + 12} stroke={G} strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#lpArr2)" />
      <text x="250" y="140" fontSize="11.5" fill={GOLD}>พัลส์แสง IR ออกไป →</text>
      <text x="250" y="182" fontSize="11.5" fill={G}>← แสงสะท้อนกลับ (วัดเวลา = ระยะ)</text>
      <text x="300" y="35" fontSize="12.5" fill={G} textAnchor="middle" fontWeight="700">กวาดเป็นม่านแสงรูปพัด ~275° · สแกนสูงสุด ~80 ครั้ง/วินาที</text>
      <defs>
        <marker id="lpArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill={GOLD} /></marker>
        <marker id="lpArr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill={G} /></marker>
      </defs>
    </svg>
  );
}

/* --- Diagram 2: reflectivity → usable range --- */
function ReflectRange() {
  const rows = [
    ['ผิวสว่าง/สีอ่อน (สะท้อน ~90%)', 25, 520, '#E7F0E9', G],
    ['ผิวสีเข้ม/คล้ำ (สะท้อน ~10%)', 15, 312, 'var(--h-gold-soft)', '#8A5A12'],
    ['ผิวดำด้านมาก (สะท้อน ~2%)', 7, 145, 'var(--h-red-soft)', RED],
  ];
  return (
    <svg className="diagram" viewBox="0 0 600 200" role="img" aria-label="การสะท้อนแสงกับระยะที่ใช้ได้">
      <text x="16" y="26" fontSize="12.5" fill={G} fontWeight="700">สีผิวรถ = ระยะที่ตรวจได้ (ยิ่งเข้ม ยิ่งสั้น)</text>
      {rows.map(([label, m, w, bg, fg], i) => {
        const y = 50 + i * 46;
        return (
          <g key={i}>
            <rect x="16" y={y} width={w} height="30" rx="5" fill={bg} stroke={fg} />
            <text x="26" y={y + 20} fontSize="12" fill={fg}>{label}</text>
            <text x={16 + w + 10} y={y + 20} fontSize="12.5" fill={fg} fontWeight="700">{m} ม.</text>
          </g>
        );
      })}
    </svg>
  );
}

/* --- Diagram 3: configurable zones across a lane --- */
function ZoneField() {
  return (
    <svg className="diagram" viewBox="0 0 560 220" role="img" aria-label="การแบ่งโซนตรวจจับ">
      <rect x="40" y="150" width="480" height="34" fill="var(--h-road)" />
      <text x="46" y="172" fontSize="11" fill="#333">เลนถนน</text>
      {/* scanner */}
      <rect x="60" y="60" width="30" height="30" rx="5" fill={G} />
      <text x="75" y="52" fontSize="11" fill={G} textAnchor="middle">ตัวสแกน</text>
      {/* nested zones */}
      <path d="M75 90 L470 60 L470 150 L75 90 Z" fill="var(--h-gold-soft)" opacity="0.55" />
      <path d="M75 90 L360 70 L360 150 L75 90 Z" fill={GOLD} opacity="0.35" />
      <path d="M75 90 L250 82 L250 150 L75 90 Z" fill={RED} opacity="0.30" />
      <text x="410" y="120" fontSize="11.5" fill="#8A5A12">โซนเตือนไกล</text>
      <text x="300" y="120" fontSize="11.5" fill={GOLD}>เตือนใกล้</text>
      <text x="170" y="120" fontSize="11.5" fill={RED}>วิกฤต</text>
      <text x="40" y="205" fontSize="11.5" fill="#555">ตั้งได้ล่วงหน้าหลายชุด (สูงสุด ~16 ชุด · แต่ละชุดซ้อนได้ ~3 โซน) → รถทั่วไปไม่ trigger เฉพาะวัตถุที่ล้ำเข้าโซน</text>
    </svg>
  );
}

export default function LidarAppendix() {
  return (
    <Section id="lidar" tone="soft">
      <SectionHeader
        kicker="ภาคผนวก — เชิงลึก"
        title="เซนเซอร์สแกนระยะ (LiDAR) ทำงานอย่างไร"
        lead="สำหรับผู้ที่อยากเข้าใจลึก — หลักการ · การแบ่งโซน · การติดตั้ง · ข้อจำกัด · การบำรุงรักษา (อธิบายเชิงเทคนิคทั่วไป ไม่อ้างอิงยี่ห้อ/รุ่น)"
      />

      <FadeUp>
        <h3 className="font-bold mb-3" style={{ color: G, fontSize: '1.2rem' }}>1. หลักการทำงาน</h3>
        <ScanPrinciple />
        <p className="text-[14.5px] mt-3">
          ยิงพัลส์แสงอินฟราเรด (มองไม่เห็น · ระดับปลอดภัยต่อสายตา) ผ่านกระจกหมุน กวาดเป็น “ม่านแสงรูปพัด” ในระนาบเดียว ครอบมุม ~275° ·
          วัดระยะจาก <strong>เวลาที่แสงสะท้อนกลับ (time-of-flight)</strong> + มุมกระจกขณะนั้น → ได้จุดพิกัดวัตถุจำนวนมากต่อการสแกน 1 รอบ
        </p>
        <Note className="mt-2">
          สเปกทั่วไป: กวาด ~275° · สแกนสูงสุด ~80 ครั้ง/วินาที · ความละเอียดเชิงมุม ~0.2° (~1,300+ จุด/สแกน) · ระยะ 0.08–25 ม. · ความคลาดเคลื่อน ±10 มม. · ทำซ้ำ ≤5 มม. · กันน้ำฝุ่น IP67 · -30 ถึง +60°C · ลำแสงบานตามระยะ (จุดแสง ~11 มม.ที่ 1 ม. → ~83 มม.ที่ 10 ม. = ยิ่งไกลยิ่งหยาบ)
        </Note>
      </FadeUp>

      <FadeUp>
        <h3 className="font-bold mb-3 mt-10" style={{ color: G, fontSize: '1.2rem' }}>2. การแบ่งโซนตรวจจับ (zone / field)</h3>
        <ZoneField />
        <p className="text-[14.5px] mt-3">
          กำหนดโซนตรวจจับได้ล่วงหน้าหลายชุด (สูงสุด ~16 ชุด · แต่ละชุดซ้อนได้ ~3 โซน เช่น <strong>เตือนไกล / เตือนใกล้ / วิกฤต</strong>) ระบบสลับชุดโซนตามสถานการณ์ ·
          ในงานนี้ตั้งโซนคร่อมเลนเฉพาะช่วง “ความสูงเกิน” → รถทั่วไปไม่ trigger ระบบตอบสนองเฉพาะวัตถุที่ล้ำเข้าโซนเท่านั้น
        </p>
      </FadeUp>

      <FadeUp>
        <h3 className="font-bold mb-3 mt-10" style={{ color: G, fontSize: '1.2rem' }}>3. ผิวสีเข้ม = ระยะสั้นลง</h3>
        <ReflectRange />
        <Note className="mt-3">
          ตัวเลข %สะท้อน คือความสว่างของผิว: ผิวขาว/สว่าง ~90% (ตรวจได้ไกลสุด) · ผิวสีเข้ม ~10% · ผิวดำด้านมาก ~2% (ตรวจได้ใกล้สุด) — ไม่ได้แปรตามระยะเป็นเส้นตรง แต่ผิวยิ่งเข้ม แสงยิ่งสะท้อนกลับน้อย ระยะที่เชื่อถือได้จึงสั้นลง ·
          ในงานนี้จุดตรวจอยู่ใกล้เลน (ระยะจริงหลักไม่กี่–สิบเมตร) ดังนั้น 15 ม. ที่ผิวสีเข้มยังเหลือเฟือ · เคสที่เสี่ยงจริงคือ “ผิวดำด้านมากที่ขอบระยะไกลสุด” (เช่น คอกกระบะเปล่าสีดำ) จึงเสริมด้วยเรดาร์/กล้อง
        </Note>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <FadeUp>
          <Card accent="green" className="h-full">
            <div className="font-bold mb-2" style={{ color: G }}>4. การติดตั้ง</div>
            <ul className="list-disc pl-5 text-[14px] space-y-1">
              <li>ยึดแน่นด้วยสกรู M5 ครบทุกจุด (แรงขัน ~4.5–5 Nm) แยกจากแรงสั่นสะเทือน</li>
              <li>ปรับมุมแนวนอน/แนวตั้งได้ ~±5° ด้วยขายึด</li>
              <li>หน้าต่างเลนส์ต้องสะอาด ไม่มีสิ่งบังแนวลำแสง · ไฟสถานะมองเห็นได้</li>
              <li>เลี่ยงแสงแดดส่องเข้าลำแสงโดยตรง (IR รบกวน) · ป้องกันความชื้นควบแน่นภายในตัวเครื่อง</li>
            </ul>
          </Card>
        </FadeUp>
        <FadeUp delay={0.06}>
          <Card accent="green" className="h-full">
            <div className="font-bold mb-2" style={{ color: G }}>5. การบำรุงรักษา</div>
            <ul className="list-disc pl-5 text-[14px] space-y-1">
              <li>ทำความสะอาดหน้าเลนส์ตามสภาพงาน: ผ้าไม่มีขน + น้ำยาไอโซโพรพานอล ≥99% เช็ดรอบเดียว</li>
              <li>ห้ามผงขัด/ผ้าหยาบ/ฉีดน้ำแรงดันสูง</li>
              <li>มีระบบเฝ้าดูคราบสกปรกหน้าเลนส์ในตัว → แจ้งเตือนล่วงหน้าเชิงป้องกัน (predictive)</li>
              <li>ปกติไม่ต้องบำรุงรักษาโดยผู้ใช้ · เปลี่ยนได้ทั้งตัว (ถอด→ต่อใหม่→ตั้งค่า) · อายุ/ค่าดูแลอยู่ระหว่างยืนยันกับผู้ผลิต</li>
            </ul>
          </Card>
        </FadeUp>
      </div>

      <FadeUp delay={0.05}>
        <Card accent="gold" className="mt-6">
          <div className="font-bold mb-2" style={{ color: RED }}>6. ข้อจำกัด (สำคัญมากสำหรับติดตั้งกลางแจ้งบนสะพาน)</div>
          <ul className="list-disc pl-5 text-[14px] space-y-1.5">
            <li><strong>ฝุ่น/ควัน/ไอ/หมอก</strong> ที่ระดับลำแสง → รบกวนหรือทำงานพลาดได้ (ตรงกับปัญหาหมอกควันของลำปาง)</li>
            <li><strong>แสงรบกวน:</strong> อินฟราเรด · หลอดฟลูออเรสเซนต์ · และ <strong>ไฟ strobe</strong> ที่ระดับลำแสง → ต้องวาง strobe ให้พ้นระดับ/ตำแหน่งลำแสง (ดีไซน์เรา: ตัวสแกนอยู่ปากทาง · strobe อยู่คอสะพาน = แยกกันอยู่แล้ว)</li>
            <li><strong>แสงแดด (IR)</strong> ส่องตรง/สะท้อนเข้าลำแสง ลดประสิทธิภาพ → เลือกทิศ + ครอบกันแดด</li>
            <li><strong>ระยะขึ้นกับสีผิว</strong> (ตามภาพข้อ 3) — ผิวดำมากระยะสั้นลง</li>
            <li>ติดตั้งกลางแจ้งควรอยู่ใน <strong>ตู้/ครอบกันแดดฝน + ระบายอากาศกันไอน้ำควบแน่น</strong> เพื่อความทนทานและความแม่นยำ · เลี่ยงอุณหภูมิแกว่งรุนแรง</li>
          </ul>
          <Note className="mt-2">
            สรุป: LiDAR วัดความสูงแม่นเชิงรูปทรง แต่แพ้หมอก/ผิวดำ/สภาพกลางแจ้ง → จึงจับคู่ <strong>เรดาร์</strong> (ทุกสภาพอากาศ) + <strong>กล้อง</strong> (บริบท/หลักฐาน) เป็นระบบ fusion และใส่ตู้กันแดดฝนสำหรับติดตั้งบนสะพาน
          </Note>
        </Card>
      </FadeUp>
    </Section>
  );
}
