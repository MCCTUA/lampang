import React from 'react';
import { Section } from '../components/ui.jsx';
import { CabinetDiagram } from '../components/diagrams.jsx';

const G = 'var(--h-green)';
const GOLD = 'var(--h-gold)';

export default function Cabinet() {
  return (
    <Section id="cabinet" tone="cream">
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>
          งานส่วนเพิ่ม (Optional)
        </span>
        <span className="inline-block text-[12.5px] font-bold rounded-full px-3 py-1" style={{ background: 'var(--h-gold-soft)', color: '#8A5A12' }}>
          ไม่รวมใน BOQ หลัก
        </span>
      </div>
      <h2 className="font-bold tracking-tight mt-3" style={{ fontSize: 30, lineHeight: 1.15, color: G }}>
        การเก็บข้อมูลรวมศูนย์ — ถ้า ทน. ต้องการ
      </h2>
      <p className="mt-2" style={{ fontSize: 15.5, color: 'var(--h-muted)' }}>
        ระบบทั้ง 2 ฝั่ง (เหนือ/ใต้) ออกแบบให้ <strong style={{ color: 'var(--h-ink)' }}>ทำงานแยกอิสระต่อกัน</strong> — หยุดรถได้เองที่หน้างานโดยไม่ต้องพึ่งการเชื่อมต่อ ·
        หาก ทน. ต้องการเก็บข้อมูลเป็นหลักฐานรวมศูนย์ สามารถเพิ่มการส่งข้อมูลผ่าน 4G / Fiber ได้ (เป็นงานส่วนเพิ่ม)
      </p>

      <div style={{ marginTop: 14 }}><CabinetDiagram /></div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginTop: 14 }}>
        <div style={{ background: '#fff', border: '1px solid var(--h-line)', borderLeft: `5px solid ${G}`, borderRadius: 12, padding: '13px 18px' }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: G, marginBottom: 5 }}>มาตรฐาน — ทำงานแยกอิสระ</div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, lineHeight: 1.55 }}>
            <li>แต่ละตู้ประมวลผลเรียลไทม์ที่เครื่องตัวเอง (edge)</li>
            <li>สั่งไม้กั้นได้เองโดยไม่ต้องพึ่งเครือข่าย</li>
            <li>ไม่มีค่าใช้จ่ายเครือข่ายต่อเนื่อง</li>
          </ul>
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--h-line)', borderLeft: `5px solid ${GOLD}`, borderRadius: 12, padding: '13px 18px' }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: '#8A5A12', marginBottom: 5 }}>งานส่วนเพิ่ม — ส่งข้อมูลรวม</div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, lineHeight: 1.55 }}>
            <li>ส่งผ่าน <strong>4G</strong> หรือ <strong>Fiber</strong> ไปเก็บที่แดชบอร์ดเดียว</li>
            <li>ใช้เป็นหลักฐาน / รายงาน / ตรวจย้อนหลัง</li>
            <li>คิดแยกต่างหาก — <strong>ไม่อยู่ใน BOQ หลัก</strong></li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
