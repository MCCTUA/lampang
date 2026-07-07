import React from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const G2 = 'var(--h-green2)';

function QAItem({ q, a }) {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--h-line)', borderLeft: `4px solid ${G2}`, borderRadius: 10, padding: '11px 15px' }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: G, marginBottom: 4, lineHeight: 1.4 }}>Q · {q}</div>
      <div style={{ fontSize: 13.2, color: 'var(--h-ink)', lineHeight: 1.5 }}>{a}</div>
    </div>
  );
}

function FaqPage({ id, tone, kicker, title, groups }) {
  return (
    <Section id={id} tone={tone}>
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>{kicker}</span>
      <h2 className="font-bold tracking-tight mt-2.5" style={{ fontSize: 29, lineHeight: 1.15, color: G }}>{title}</h2>
      <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {groups.map((grp) => (
          <div key={grp.title}>
            {groups.length > 1 && <div style={{ fontSize: 15, fontWeight: 800, color: G2, marginBottom: 8 }}>{grp.title}</div>}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {grp.items.map(([q, a]) => <QAItem key={q} q={q} a={a} />)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const ACCURACY = {
  title: 'ความแม่นยำ & การตรวจจับ',
  items: [
    ['ความสูงคลาด 5–10 ซม. จะพลาดที่เกณฑ์ 3.3 ม. ไหม?', 'ตั้งค่าให้เตือน/สั่งการเผื่อ buffer (เช่นเริ่มที่ ~3.2 ม.) + ยืนยันด้วย 3 เซนเซอร์ + มีไม้กั้นเป็นด่านสุดท้าย · ออกแบบให้ “เอนไปทางกันไว้ก่อน”'],
    ['False negative vs False positive จัดการอย่างไร?', 'ยอมเตือนเกิน (false positive) มากกว่าปล่อยหลุด (false negative) · ไม้กั้นเปิดเร็ว คุมเลนเดียว มี log ตรวจย้อนหลัง'],
    ['รถพาดเหล็ก/ไม้ยาวสูง ตรวจได้ไหม?', 'เคสยากที่สุด — วัตถุบาง รูปทรงไม่สม่ำเสมอ ตัวอย่างน้อย ต้องสะสม dataset มากเพื่อฝึก AI · ระหว่างข้อมูลยังไม่พอ อาจหลุดได้ · ลดเสี่ยงด้วย fusion + จับขอบบนสุด + ไม้กั้นกายภาพ'],
    ['รถหลายคันบังกัน (occlusion) ทำอย่างไร?', 'เรดาร์แยกเป้าหมาย + จับจังหวะทีละคัน · กล้อง/สแกนยืนยันเฉพาะคันที่เข้าโซน'],
  ],
};
const SYSTEM = {
  title: 'ระบบ / ไฟฟ้า / เครือข่าย',
  items: [
    ['ไฟดับ ระบบทำงานไหม · ไม้กั้นอยู่สถานะใด (fail-safe)?', 'มีไฟสำรอง (UPS/แบต) + กำหนดสถานะปลอดภัยเมื่อไฟหมดชัด (แนะนำเปิดค้างให้รถผ่าน) — ขอตกลงร่วมกับ ทน.'],
    ['เครือข่ายล่ม ยังหยุดรถได้ไหม?', 'ประมวลผลที่ตู้หน้างาน (edge) → สั่งไม้กั้นได้โดยไม่ต้องพึ่งเครือข่าย'],
    ['ความหน่วง (latency) รวมเท่าไหร่?', 'ตรวจจับ + ตัดสิน ~< 0.5 วินาที · ไม้กั้นพับลง ~2–3 วินาที (ค่าประมาณ)'],
    ['EMC จากสายไฟ/หม้อแปลง รบกวนเรดาร์ไหม?', 'วางเรดาร์ห่างหม้อแปลง ≥ 5 ม. + ปรับมุม + ทดสอบหน้างานก่อน lock'],
    ['ตัวสแกน (LiDAR) ปลอดภัยต่อสายตาไหม?', 'ใช้ระดับที่ปลอดภัยต่อสายตา (eye-safe)'],
  ],
};
const ENV = {
  title: 'สภาพแวดล้อม',
  items: [
    ['หมอกควัน (PM2.5) / ฝน / กลางคืน ยังทำงานไหม?', 'เรดาร์ทำงานทุกสภาพอากาศ (แกนหลักตอนทัศนวิสัยแย่) · กล้องมีไฟส่อง+สู้แสงย้อน · สแกนอ่อนในหมอกหนา→เรดาร์ครอบ · ผลรวม = ไม่ตาบอดพร้อมกัน'],
    ['แดดย้อน / ทิศแดด กระทบกล้องไหม?', 'เลือกทิศติดตั้ง + กล้องสู้แสงย้อน (WDR) + สำรวจแสงหน้างานตามช่วงเวลา'],
  ],
};
const SAFETY = {
  title: 'ไม้กั้น / ความปลอดภัย',
  items: [
    ['รถฉุกเฉิน (ดับเพลิง/กู้ภัย) จัดการอย่างไร?', 'มี override โดยเจ้าหน้าที่ · รถฉุกเฉินทั่วไปไม่สูงเกิน 3.3 ม. จึงผ่านปกติ'],
    ['รถชนไม้กั้น เสียหาย/ความรับผิด?', 'ข้อต่อเปลี่ยนได้ (sacrificial) + สลิงกันปลิว + แขนพับหนีทางโล่ง ไม่เข้าราวสะพาน'],
    ['ถ้าไม้กั้นพัง/ไม่ลง เกิดอะไรขึ้น?', 'ระบบหลายชั้น — ยังมีป้าย LED + strobe + เสียงเตือน + log แจ้งเจ้าหน้าที่ทันที'],
  ],
};
const LEGAL = {
  title: 'กฎหมาย / ความเป็นส่วนตัว',
  items: [
    ['อ่านป้ายทะเบียน = ละเมิด PDPA ไหม?', 'เก็บเฉพาะภาพเหตุการณ์เป็นหลักฐาน ไม่ใช่ติดตามบุคคล · มีนโยบายระยะเวลาจัดเก็บ + จำกัดสิทธิ์การเข้าถึง · ปฏิบัติตาม PDPA'],
    ['ต้องขึ้นทะเบียนเครื่องมือวัดทางมาตรวิทยาไหม?', 'วางบทบาทเป็น “เฝ้าระวัง · บันทึก · ส่งข้อมูล” ไม่ประกาศเป็นเครื่องตรวจวัดทางการ จึงไม่เข้าข้อกำหนดเครื่องมือวัด'],
  ],
};
const TCO = {
  title: 'ดูแลรักษา & ต้นทุนตลอดอายุ (TCO)',
  items: [
    ['ตัวสแกน (LiDAR) อายุจำกัด ต้องเปลี่ยน · แผน/งบ?', 'เรดาร์คัดกรองให้สแกนทำงานเท่าที่จำเป็น → ยืดอายุ · มีแผนสำรอง/สัญญาบำรุงรักษา · ตัวเลขอายุ/ค่าดูแลอยู่ระหว่างยืนยันกับผู้ผลิต'],
    ['บำรุงรักษาอะไร ใครทำ ความถี่?', 'ทำความสะอาดหน้าเลนส์ · สอบเทียบ (recalibrate) · ตรวจไม้กั้น ตามรอบ — สรุปเป็นแผน MA เมื่อ lock สเปก'],
  ],
};
const HERITAGE = {
  title: 'โยธา / มรดก',
  items: [
    ['กระทบสะพาน/โบราณสถานไหม · ต้องขอกรมศิลปากรไหม?', 'อุปกรณ์อยู่ห่างสะพาน ≥ 20 ม. บนถนนสาธารณะ · ฐานไม้กั้นอยู่บนทางเดินใหม่ ไม่แตะสะพาน/เสาหิน · ประสานกรมศิลปากรตามขั้นตอน'],
  ],
};

export function Faq1() {
  return <FaqPage id="faq1" tone="cream" kicker="Q&A" title="ความแม่นยำ & การตรวจจับ (1/4)" groups={[ACCURACY]} />;
}
export function Faq2() {
  return <FaqPage id="faq2" tone="soft" kicker="Q&A" title="ระบบ / ไฟฟ้า / เครือข่าย (2/4)" groups={[SYSTEM]} />;
}
export function Faq3() {
  return <FaqPage id="faq3" tone="cream" kicker="Q&A" title="สภาพแวดล้อม · ไม้กั้น/ความปลอดภัย (3/4)" groups={[ENV, SAFETY]} />;
}
export function Faq4() {
  return <FaqPage id="faq4" tone="soft" kicker="Q&A" title="กฎหมาย · ดูแลรักษา · มรดก (4/4)" groups={[LEGAL, TCO, HERITAGE]} />;
}
