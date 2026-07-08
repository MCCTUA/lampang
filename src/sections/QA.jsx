import React from 'react';
import { Section, SectionHeader, Card, FadeUp } from '../components/ui.jsx';

const QITEMS = [
  ['บังทัศนียภาพสะพานไหม?', 'ไม่ · อุปกรณ์อยู่ ≥ 20 ม. ต้นทาง ไม่แตะสะพาน/เสาหิน · ตลาดเก่าใช้เสาเดิมปากทาง'],
  ['รถทั่วไปกระทบไหม?', 'ไม่ · ไม้กั้น 3.3 ม. รถทั่วไปลอดใต้ ทำงานเฉพาะรถสูงเกิน'],
  ['สายไฟ/หม้อแปลงเยอะ ทำงานได้ไหม?', 'เรดาร์ทนหมอกควัน · จัดระยะ ≥ 5 ม. + ปรับมุม + ทดสอบหน้างาน'],
  ['อ่านป้ายทะเบียนไหม?', 'เก็บภาพเป็นหลักฐานเหตุการณ์เท่านั้น · การประกาศเลขทะเบียนดัง ๆ ขอหารือ (ความเป็นส่วนตัว) และอยู่นอกชุดที่เสนอ'],
];

const ASKS = [
  'จุดใดติดได้/ติดไม่ได้ (เสาเดิม vs เสาใหม่)',
  'ลูกระนาดบน R1/R2 — อนุญาตไหม (กระทบชุมชน/รถฉุกเฉิน)',
  'ตั้งเสาใหม่/ตู้ ต้องประสานใคร (PEA · กรมศิลปากร)',
  'ป้ายเตือนก่อนสามแยก/สี่แยก (นอกงบ) — ทน. ช่วยได้ไหม',
  'ฐานไม้กั้นบนทางเดินใหม่ — ใครดูแล/อนุญาต',
  'ตลาดเก่า: รถสูงเข้าได้จริงไหม · วันคนเดิน',
];

export default function QA() {
  return (
    <Section id="qa" tone="cream">
      <SectionHeader
        kicker="คำถาม & ขอคำแนะนำ"
        title="เตรียมตอบเจ้าหน้าที่ + คำถามที่เราจะขอคำแนะนำ"
        lead="การพบครั้งนี้เพื่อสร้างความเข้าใจร่วมและรับฟังคำแนะนำ — ยังไม่ขอการตัดสินใจในวันนี้"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <FadeUp className="flex flex-col gap-4">
          <div className="font-semibold" style={{ color: 'var(--h-green)' }}>ถาม–ตอบที่คาดว่าจะเจอ</div>
          {QITEMS.map(([q, a]) => (
            <Card key={q}>
              <div className="font-semibold mb-1">{q}</div>
              <p className="text-[14.5px]" style={{ color: 'var(--h-ink)' }}>{a}</p>
            </Card>
          ))}
        </FadeUp>

        <FadeUp delay={0.08} className="flex flex-col gap-4">
          <div className="font-semibold" style={{ color: 'var(--h-green)' }}>คำถามที่เราขอคำแนะนำจาก ทน.</div>
          <Card accent="green">
            <ul className="list-disc pl-5 text-[14.5px] space-y-1.5">
              {ASKS.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </Card>
          <Card accent="gold">
            <strong style={{ color: 'var(--h-green)' }}>ขั้นต่อไป</strong> — วัดหน้างาน → lock ตำแหน่ง → ส่งต่อทีมพัฒนา + จัดทำ BOQ
          </Card>
        </FadeUp>
      </div>
    </Section>
  );
}
