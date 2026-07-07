import React from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const G2 = 'var(--h-green2)';
const GOLD = 'var(--h-gold)';
const RED = 'var(--h-red)';

const TOTAL = 120;
const TASKS = [
  { name: 'สำรวจหน้างาน + สรุปสเปก/ตำแหน่ง', s: 0, e: 7, c: G },
  { name: 'สั่งซื้อ/จัดหา + ผลิต/นำเข้าอุปกรณ์', s: 7, e: 52, c: G2 },
  { name: 'เตรียมหน้างาน — ฐาน/ไฟฟ้า/เดินสาย', s: 21, e: 52, c: G2 },
  { name: 'ติดตั้งอุปกรณ์หน้างาน (~7 วัน)', s: 52, e: 60, c: GOLD, hl: true },
  { name: 'เชื่อมระบบ + ทดสอบการทำงานรวม', s: 60, e: 66, c: G2 },
  { name: 'ปรับจูน AI + training หน้างาน', s: 66, e: 90, c: GOLD, hl: true },
  { name: 'ส่งมอบ + อบรมเจ้าหน้าที่', s: 88, e: 90, c: G },
  { name: 'เผื่อ fine-tuning / AI training', s: 90, e: 120, c: RED, buffer: true },
];
const pct = (d) => `${(d / TOTAL) * 100}%`;

export default function Timeline() {
  return (
    <Section id="timeline" tone="soft">
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>
        Timeline
      </span>
      <h2 className="font-bold tracking-tight mt-3" style={{ fontSize: 30, lineHeight: 1.15, color: G }}>
        แผนงาน (Gantt) — ส่งมอบภายใน 120 วัน
      </h2>
      <p className="mt-2" style={{ fontSize: 15, color: 'var(--h-muted)' }}>
        เนื้องานจริงประมาณ 90 วัน · ขอเผื่ออีก 30 วันสำหรับปรับจูน (fine-tuning) และฝึกโมเดล AI ให้แม่นกับหน้างาน — รวมส่งมอบภายใน 120 วัน
      </p>

      {/* Gantt */}
      <div style={{ marginTop: 18 }}>
        {TASKS.map((t) => (
          <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '270px 1fr', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <div style={{ fontSize: 13, color: 'var(--h-ink)', textAlign: 'right', fontWeight: t.hl || t.buffer ? 700 : 500 }}>{t.name}</div>
            <div style={{ position: 'relative', height: 24, background: '#fff', border: '1px solid var(--h-line)', borderRadius: 5 }}>
              {/* gridlines */}
              {[30, 60, 90].map((d) => (
                <div key={d} style={{ position: 'absolute', left: pct(d), top: 0, bottom: 0, width: 1, background: 'var(--h-line)' }} />
              ))}
              {/* bar */}
              <div style={{
                position: 'absolute', left: pct(t.s), width: pct(t.e - t.s), top: 4, bottom: 4, borderRadius: 4,
                background: t.buffer ? 'repeating-linear-gradient(45deg, #F3E1DF, #F3E1DF 6px, #FBEEEC 6px, #FBEEEC 12px)' : t.c,
                border: t.buffer ? `1.5px dashed ${RED}` : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: t.buffer ? RED : '#fff', whiteSpace: 'nowrap' }}>{t.e - t.s} วัน</span>
              </div>
            </div>
          </div>
        ))}

        {/* axis */}
        <div style={{ display: 'grid', gridTemplateColumns: '270px 1fr', gap: 12, marginTop: 2 }}>
          <div />
          <div style={{ position: 'relative', height: 20 }}>
            {[0, 30, 60, 90, 120].map((d) => (
              <span key={d} style={{ position: 'absolute', left: pct(d), transform: 'translateX(-50%)', fontSize: 11.5, color: 'var(--h-muted)' }}>{d}</span>
            ))}
            {/* delivery milestone */}
            <div style={{ position: 'absolute', left: '100%', top: -218, height: 218, width: 2, background: RED }} />
          </div>
        </div>
      </div>

      <div style={{ marginTop: 14, display: 'flex', gap: 24, flexWrap: 'wrap', fontSize: 12.5, color: 'var(--h-muted)' }}>
        <span><span style={{ display: 'inline-block', width: 12, height: 12, background: GOLD, borderRadius: 2, verticalAlign: 'middle', marginRight: 5 }} />ช่วงเน้น (ติดตั้ง · ปรับจูน AI)</span>
        <span><span style={{ display: 'inline-block', width: 12, height: 12, border: `1.5px dashed ${RED}`, background: '#FBEEEC', borderRadius: 2, verticalAlign: 'middle', marginRight: 5 }} />เผื่อ 30 วัน (fine-tuning/AI)</span>
        <span style={{ color: RED, fontWeight: 600 }}>| เส้นแดง = กำหนดส่งมอบ 120 วัน</span>
        <span>ระยะทั้งหมดเป็นค่าประมาณ ยืนยันเมื่อสรุปสเปก/ซัพพลายเออร์</span>
      </div>
    </Section>
  );
}
