import React from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const GOLD = 'var(--h-gold)';

const VERIFY = [
  'ตำแหน่ง + ชนิดเสาที่ใช้ได้จริง (เสาเดิมรับโหลดได้ไหม / ต้องเสาใหม่)',
  'ช่องระดับ 3.3 ม. (ขอบทางเดิน → ราวสะพาน) ทั้ง 2 คอ',
  'ยืนยันความสูงคานสะพานจริง (คาด ~3.40 ม.)',
  'ตำแหน่งหม้อแปลง เทียบจุดเรดาร์ (≥ 5 ม.)',
  'จุดจ่ายไฟเทศบาล/PEA ที่ใกล้สุด',
  'ระยะ Sirimas → เซนเซอร์ R3 (ถ้า > 100 ม. ต้องแยกสมองกล)',
  'ทิศแดด (แสงจ้าเข้ากล้อง) ตามช่วงเวลา',
];

const ASKS = [
  'จุดใด ติดได้ / ติดไม่ได้ (เสาเดิม vs เสาใหม่)',
  'ลูกระนาดบน R1/R2 — อนุญาตไหม (กระทบชุมชน/รถฉุกเฉิน)',
  'ตั้งเสาใหม่ / ตู้ ต้องประสานใคร (PEA · กรมศิลปากร)',
  'ป้ายเตือนก่อนสามแยก/สี่แยก (นอกงบ) — ทน. ช่วยได้ไหม',
  'ฐานไม้กั้นบนทางเดินใหม่ — ใครดูแล / อนุญาต',
  'ตลาดเก่า: รถสูงเข้าได้จริงไหม · วัน/เวลาถนนคนเดิน',
];

export default function ConfirmTN() {
  return (
    <Section id="confirm" tone="cream">
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>
        สิ่งที่ต้องยืนยันร่วมกับ ทน.
      </span>
      <h2 className="font-bold tracking-tight mt-3" style={{ fontSize: 30, lineHeight: 1.15, color: G }}>
        อะไรทำได้ · อะไรทำไม่ได้ — ยืนยันร่วมกับ ทน.
      </h2>
      <p className="mt-2" style={{ fontSize: 15, color: 'var(--h-muted)' }}>
        การพบครั้งนี้เพื่อยืนยันว่าสิ่งที่เรานำเสนอ ทำได้จริงหน้างานแค่ไหน และขอคำแนะนำจุดติดตั้ง — ยังไม่ขอการตัดสินใจในวันนี้
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 16 }}>
        <div style={{ background: '#fff', border: '1px solid var(--h-line)', borderTop: `5px solid ${G}`, borderRadius: 14, padding: '14px 18px' }}>
          <div style={{ fontSize: 15.5, fontWeight: 800, color: G, marginBottom: 8 }}>ต้องวัด/ยืนยันหน้างาน (กำหนดว่าทำได้แค่ไหน)</div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.8, lineHeight: 1.65 }}>
            {VERIFY.map((v) => <li key={v}>{v}</li>)}
          </ul>
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--h-line)', borderTop: `5px solid ${GOLD}`, borderRadius: 14, padding: '14px 18px' }}>
          <div style={{ fontSize: 15.5, fontWeight: 800, color: '#8A5A12', marginBottom: 8 }}>ขอคำแนะนำ / อนุมัติจาก ทน.</div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.8, lineHeight: 1.65 }}>
            {ASKS.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 16, background: 'var(--h-green-deep)', color: '#F3EFE2', borderRadius: 14, padding: '13px 20px', fontSize: 14.5, fontWeight: 600 }}>
        ขั้นต่อไป: วัดหน้างาน → lock ตำแหน่งที่ทำได้จริง → ส่งต่อทีมพัฒนา + จัดทำ BOQ
      </div>
    </Section>
  );
}
