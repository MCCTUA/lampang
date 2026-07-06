import React from 'react';
import { Section, SectionHeader, Card, FadeUp } from '../components/ui.jsx';

const ALL = [
  'ตำแหน่ง + ชนิดเสาที่ใช้ได้จริง (รับน้ำหนัก/โหลดสาย)',
  'ความกว้างเลน (ช่วงไม้กั้น + มุมกล้อง)',
  'ความสูง/ระยะเยื้องสายไฟ ณ จุดเรดาร์',
  'จุดจ่ายไฟเทศบาล/PEA ใกล้สุด',
  'ทิศแดด (แสงจ้าเข้ากล้อง)',
  'ช่องระดับ 3.3 ม. (ทางเดิน → ราวสะพาน) ทั้ง 2 คอ',
  'ยืนยันความสูงคานสะพานจริง (คาด 3.40 ม.)',
];

const PER = [
  ['R1', 'ระยะเสา 20/40/55 ม. · ท่าที ทน. เรื่องลูกระนาด'],
  ['R2', 'ตำแหน่งหม้อแปลงเทียบจุดเรดาร์ (≥5 ม.) · ระยะ Pong Sanuk → คอ'],
  ['R3', 'รถสูงเข้าได้ไหม · วันคนเดิน · ทิศเลี้ยวขึ้นสะพาน · สาย 93 ม.'],
  ['ตู้ควบคุม (ร่วม R1+R3)', 'วัดระยะ Sirimas → เซนเซอร์ R3 · ถ้า > 100 ม. ใช้ fiber/แยกสมองกล'],
];

export default function Survey() {
  return (
    <Section id="survey" tone="green">
      <SectionHeader
        dark
        kicker="ขั้นต่อไป"
        kickerColor="#3A2A08"
        kickerBg="#E7C46A"
        title="สิ่งที่ต้องวัด/ยืนยันหน้างาน"
        lead="เพื่อ lock ตำแหน่งจริงก่อนส่งต่อทีมพัฒนาและจัดทำ BOQ — ระยะทั้งหมดในเอกสารนี้เป็นค่าประมาณ"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FadeUp>
          <Card>
            <div className="font-semibold mb-2" style={{ color: 'var(--h-green)' }}>ทุกถนน</div>
            <ul className="list-disc pl-5 text-[14.5px] space-y-1.5">
              {ALL.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </Card>
        </FadeUp>
        <FadeUp delay={0.06}>
          <Card accent="gold">
            <div className="font-semibold mb-2" style={{ color: 'var(--h-green)' }}>เฉพาะจุด</div>
            <ul className="list-none pl-0 text-[14.5px] space-y-2.5">
              {PER.map(([k, v]) => (
                <li key={k}>
                  <strong style={{ color: 'var(--h-green2)' }}>{k}:</strong> {v}
                </li>
              ))}
            </ul>
          </Card>
        </FadeUp>
      </div>

      <FadeUp delay={0.1}>
        <div
          className="mt-8 rounded-xl px-5 py-4 text-[15px] font-medium"
          style={{ background: 'rgba(231,196,106,0.16)', border: '1px solid rgba(231,196,106,0.3)', color: '#F6EFD9' }}
        >
          <strong style={{ color: '#E7C46A' }}>ขั้นต่อไป:</strong> วัดหน้างานวันพฤหัสฯ → lock ตำแหน่ง → ส่งต่อทีมพัฒนา + จัดทำ BOQ
        </div>
      </FadeUp>
    </Section>
  );
}
