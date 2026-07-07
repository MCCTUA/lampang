import React from 'react';
import { Section, Card, Note } from '../components/ui.jsx';

const G = 'var(--h-green)';
const GOLD = 'var(--h-gold)';
const RED = 'var(--h-red)';

function Head({ title }) {
  return (
    <>
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>ภาคผนวก · เซนเซอร์สแกนระยะ (LiDAR)</span>
      <h2 className="font-bold tracking-tight mt-2.5" style={{ fontSize: 29, lineHeight: 1.15, color: G }}>{title}</h2>
    </>
  );
}

/* ---- diagrams ---- */
function ScanPrinciple() {
  const cx = 90, cy = 150;
  const rays = [];
  for (let a = -70; a <= 70; a += 10) {
    const r = (a * Math.PI) / 180;
    rays.push(<line key={a} x1={cx} y1={cy} x2={cx + 320 * Math.cos(r)} y2={cy + 320 * Math.sin(r)} stroke={GOLD} strokeWidth="0.8" opacity="0.5" />);
  }
  return (
    <svg className="diagram" viewBox="0 0 560 300" role="img" aria-label="หลักการสแกน time-of-flight">
      {rays}
      <rect x={cx - 22} y={cy - 22} width="44" height="44" rx="6" fill={G} />
      <text x={cx} y={cy + 40} fontSize="12" fill={G} textAnchor="middle" fontWeight="700">ตัวสแกน</text>
      <text x={cx} y={cy + 55} fontSize="11" fill="#555" textAnchor="middle">(กระจกหมุน)</text>
      <rect x="410" y="118" width="90" height="64" rx="6" fill="#7C93A6" />
      <text x="455" y="154" fontSize="11" fill="#fff" textAnchor="middle">รถ / วัตถุ</text>
      <line x1={cx + 22} y1={cy} x2="410" y2="150" stroke={GOLD} strokeWidth="2.5" markerEnd="url(#lpA)" />
      <line x1="410" y1="162" x2={cx + 22} y2={cy + 12} stroke={G} strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#lpB)" />
      <text x="250" y="140" fontSize="11.5" fill={GOLD}>พัลส์แสง IR ออกไป →</text>
      <text x="240" y="182" fontSize="11.5" fill={G}>← แสงสะท้อนกลับ (วัดเวลา = ระยะ)</text>
      <text x="300" y="35" fontSize="12.5" fill={G} textAnchor="middle" fontWeight="700">กวาดเป็นม่านแสงรูปพัด ~275° · สแกนสูงสุด ~80 ครั้ง/วินาที</text>
      <defs>
        <marker id="lpA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill={GOLD} /></marker>
        <marker id="lpB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill={G} /></marker>
      </defs>
    </svg>
  );
}

function ReflectRange() {
  const rows = [
    ['ผิวสว่าง/สีอ่อน (สะท้อน ~90%)', 25, 520, '#E7F0E9', G],
    ['ผิวสีเข้ม/คล้ำ (สะท้อน ~10%)', 15, 312, 'var(--h-gold-soft)', '#8A5A12'],
    ['ผิวดำด้านมาก (สะท้อน ~2%)', 7, 145, 'var(--h-red-soft)', RED],
  ];
  return (
    <svg className="diagram" viewBox="0 0 600 190" role="img" aria-label="การสะท้อนแสงกับระยะที่ใช้ได้">
      <text x="16" y="24" fontSize="12.5" fill={G} fontWeight="700">สีผิวรถ = ระยะที่ตรวจได้ (ยิ่งเข้ม ยิ่งสั้น)</text>
      {rows.map(([label, m, w, bg, fg], i) => {
        const y = 44 + i * 46;
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

function ZoneField() {
  return (
    <svg className="diagram" viewBox="0 0 560 220" role="img" aria-label="การแบ่งโซนตรวจจับ">
      <rect x="40" y="150" width="480" height="34" fill="var(--h-road)" />
      <text x="46" y="172" fontSize="11" fill="#333">เลนถนน</text>
      <rect x="60" y="60" width="30" height="30" rx="5" fill={G} />
      <text x="75" y="52" fontSize="11" fill={G} textAnchor="middle">ตัวสแกน</text>
      <path d="M75 90 L470 60 L470 150 L75 90 Z" fill="var(--h-gold-soft)" opacity="0.55" />
      <path d="M75 90 L360 70 L360 150 L75 90 Z" fill={GOLD} opacity="0.35" />
      <path d="M75 90 L250 82 L250 150 L75 90 Z" fill={RED} opacity="0.30" />
      <text x="410" y="120" fontSize="11.5" fill="#8A5A12">โซนเตือนไกล</text>
      <text x="300" y="120" fontSize="11.5" fill={GOLD}>เตือนใกล้</text>
      <text x="170" y="120" fontSize="11.5" fill={RED}>วิกฤต</text>
      <text x="40" y="205" fontSize="11" fill="#555">ตั้งได้ล่วงหน้าหลายชุด (สูงสุด ~16 · แต่ละชุดซ้อน ~3 โซน)</text>
    </svg>
  );
}

/* ---- Page 1 · หลักการทำงาน ---- */
export function Lidar1() {
  return (
    <Section id="lidar1" tone="soft">
      <Head title="หลักการทำงาน (1/4)" />
      <div style={{ width: '74%', margin: '14px auto 0' }}><ScanPrinciple /></div>
      <p style={{ fontSize: 15, lineHeight: 1.6, marginTop: 14 }}>
        ยิงพัลส์แสงอินฟราเรด (มองไม่เห็น · ปลอดภัยต่อสายตา) ผ่านกระจกหมุน กวาดเป็น “ม่านแสงรูปพัด” ในระนาบเดียว ครอบมุม ~275° ·
        วัดระยะจาก <strong>เวลาที่แสงสะท้อนกลับ (time-of-flight)</strong> + มุมกระจกขณะนั้น → ได้จุดพิกัดวัตถุจำนวนมากต่อการสแกน 1 รอบ
      </p>
      <Note style={{ marginTop: 10, fontSize: 13.5 }}>
        สเปกทั่วไป: กวาด ~275° · สแกนสูงสุด ~80 ครั้ง/วินาที · ความละเอียดเชิงมุม ~0.2° (~1,300+ จุด/สแกน) · ระยะ 0.08–25 ม. · ความคลาดเคลื่อน ±10 มม. · ทำซ้ำ ≤5 มม. · กันน้ำฝุ่น IP67 · -30 ถึง +60°C · ลำแสงบานตามระยะ (จุดแสง ~11 มม.ที่ 1 ม. → ~83 มม.ที่ 10 ม.)
      </Note>
    </Section>
  );
}

/* ---- Page 2 · โซน + สีผิว ---- */
export function Lidar2() {
  return (
    <Section id="lidar2" tone="cream">
      <Head title="การแบ่งโซน & ผลของสีผิว (2/4)" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, marginTop: 16, alignItems: 'start' }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 800, color: G, marginBottom: 8 }}>การแบ่งโซนตรวจจับ (zone/field)</div>
          <ZoneField />
          <p style={{ fontSize: 13.5, lineHeight: 1.55, marginTop: 8 }}>
            ตั้งโซนได้ล่วงหน้าหลายชุด (สูงสุด ~16 · แต่ละชุดซ้อน ~3 โซน: เตือนไกล/เตือนใกล้/วิกฤต) · ในงานนี้ตั้งโซนคร่อมเลนเฉพาะช่วงความสูงเกิน → รถทั่วไปไม่ trigger ตอบเฉพาะวัตถุที่ล้ำเข้าโซน
          </p>
        </div>
        <div>
          <div style={{ fontSize: 16, fontWeight: 800, color: G, marginBottom: 8 }}>ผิวสีเข้ม = ระยะสั้นลง</div>
          <ReflectRange />
          <p style={{ fontSize: 13.5, lineHeight: 1.55, marginTop: 8 }}>
            ระยะขึ้นกับสีผิว: ขาว/สว่าง ~90% (ไกลสุด) · เข้ม ~10% · ดำด้านมาก ~2% (ใกล้สุด) · ในงานนี้จุดตรวจอยู่ใกล้เลน 15 ม.ยังเหลือเฟือ · เสี่ยงเฉพาะผิวดำด้านมากที่ระยะไกล (คอกกระบะเปล่าสีดำ) → เสริมเรดาร์/กล้อง
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ---- Page 3 · ติดตั้ง + บำรุงรักษา ---- */
export function Lidar3() {
  return (
    <Section id="lidar3" tone="soft">
      <Head title="การติดตั้ง & การบำรุงรักษา (3/4)" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 16 }}>
        <Card accent="green">
          <div style={{ fontSize: 16, fontWeight: 800, color: G, marginBottom: 8 }}>การติดตั้ง</div>
          <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, lineHeight: 1.7 }}>
            <li>ยึดแน่นด้วยสกรู M5 ครบทุกจุด (แรงขัน ~4.5–5 Nm) แยกจากแรงสั่นสะเทือน</li>
            <li>ปรับมุมแนวนอน/แนวตั้งได้ ~±5° ด้วยขายึด</li>
            <li>หน้าต่างเลนส์ต้องสะอาด ไม่มีสิ่งบังแนวลำแสง · ไฟสถานะมองเห็นได้</li>
            <li>เลี่ยงแสงแดดส่องเข้าลำแสงโดยตรง (IR รบกวน) · ป้องกันความชื้นควบแน่น</li>
          </ul>
        </Card>
        <Card accent="green">
          <div style={{ fontSize: 16, fontWeight: 800, color: G, marginBottom: 8 }}>การบำรุงรักษา</div>
          <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, lineHeight: 1.7 }}>
            <li>ทำความสะอาดหน้าเลนส์: ผ้าไม่มีขน + น้ำยาไอโซโพรพานอล ≥99% เช็ดรอบเดียว</li>
            <li>ห้ามผงขัด/ผ้าหยาบ/ฉีดน้ำแรงดันสูง</li>
            <li>มีระบบเฝ้าดูคราบสกปรกหน้าเลนส์ในตัว → แจ้งเตือนเชิงป้องกัน (predictive)</li>
            <li>ปกติไม่ต้องบำรุงรักษาโดยผู้ใช้ · เปลี่ยนได้ทั้งตัว · อายุ/ค่าดูแลอยู่ระหว่างยืนยันกับผู้ผลิต</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}

/* ---- Page 4 · ข้อจำกัด ---- */
export function Lidar4() {
  return (
    <Section id="lidar4" tone="cream">
      <Head title="ข้อจำกัด (สำหรับติดตั้งกลางแจ้งบนสะพาน) (4/4)" />
      <Card accent="gold" style={{ marginTop: 16 }}>
        <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14.5, lineHeight: 1.9, columns: 2, columnGap: 34 }}>
          <li><strong>ฝุ่น/ควัน/ไอ/หมอก</strong> ที่ระดับลำแสง → รบกวน/ทำงานพลาดได้ (ตรงปัญหาหมอกควันลำปาง)</li>
          <li><strong>ไฟ strobe / หลอดฟลูออเรสเซนต์ / IR</strong> ที่ระดับลำแสง → รบกวน (ดีไซน์เรา: สแกนที่ปากทาง · strobe ที่คอสะพาน แยกกันแล้ว)</li>
          <li><strong>แสงแดด (IR)</strong> ส่องตรง/สะท้อน ลดประสิทธิภาพ → เลือกทิศ + ครอบกันแดด</li>
          <li><strong>ระยะขึ้นกับสีผิว</strong> — ผิวดำด้านมากระยะสั้นลง (ดูหน้า 2/4)</li>
          <li>ติดตั้งกลางแจ้งควรมี <strong>ตู้/ครอบกันแดดฝน + ระบายอากาศกันไอน้ำควบแน่น</strong> · เลี่ยงอุณหภูมิแกว่งรุนแรง</li>
        </ul>
      </Card>
      <div style={{ marginTop: 16, background: 'var(--h-green-deep)', color: '#F3EFE2', borderRadius: 14, padding: '14px 20px', fontSize: 14, lineHeight: 1.6 }}>
        <strong style={{ color: '#E7C46A' }}>สรุป:</strong> LiDAR วัดความสูงแม่นเชิงรูปทรง แต่แพ้หมอก/ผิวดำ/สภาพกลางแจ้ง → จึงจับคู่ <strong style={{ color: '#fff' }}>เรดาร์</strong> (ทุกสภาพอากาศ) + <strong style={{ color: '#fff' }}>กล้อง</strong> (บริบท/หลักฐาน) เป็นระบบ fusion และใส่ตู้กันแดดฝนสำหรับติดตั้งบนสะพาน
      </div>
    </Section>
  );
}
