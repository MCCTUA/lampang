import React from 'react';
import { Section, SectionHeader, Card, Pill, Note, FadeUp } from '../components/ui.jsx';
import { OverviewMap } from '../components/diagrams.jsx';

export default function Overview() {
  return (
    <Section id="overview" tone="cream">
      <SectionHeader
        kicker="ภาพรวมระบบ"
        title="3 เส้นทางเข้าสะพาน (ฝั่งใต้ 2 · ฝั่งเหนือ 1)"
        lead="R1 + R2 คือถนนรัษฎาเส้นเดียวกันที่ข้ามสะพาน (เรียงแนวตั้ง) · R3 ตลาดเก่าเป็นแยกซ้ายที่คอสะพานใต้ · ส่วนราชบุตรและเจริญประเทศมีป้ายห้ามเลี้ยวขึ้นสะพานอยู่แล้ว จึงตัดออก"
      />

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,380px)_1fr] gap-8 items-start">
        <FadeUp>
          <OverviewMap />
        </FadeUp>

        <FadeUp delay={0.08} className="flex flex-col gap-4">
          {/* roads table */}
          <div className="overflow-x-auto">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr>
                  {['เส้นทาง', 'ลักษณะ', 'ระยะ'].map((h) => (
                    <th key={h} className="text-left p-2.5 font-semibold text-white" style={{ background: 'var(--h-green)' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['R1 รัษฎาใต้', 'ตรง · ไม่มีซอย', '~126 ม.'],
                  ['R2 รัษฎาเหนือ', 'ตรง · มาจากไฟแดง · ไม่มีทางหนี', '~98 ม.'],
                  ['R3 ตลาดเก่า', 'ถนนคนเดินสุดสัปดาห์ · แคบ · ไม่มีเสาไฟ', '~93 ม.'],
                ].map((row, i) => (
                  <tr key={row[0]} style={{ background: i % 2 ? '#FBF8EF' : '#fff' }}>
                    <td className="p-2.5 font-semibold" style={{ border: '1px solid var(--h-line)' }}>{row[0]}</td>
                    <td className="p-2.5" style={{ border: '1px solid var(--h-line)' }}>{row[1]}</td>
                    <td className="p-2.5 latin" style={{ border: '1px solid var(--h-line)' }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Card accent="red">
            <div className="font-semibold mb-1" style={{ color: 'var(--h-ink)' }}>2 เส้นที่ “ตัดออก” แล้ว</div>
            <p className="text-[14.5px]">
              <Pill variant="out">ตัดออก</Pill> <strong>ราชบุตร</strong> (ฝั่งใต้) ·{' '}
              <strong>เจริญประเทศ</strong> (ฝั่งเหนือ) — มีป้ายห้ามเลี้ยวขึ้นสะพานอยู่แล้ว → ไม่ต้องติดตั้งอุปกรณ์
            </p>
            <Note className="mt-1">เหลือทางเข้าสะพานจริง 3 เส้นตามตาราง</Note>
          </Card>
        </FadeUp>
      </div>

      {/* two levels */}
      <FadeUp delay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <Card accent="green">
            <Pill variant="eco">ประหยัด</Pill>
            <div className="mt-2 font-semibold">กล้องประเมินความสูง</div>
            <Note className="mt-1">ทำงานได้ดีเมื่อรถวิ่งช้า (เช่น เพิ่งเลี้ยว หรือติดไฟแดง) · ลงทุนต่ำ</Note>
          </Card>
          <Card accent="gold">
            <Pill variant="full">เต็มระบบ</Pill>
            <div className="mt-2 font-semibold">เรดาร์ตรวจรถ + เซนเซอร์สแกนประเมินขนาด + กล้องบันทึกเหตุการณ์</div>
            <Note className="mt-1">แม่นยำขึ้นในสภาพจริง · รองรับรถเร็ว/สายไฟหนา</Note>
          </Card>
        </div>
        <Note className="mt-3">ทั้ง 2 ระดับใช้ “ตำแหน่งติดตั้งชุดเดียวกัน” ต่างกันเฉพาะตัวเซนเซอร์ที่เลือกใช้</Note>
      </FadeUp>
    </Section>
  );
}
