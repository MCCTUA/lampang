import React from 'react';
import { Section, SectionHeader, Card, FadeUp } from '../components/ui.jsx';
import { CabinetDiagram } from '../components/diagrams.jsx';

export default function Cabinet() {
  return (
    <Section id="cabinet" tone="soft">
      <SectionHeader
        kicker="โครงสร้างตู้ควบคุม"
        title="2 ตู้ · เชื่อมกันผ่านเครือข่าย"
        lead="R1 กับ R2 อยู่คนละฝั่งแม่น้ำ จึงแยกเป็นคนละตู้ · R1 กับ R3 อยู่ฝั่งใต้ ใช้ตู้เดียวกัน — แต่ละตู้ประมวลผลเรียลไทม์ในตัวเอง ไม่ต้องพึ่งเครือข่ายในการหยุดรถ"
      />

      <FadeUp><CabinetDiagram /></FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <FadeUp>
          <Card>
            <div className="font-semibold mb-1" style={{ color: 'var(--h-green)' }}>หลักการ</div>
            <ul className="list-disc pl-5 text-[14.5px] space-y-1">
              <li>ประมวลผล <strong>เรียลไทม์ที่เครื่องตัวเอง</strong> (แต่ละตู้มีสมองกลของมัน) → ไม่พึ่งเครือข่ายในการหยุดรถ</li>
              <li>สายทุกเส้น <strong>&lt; 100 ม.</strong> (ถ้าเกิน ใช้ fiber หรือแยกสมองกลเล็ก)</li>
              <li>R1 กับ R2 คนละฝั่งแม่น้ำ → <strong>คนละตู้</strong> · R1 กับ R3 ฝั่งใต้ → <strong>ตู้เดียวกัน</strong></li>
            </ul>
          </Card>
        </FadeUp>
        <FadeUp delay={0.06}>
          <Card accent="gold">
            <div className="font-semibold mb-1">ต้องยืนยันหน้างาน</div>
            <ul className="list-disc pl-5 text-[14.5px] space-y-1">
              <li>ระยะ Sirimas → เซนเซอร์ R3 (3-แยกตลาดเก่า) · ถ้า &gt; 100 ม. → แยกสมองกลเล็กที่ปากตลาดเก่า</li>
              <li>ตำแหน่งวางตู้จริง 2 จุด (มุมปลอดภัย · มีไฟเลี้ยง · ไม่บังทาง)</li>
            </ul>
          </Card>
        </FadeUp>
      </div>
    </Section>
  );
}
