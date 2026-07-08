import React from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const RED = 'var(--h-red)';

const LV = {
  g: { bg: '#E7F0E9', c: G },
  m: { bg: 'var(--h-gold-soft)', c: '#8A5A12' },
  b: { bg: 'var(--h-red-soft)', c: RED },
};
function Cell({ lv, text }) {
  const s = LV[lv];
  return <span style={{ display: 'block', background: s.bg, color: s.c, borderRadius: 8, padding: '6px 8px', fontSize: 12.5, fontWeight: 700, textAlign: 'center', lineHeight: 1.25 }}>{text}</span>;
}

// capability | camera | radar | lidar  (each = [level, text])
const ROWS = [
  { cap: 'วัดความสูงแม่นยำ', cam: ['m', 'ปานกลาง (±5–10 ซม. · ช้า)'], radar: ['b', 'ไม่ใช่หน้าที่ (คลาดจากมุม/ระยะ)'], lidar: ['g', 'ดีมาก'] },
  { cap: 'ตรวจจับรถเข้ามา (หน้าที่หลักเรดาร์)', cam: ['g', 'ดี'], radar: ['g', 'ดีมาก · ปลุก LiDAR'], lidar: ['g', 'ดี'] },
  { cap: 'ทุกสภาพอากาศ (ฝน/หมอก/PM2.5)', cam: ['b', 'แพ้'], radar: ['g', 'ดีมาก'], lidar: ['m', 'ลดในหมอกหนา'] },
  { cap: 'กลางคืน / มืด', cam: ['m', 'ต้องมี IR'], radar: ['g', 'ดีมาก'], lidar: ['g', 'ดี'] },
  { cap: 'ผิวดำ / มันวาว', cam: ['m', 'ปานกลาง'], radar: ['g', 'ไม่เกี่ยวสี'], lidar: ['b', 'แพ้'] },
  { cap: 'รถความเร็วสูง', cam: ['b', 'เบลอ/เฟรมน้อย'], radar: ['g', 'ดี'], lidar: ['g', 'ดี'] },
  { cap: 'อ่านป้าย / เก็บหลักฐาน', cam: ['g', 'ดีมาก'], radar: ['b', 'ทำไม่ได้'], lidar: ['b', 'ทำไม่ได้'] },
];

export default function SensorMatrix() {
  return (
    <Section id="matrix" tone="cream">
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>
        เปรียบเทียบ 3 เซนเซอร์
      </span>
      <h2 className="font-bold tracking-tight mt-2.5" style={{ fontSize: 29, lineHeight: 1.15, color: G }}>
        กล้อง · เรดาร์ · LiDAR — แต่ละตัวเก่งคนละอย่าง จึงต้องรวมกัน
      </h2>
      <p className="mt-1.5" style={{ fontSize: 14, color: 'var(--h-muted)' }}>
        ไม่มีเซนเซอร์ตัวใดตัวเดียวเก่งทุกด้าน — สีเขียว = ดี · เหลือง = จำกัด · แดง = ทำไม่ได้/แพ้
      </p>

      <div style={{ marginTop: 14 }}>
        {/* header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 9, marginBottom: 7 }}>
          <div />
          {[['กล้อง', true], ['เรดาร์', false], ['LiDAR', false]].map(([h, camCol]) => (
            <div key={h} style={{ textAlign: 'center', fontSize: 14, fontWeight: 800, color: '#fff', background: camCol ? RED : G, borderRadius: 8, padding: '6px 0' }}>{h}</div>
          ))}
        </div>
        {ROWS.map((r) => (
          <div key={r.cap} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 9, alignItems: 'center', marginBottom: 7 }}>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--h-ink)' }}>{r.cap}</div>
            <Cell lv={r.cam[0]} text={r.cam[1]} />
            <Cell lv={r.radar[0]} text={r.radar[1]} />
            <Cell lv={r.lidar[0]} text={r.lidar[1]} />
          </div>
        ))}
      </div>

      <p style={{ fontSize: 12, color: 'var(--h-muted)', marginTop: 8 }}>
        <strong>บทบาทหลักของเรดาร์</strong> = ตรวจจับรถที่เข้ามาแล้ว “ปลุก” LiDAR/กล้อง เฉพาะตอนจำเป็น → ลดภาระ + ยืดอายุ LiDAR · เรดาร์มีความคลาดเคลื่อนจากมุม/ระยะ จึง <strong>ไม่ใช้วัดความสูง</strong>
      </p>
      <div style={{ marginTop: 8, background: 'var(--h-red-soft)', border: `1.5px solid ${RED}`, borderRadius: 12, padding: '12px 18px', fontSize: 14, lineHeight: 1.6 }}>
        <strong style={{ color: RED }}>ถ้าลูกค้าเลือก “กล้องอย่างเดียว”</strong> = ต้องยอมรับช่องแดง/เหลืองของคอลัมน์กล้อง (สภาพอากาศ · กลางคืน · ผิวดำ · รถเร็ว · วัดสูงคลาด) ที่ <strong>เรดาร์ + LiDAR จะครอบให้</strong> — จึงแนะนำใช้ 3 ตัวร่วมกัน
      </div>
      <div style={{ marginTop: 8, background: '#E7F0E9', border: `1.5px solid ${G}`, borderRadius: 12, padding: '11px 18px', fontSize: 13.8, lineHeight: 1.55 }}>
        <strong style={{ color: G }}>ยิ่งใช้ยิ่งแม่น</strong> — เรดาร์เห็นรถก่อน → “ปลุก” LiDAR/กล้องเฉพาะตอนจำเป็น + ป้อนข้อมูลให้ระบบเรียนรู้ต่อเนื่อง → ความแม่นยำเพิ่มขึ้นตามการใช้งาน
      </div>
    </Section>
  );
}
