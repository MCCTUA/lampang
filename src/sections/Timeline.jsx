import React from 'react';
import { Section, SectionHeader, Note, FadeUp } from '../components/ui.jsx';

const PHASES = [
  { n: 1, title: 'สำรวจหน้างาน + สรุปสเปก/ตำแหน่ง', dur: '~1 สัปดาห์', note: 'วัดจริง lock ตำแหน่งเสา/ตู้/ระดับ 3.3 ม.', hl: false },
  { n: 2, title: 'สั่งซื้อ/จัดหา + ผลิต/นำเข้าอุปกรณ์', dur: '~4–8 สัปดาห์', note: 'lead time (ค่าประมาณ) ขึ้นกับสต๊อก/การนำเข้า — ยืนยันกับผู้ผลิต', hl: false },
  { n: 3, title: 'เตรียมหน้างาน — ฐาน/ไฟฟ้า/เดินสาย', dur: 'ทำคู่ขนาน', note: 'งานโยธาระหว่างรอของ ไม่แตะสะพาน/เสาหิน', hl: false },
  { n: 4, title: 'ติดตั้งอุปกรณ์หน้างาน', dur: '~7 วัน', note: 'ยกเสา · ติดกล้อง/เซนเซอร์/ไม้กั้น/ป้าย · เก็บสาย', hl: true },
  { n: 5, title: 'เชื่อมระบบ + ทดสอบการทำงานรวม', dur: '~2–3 วัน', note: 'เชื่อม 2 ตู้ · ทดสอบ trigger → ไม้กั้น → ป้าย', hl: false },
  { n: 6, title: 'ปรับจูน AI หน้างาน (fine-tuning)', dur: '~2 สัปดาห์', note: 'จูนกับสภาพจริงหลายรอบ · สะสมข้อมูลเคสยาก · ลด false alarm', hl: true },
  { n: 7, title: 'ส่งมอบ + อบรมเจ้าหน้าที่', dur: '~1–2 วัน', note: 'คู่มือ · การใช้งาน · การแจ้งเหตุ/บำรุงรักษาเบื้องต้น', hl: false },
];

export default function Timeline() {
  return (
    <Section id="timeline" tone="soft">
      <SectionHeader
        kicker="Timeline"
        title="ขั้นตอนการจัดหา – ติดตั้ง – ปรับจูนระบบ"
        lead="ช่วงที่เน้นสี = ระยะเวลาหลักที่ลูกค้ามักถาม (ติดตั้ง ~7 วัน · ปรับจูน AI ~2 สัปดาห์) · ระยะเวลาทั้งหมดเป็นค่าประมาณ ยืนยันเมื่อสรุปสเปกและซัพพลายเออร์"
      />

      <div className="relative pl-6">
        {/* vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-0.5" style={{ background: 'var(--h-line)' }} />
        <div className="flex flex-col gap-5">
          {PHASES.map((p, i) => (
            <FadeUp key={p.n} delay={i * 0.04}>
              <div className="relative">
                {/* dot */}
                <span
                  className="absolute -left-[22px] top-1.5 w-4 h-4 rounded-full"
                  style={{ background: p.hl ? 'var(--h-gold)' : 'var(--h-green)', border: '2px solid var(--h-cream-soft)' }}
                />
                <div
                  className="rounded-xl px-4 py-3.5"
                  style={{
                    background: 'var(--h-paper)',
                    border: '1px solid var(--h-line)',
                    borderLeft: p.hl ? '5px solid var(--h-gold)' : '1px solid var(--h-line)',
                  }}
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-bold text-[15px]" style={{ color: 'var(--h-green)' }}>
                      {p.n}. {p.title}
                    </span>
                    <span
                      className="text-[13px] font-bold rounded-full px-2.5 py-0.5"
                      style={{ background: p.hl ? 'var(--h-gold-soft)' : '#E7F0E9', color: p.hl ? '#8A5A12' : 'var(--h-green)' }}
                    >
                      {p.dur}
                    </span>
                  </div>
                  <Note className="mt-1">{p.note}</Note>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <Note className="mt-6">
        หมายเหตุ: งานเตรียมหน้างาน (ฐาน/ไฟ/สาย) ทำคู่ขนานช่วงรอของ จึงไม่บวกเพิ่มในเส้นเวลาหลัก · การปรับจูน AI ต่อเนื่องหลังส่งมอบจะช่วยเพิ่มความแม่นของเคสยาก (เช่น รถพาดของยื่นสูง) ไปเรื่อย ๆ
      </Note>
    </Section>
  );
}
