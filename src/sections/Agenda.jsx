import React from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const GOLD = 'var(--h-gold)';

export const AGENDA = [
  { n: 1, title: 'ภาพรวมระบบ', items: '3 เส้นทางเข้าสะพาน · 3 โซนต่อถนน · ความเร็ว × ระยะ' },
  { n: 2, title: 'หลักการ 3 เซนเซอร์ & รีวิวการตรวจจับ', items: 'ทำไม 3 เซนเซอร์ · สภาพอากาศ/PM2.5 · ประเภทรถ · สี/ผิว' },
  { n: 3, title: 'อุปกรณ์เตือน & ด่านกายภาพ', items: 'ป้ายจอ LED · ไม้กั้น 3.3 ม. · เสาครอบไม้กั้นมรดก' },
  { n: 4, title: 'แผนติดตั้งรายพื้นที่ & กำหนดการ', items: 'R1 รัษฎาใต้ · R2 รัษฎาเหนือ · R3 ตลาดเก่า · Timeline' },
  { n: 5, title: 'คำถามที่พบบ่อย (Q&A)', items: 'ความแม่นยำ · ระบบ/ไฟฟ้า · สิ่งแวดล้อม · กฎหมาย/มรดก' },
  { n: 6, title: 'ภาคผนวก', items: 'สเปกอุปกรณ์ · LiDAR เชิงลึก · สิ่งที่ยืนยันกับ ทน.' },
];

export default function Agenda() {
  return (
    <Section id="agenda" tone="cream">
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>
        หัวข้อการนำเสนอ · Agenda
      </span>
      <h2 className="font-bold tracking-tight mt-3" style={{ fontSize: 34, lineHeight: 1.12, color: G }}>
        วันนี้เราจะคุยกันเรื่องอะไรบ้าง
      </h2>
      <p className="mt-2" style={{ fontSize: 15.5, color: 'var(--h-muted)' }}>
        6 หัวข้อ — จากภาพรวมระบบ สู่แผนติดตั้งจริงในพื้นที่ · ปิดท้ายด้วย Q&A และภาคผนวกเชิงเทคนิค
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 22px', marginTop: 22 }}>
        {AGENDA.map((a) => (
          <div
            key={a.n}
            style={{
              display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fff',
              border: '1px solid var(--h-line)', borderLeft: `5px solid ${G}`, borderRadius: 12, padding: '14px 18px',
            }}
          >
            <span
              style={{
                flexShrink: 0, width: 42, height: 42, borderRadius: 10, background: 'rgba(31,92,61,0.10)',
                color: G, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 20,
              }}
            >
              {a.n}
            </span>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: G, lineHeight: 1.2 }}>{a.title}</div>
              <div style={{ fontSize: 13.5, color: 'var(--h-muted)', marginTop: 4, lineHeight: 1.5 }}>{a.items}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 18 }}>
        <span style={{ width: 40, height: 4, background: GOLD, borderRadius: 2 }} />
        <span style={{ fontSize: 13.5, color: 'var(--h-muted)' }}>
          หัวข้อ 1–5 คือเนื้อหาหลักสำหรับการตัดสินใจ · หัวข้อ 6 (ภาคผนวก) ไว้ดูรายละเอียดเชิงเทคนิคเมื่อต้องการ
        </span>
      </div>
    </Section>
  );
}
