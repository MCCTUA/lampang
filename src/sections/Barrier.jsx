import React from 'react';
import { Section, SectionHeader, Card, Note, FadeUp } from '../components/ui.jsx';
import { BarrierDiagram } from '../components/diagrams.jsx';

export default function Barrier() {
  return (
    <Section id="barrier" tone="soft">
      <SectionHeader
        kicker="หัวใจของระบบ"
        title="ไม้กั้น = “ประตูจำกัดความสูง 3.3 เมตร”"
        lead="ปกติไม้กั้นยกขึ้นให้รถทุกคันวิ่งผ่าน · จะพับลงกั้นที่ระดับ 3.3 เมตรเฉพาะเมื่อพบรถสูงเกิน พร้อมไฟวับวาบและเสียงเตือน"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <FadeUp><BarrierDiagram /></FadeUp>

        <FadeUp delay={0.08} className="flex flex-col gap-4">
          <Card accent="green">
            <div className="font-semibold mb-1">การทำงาน</div>
            <ul className="list-disc pl-5 text-[14.5px] space-y-1">
              <li>ปกติ <strong>ยกขึ้น</strong> — รถทุกคันวิ่งปกติ</li>
              <li>ตรวจพบรถสูงเกิน → <strong>พับลงกั้นที่ 3.3 ม.</strong> + ไฟวับวาบ + เสียงเตือน “รถสูงเกิน 3.3 เมตร ห้ามเข้า”</li>
              <li>รถต่ำกว่า 3.3 ม. คันหน้า/หลัง <strong>ลอดใต้ได้ ไม่กระทบ</strong></li>
            </ul>
          </Card>
          <Card accent="gold">
            <div className="font-semibold mb-1">กันชนราวสะพาน (โจทย์ที่แก้แล้ว)</div>
            <ul className="list-disc pl-5 text-[14.5px] space-y-1">
              <li>ถ้ารถชน แขนไม้กั้น <strong>กระดกขึ้น–พับกลับทางต้นน้ำ</strong> (ด้านโล่ง) ไม่เหวี่ยงเข้าราวสะพาน</li>
              <li>ชนแรงมาก → ข้อต่อ <strong>หลุดแบบเปลี่ยนได้</strong> (sacrificial) + มีสลิงกันปลิว</li>
              <li>ฐานอยู่บน <strong>ทางเดินใหม่</strong> ไม่แตะสะพาน/เสาหิน · ยื่นคลุมเลนเข้าเลนเดียว</li>
            </ul>
          </Card>
        </FadeUp>
      </div>

      <FadeUp delay={0.1}>
        <Card className="mt-8">
          <div className="font-semibold mb-2">ลำดับการทำงาน (2 จุด)</div>
          <ul className="list-none pl-0 text-[14.5px] space-y-2">
            <li>
              <span className="inline-flex w-6 h-6 rounded-full items-center justify-center text-white text-[13px] font-bold mr-2 align-middle" style={{ background: 'var(--h-green)' }}>1</span>
              <strong>ปากทาง (ต้นน้ำ):</strong> ประเมิน<strong>ความสูง</strong> (กล้องประเมินสูง / เรดาร์ / เซนเซอร์สแกน) + ป้ายเตือนล่วงหน้า
            </li>
            <li>
              <span className="inline-flex w-6 h-6 rounded-full items-center justify-center text-white text-[13px] font-bold mr-2 align-middle" style={{ background: 'var(--h-green)' }}>2</span>
              <strong>คอสะพาน:</strong> เมื่อรถสูงเกินมาถึง → <strong>กล้องบันทึกภาพเหตุการณ์</strong> + <strong>ไม้กั้นพับลง</strong> + ไฟวับวาบ + เสียงเตือน
            </li>
          </ul>
          <Note className="mt-3">
            กล้องบันทึกเหตุการณ์ทำหน้าที่เป็น “ตัวสั่งการ + เก็บหลักฐาน” เฉพาะตอนเกิดเหตุ — อ่านป้ายทะเบียนเป็นหลักฐานประกอบเหตุการณ์เท่านั้น ไม่ใช่การติดตามรถประชาชนทั่วไป ·
            ตำแหน่ง: คอสะพานใต้ 2 ตัว (รับ R1+R3 จาก 2 มุม) · คอสะพานเหนือ 1 ตัว (R2) · ติดบนเสา/โครงบนทางเท้า ไม่แตะสะพาน/เสาหิน
          </Note>
        </Card>
      </FadeUp>

      <Note className="mt-4">
        ⏳ ต้องวัดหน้างาน: ช่องระดับ 3.3 ม. (ขอบทางเดิน → ราวสะพาน) · ตำแหน่งเสากล้องคอสะพาน (บนทางเท้า ไม่แตะมรดก)
      </Note>
    </Section>
  );
}
