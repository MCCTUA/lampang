import React from 'react';
import { Section, SectionHeader, Card, Pill, Note, FadeUp, Kicker } from '../components/ui.jsx';
import { R1Map, R2Map, R3Map, R3JunctionMap } from '../components/diagrams.jsx';
import SketchGallery from '../components/SketchGallery.jsx';

// Small helper for a "จะติดอะไรที่ไหน" device table.
function DeviceTable({ head, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[14px] border-collapse">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} className="text-left p-2.5 font-semibold text-white" style={{ background: 'var(--h-green)' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ background: i % 2 ? '#FBF8EF' : '#fff' }}>
              {r.map((c, j) => (
                <td key={j} className="p-2.5 align-top" style={{ border: '1px solid var(--h-line)' }}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RoadBlock({ kicker, kickerColor, kickerBg, title, subtitle, map, children, gallery, divider = true }) {
  return (
    <div className={divider ? 'pt-12 mt-12' : ''} style={divider ? { borderTop: '1px solid var(--h-line)' } : undefined}>
      <FadeUp>
        <Kicker color={kickerColor} bg={kickerBg}>{kicker}</Kicker>
        <h3 className="font-bold tracking-tight" style={{ fontSize: 'clamp(1.35rem, 1rem + 1.6vw, 1.9rem)', color: 'var(--h-green)' }}>
          {title}
        </h3>
        {subtitle && <Note className="mt-1.5">{subtitle}</Note>}
      </FadeUp>
      <FadeUp delay={0.06} className="mt-5">{map}</FadeUp>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">{children}</div>
      {gallery}
    </div>
  );
}

export default function Roads() {
  return (
    <Section id="roads" tone="paper">
      <SectionHeader
        kicker="รายละเอียดต่อถนน"
        title="3 เส้นทางเข้าสะพาน — จะติดอะไร ที่ไหน อย่างไร"
        lead="แต่ละเส้นทางมีข้อจำกัดต่างกัน (ทางหนี · สายไฟ · เสาไฟ · ถนนคนเดิน) แผนวางอุปกรณ์จึงปรับตามหน้างานจริง — ระยะทั้งหมดเป็นค่าประมาณ รอยืนยันด้วยการวัดหน้างาน"
      />

      {/* ---------- R1 ---------- */}
      <RoadBlock
        divider={false}
        kicker="R1"
        title="ถนนรัษฎา ฝั่งใต้ — ตรง ~126 ม. (ไม่มีซอย)"
        subtitle="เข้าจากสามแยก Tipchang · รถเพิ่งเลี้ยวจึงวิ่งช้า = จับง่าย"
        map={<R1Map />}
        gallery={
          <SketchGallery
            title="ภาพเสมือนจริงหน้างาน R1"
            items={[
              { file: 'R1_1_entry.png', caption: '① ปากทาง: กล้องประเมินสูง 2 ต้น + เรดาร์/เซนเซอร์สแกน + ลูกระนาด + ป้าย LED' },
              { file: 'R1_2_led.png', caption: '② จุด Sirimas: ป้าย LED + ตู้ควบคุม (บนเสาเดิม)' },
              { file: 'R1_3_throat.png', caption: '③ คอสะพานใต้: ไม้กั้น 3.3 ม. + กล้องบันทึกเหตุการณ์ ×2 (ร่วม R3)' },
            ]}
          />
        }
      >
        <FadeUp>
          <div className="font-semibold mb-2" style={{ color: 'var(--h-green)' }}>จะติดอะไรที่ไหน</div>
          <DeviceTable
            head={['จุด', 'อุปกรณ์']}
            rows={[
              ['ปากทาง (เพิ่งเลี้ยวจาก Tipchang · รถช้า)', <>กล้องประเมินสูง 2 ต้น · เรดาร์เสาซ้าย · ลูกระนาด · ป้ายเตือน</>],
              ['จุด Sirimas (~55 ม. ก่อนคอ)', <>ป้าย LED · ตู้ควบคุม + สมองกล <span style={{ color: 'var(--h-muted)' }}>(รอยืนยันร่วมกับ R3)</span></>],
              ['คอสะพานใต้', <>ไม้กั้น 3.3 ม. + <strong>กล้องบันทึกเหตุการณ์ ×2</strong> (รับ R1+R3) + strobe/เสียง</>],
            ]}
          />
        </FadeUp>
        <FadeUp delay={0.06} className="flex flex-col gap-4">
          <Card accent="green">
            <strong>ข้อดี</strong> — ถนนตรง มีที่เหลือเยอะ · ไม่มีซอย = จับรถได้ครบ · จุด Sirimas ลึก 28 ม. ทำให้เรดาร์ไม่มีตัวสะท้อนกวน
          </Card>
          <Card accent="gold">
            <div className="font-semibold mb-1">เลือกได้ (if–then)</div>
            <ul className="list-disc pl-5 text-[14.5px] space-y-1">
              <li><strong>ถ้า ทน. ให้ทำลูกระนาด</strong> → ปลดล็อกชุด <Pill variant="eco">ประหยัด</Pill> (กล้อง) + ปลอดภัยขึ้น</li>
              <li><strong>ถ้าไม่ให้</strong> → ใช้ <Pill variant="full">เต็มระบบ</Pill> (เรดาร์ตรวจไกล)</li>
            </ul>
          </Card>
          <Card>
            <strong style={{ color: 'var(--h-gold)' }}>ปรึกษา ทน.:</strong> รถเข้ามาแล้วเลี่ยงกลางทางไม่ได้ (ไม่มีซอย) → ควรมีป้ายเตือนที่สามแยกก่อนเลี้ยวเข้า <span style={{ color: 'var(--h-muted)' }}>(อยู่นอกงบ — เสนอเป็นทางเลือก)</span>
          </Card>
        </FadeUp>
      </RoadBlock>

      {/* ---------- R2 ---------- */}
      <RoadBlock
        kicker="R2"
        title="ถนนรัษฎา ฝั่งเหนือ — ตรง ~98 ม."
        subtitle="รถหนีไม่ได้ · สายไฟ/หม้อแปลงหนาสุด — แต่รถออกจากไฟแดงช้า = จับง่ายกว่าที่คิด"
        map={<R2Map />}
        gallery={
          <SketchGallery
            title="ภาพเสมือนจริงหน้างาน R2"
            items={[
              { file: 'R2_1_entry.png', caption: '① ปากทาง: กล้อง 2 ต้น (10 ม.) + เรดาร์/เซนเซอร์สแกน · ระวังต้นก้ามปู' },
              { file: 'R2_2_led.png', caption: '② เสากลาง (~50 ม.): ป้าย LED + ตู้ควบคุม' },
              { file: 'R2_3_throat.png', caption: '③ คอสะพานเหนือ: ไม้กั้น 3.3 ม. + กล้องบันทึกเหตุการณ์' },
            ]}
          />
        }
      >
        <FadeUp className="flex flex-col gap-4">
          <Card accent="red">
            <strong style={{ color: 'var(--h-red)' }}>โจทย์สำคัญ: รถเข้า R2 แล้วหนีไม่ได้</strong> — ไม่มีซอย + ห้ามเลี้ยวออก + กลับรถไม่ได้ → <strong>ไม้กั้น 3.3 ม. = ด่านเดียว</strong> · จึงควรเตือนตั้งแต่ปากทาง (98 ม.) และเสนอป้ายที่สี่แยก Pong Sanuk ก่อนเลี้ยวเข้า
          </Card>
          <Card accent="green">
            <strong>ข้อได้เปรียบ</strong> — รถติดไฟแดงที่สี่แยกอยู่แล้ว → ออกตัวช้า → กล้องจับ/บันทึกภาพง่าย (ดีกว่า R1 ด้วยซ้ำ)
          </Card>
        </FadeUp>
        <FadeUp delay={0.06} className="flex flex-col gap-4">
          <Card accent="gold">
            <div className="font-semibold mb-1">ต้องจัดการ (สายไฟ/หม้อแปลง)</div>
            <ul className="list-disc pl-5 text-[14.5px] space-y-1">
              <li>วางเรดาร์ <strong>ห่างหม้อแปลง ≥ 5 ม.</strong> + ปรับมุม</li>
              <li>ตรวจ <strong>ก่อนต้นก้ามปู</strong> (ต้นไม้บังมุม)</li>
              <li>ถนนแคบ 7.5 ม. → ปรับมุมกล้อง/เซนเซอร์สแกนให้พอดี</li>
            </ul>
          </Card>
          <Card>
            <strong>เสากลาง (~50 ม.)</strong> = จุดตู้/สมองกลที่ลงตัว (50 ม.→กล้อง + 50 ม.→ไม้กั้น ทั้งคู่ &lt; 100 ม.)
          </Card>
        </FadeUp>
      </RoadBlock>

      {/* ---------- R3 ---------- */}
      <RoadBlock
        kicker="R3 · ทางเลือกเสริม (Optional)"
        kickerColor="#8A5A12"
        kickerBg="var(--h-gold-soft)"
        title="ถนนตลาดเก่า (กาดกองต้า) — ~93 ม."
        subtitle="ถนนคนเดินสุดสัปดาห์ · แคบ · ไม่มีเสาไฟตลอดเส้น (มีแต่เสาโคมมรดก — ห้ามแตะ)"
        map={<R3Map />}
        gallery={
          <SketchGallery
            title="ภาพเสมือนจริงหน้างาน R3"
            items={[
              { file: 'R3_1_junction.png', caption: '① 3-แยกปากทาง: กล้อง+เรดาร์+เซนเซอร์สแกน บนเสาเดิม (ไม่ตั้งเสาใหม่บนถนนตลาด)' },
              { file: 'R3_2_led.png', caption: '② ป้าย LED + ตู้ ที่ 3-แยก (กลมกลืน ไม่เสียตลาด)' },
              { file: 'R3_3_throat.png', caption: '③ คอสะพานใต้ (มุมตลาดเก่า): ไม้กั้น + กล้องเหตุการณ์ ร่วม R1' },
            ]}
          />
        }
      >
        <FadeUp className="md:col-span-2">
          <Card accent="green" style={{ borderLeftColor: 'var(--h-green)' }}>
            <strong style={{ color: 'var(--h-green)' }}>ตัด R3 ออกได้ โดยสะพานยังปลอดภัย:</strong> R1 และ R3 ไปรวมที่ <strong>คอสะพานใต้จุดเดียวกัน</strong> → ไม้กั้น 3.3 ม. กั้นรถจากตลาดเก่าอยู่แล้ว แม้ไม่มีเซนเซอร์ R3 · เซนเซอร์ R3 เพิ่มแค่ “เตือนล่วงหน้าฝั่งตลาดเก่า” → เลือกทำหรือไม่ทำก็ได้ตามงบ
          </Card>
        </FadeUp>

        <FadeUp className="md:col-span-2">
          <div className="font-semibold mb-3" style={{ color: 'var(--h-green)' }}>ผังวางเซนเซอร์ที่ 3-แยกปากทาง (มองจากบน)</div>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,360px)_1fr] gap-6 items-start">
            <R3JunctionMap />
            <div className="flex flex-col gap-4">
              <DeviceTable
                head={['เสา', 'ประหยัด', 'เต็ม']}
                rows={[
                  [<strong>P0 หม้อแปลง</strong>, 'กล้อง A (ประเมินสูง)', 'เท่าเดิม'],
                  [<strong>P2 เยื้อง 10ม.</strong>, 'กล้อง B (ประเมินสูง)', '+ เรดาร์ 77GHz (หันลงถนน)'],
                  [<strong>P1 เยื้อง 6ม.</strong>, '—', 'เซนเซอร์สแกน (สแกนขวาง)'],
                ]}
              />
              <Card>
                <div className="font-semibold mb-1">เหตุผล</div>
                <ul className="list-disc pl-5 text-[14.5px] space-y-1">
                  <li>กล้อง 2 ตัว (P0+P2) <strong>baseline 10 ม.</strong> = ประเมินความสูงได้แม้ตัดงบ</li>
                  <li>เรดาร์ที่ P2 <strong>ห่างหม้อแปลง 10 ม.</strong> (พ้น ≥5 ม.) · หันลงถนนไปคอสะพาน จับรถวิ่งออก</li>
                  <li>เล็งลงถนน 93 ม. → จับรถทุกคันไม่ว่ามาจากขาไหนของ 3-แยก</li>
                  <li><strong>บันทึกภาพเหตุการณ์ = ที่คอสะพานใต้</strong> (ร่วม R1) · ปากทางนี้ทำหน้าที่ “ประเมินสูง” เป็นหลัก</li>
                </ul>
              </Card>
            </div>
          </div>
        </FadeUp>

        <FadeUp className="flex flex-col gap-4">
          <Card accent="green">
            <strong>ทางแก้ “ไม่มีเสา”</strong> — ตรวจที่ปากทาง 3-แยก (มีเสาไฟเดิม + รถช้าเข้าถนนแคบ) → ไม่ตั้งเสาใหม่บนถนนตลาด (รักษาทัศนียภาพ) · ใช้ไม้กั้น/ตู้ ร่วมคอสะพานใต้กับ R1
          </Card>
          <Card><strong>ชุดเบาสุด</strong> — 1 กล้องปากทาง + ไม้กั้นร่วม (ถนนแคบ/ช้า/ปิดสุดสัปดาห์ = เสี่ยงต่ำ)</Card>
        </FadeUp>
        <FadeUp delay={0.06}>
          <Card accent="gold">
            <div className="font-semibold mb-1">ต้องถาม/เช็ค ทน.</div>
            <ul className="list-disc pl-5 text-[14.5px] space-y-1">
              <li>รถบรรทุกสูง <strong>เข้าถนนตลาดได้จริงไหม</strong> (ถ้าเข้าไม่ได้ = แทบไม่มีความเสี่ยง อาจแค่ป้าย)</li>
              <li>ถนนคนเดิน <strong>วัน/เวลาไหน</strong> (ช่วงนั้นไม่มีรถ)</li>
              <li>สาย 93 ม. ชิดลิมิต → อาจใช้ fiber หรือแยกสมองกลเล็ก</li>
            </ul>
          </Card>
        </FadeUp>
      </RoadBlock>
    </Section>
  );
}
