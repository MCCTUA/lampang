import React, { useState } from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const GOLD = 'var(--h-gold)';

function Video() {
  const [failed, setFailed] = useState(false);
  // full-width & full natural height (no crop) — as large & readable as possible
  const box = { width: '100%', aspectRatio: '960 / 352', borderRadius: 14, border: '1px solid var(--h-line)', display: 'block', background: '#111', boxShadow: '0 10px 30px rgba(20,40,30,0.16)' };
  if (failed) {
    return <img src="./videos/overheight_demo_poster.jpg" alt="ระบบกล้องตรวจรถสูง ทดสอบใช้งานจริง" style={box} />;
  }
  return (
    <video
      src="./videos/overheight_demo.mp4"
      poster="./videos/overheight_demo_poster.jpg"
      muted
      loop
      autoPlay
      playsInline
      controls
      onError={() => setFailed(true)}
      style={box}
    />
  );
}

export default function OverheightDemo() {
  return (
    <Section id="demo" tone="cream">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>
            ทดสอบใช้งานจริง · ไม่ใช่แค่แนวคิด
          </span>
          <h2 className="font-bold tracking-tight mt-2" style={{ fontSize: 28, lineHeight: 1.12, color: G }}>
            ระบบกล้องตรวจรถสูง — ทำงานจริงหน้างานแล้ว
          </h2>
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--h-muted)', textAlign: 'right', lineHeight: 1.4 }}>
          ระบบต้นแบบที่เราพัฒนา + ทดสอบใช้งานจริง<br />กรุงเทพฯ · มิ.ย. 2569 · กลางวัน รถเคลื่อนช้า
        </div>
      </div>

      {/* big full-width clip */}
      <div style={{ marginTop: 12 }}>
        <Video />
      </div>

      {/* compact explanation row below */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 16, marginTop: 12, alignItems: 'stretch' }}>
        <div style={{ background: '#fff', border: '1px solid var(--h-line)', borderTop: `4px solid ${G}`, borderRadius: 12, padding: '10px 15px' }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: G, marginBottom: 3 }}>เห็นอะไรในคลิป</div>
          <div style={{ fontSize: 12.8, color: 'var(--h-ink)', lineHeight: 1.5 }}>
            จับรถทุกคัน → ประเมินความสูงทันที → คัด “ผ่าน / รถสูงเกิน” อัตโนมัติ + บันทึกภาพหลักฐานเป็นรายการ
          </div>
        </div>
        <div style={{ background: 'var(--h-gold-soft)', border: `2px solid ${GOLD}`, borderRadius: 12, padding: '10px 15px' }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: '#8A5A12', marginBottom: 3 }}>ทำไมที่ลำปางต้องเสริม LiDAR + เรดาร์</div>
          <div style={{ fontSize: 12.8, color: 'var(--h-ink)', lineHeight: 1.5 }}>
            คลิปนี้เป็นสภาพ <strong>กลางวัน · รถช้า · อากาศใส</strong> ที่กล้องทำได้ดี · แต่สะพานรัษฎาฯ มี <strong>กลางคืน · หมอกควัน/PM2.5 · รถเร็ว · ผิวรถดำ</strong> → เสริม <strong>LiDAR + เรดาร์</strong> ให้ครบทุกสภาพ
          </div>
        </div>
      </div>

      <p style={{ fontSize: 11, color: 'var(--h-muted)', marginTop: 8 }}>
        ระบบ “เฝ้าระวัง–คัดกรอง–บันทึกเหตุการณ์” รถสูง (ไม่ใช่เครื่องวัดเชิงมาตรวิทยาที่สอบเทียบรับรอง) · เปิดบนเว็บเพื่อดูคลิปเคลื่อนไหว (PDF/ออฟไลน์จะเห็นเป็นภาพนิ่ง)
      </p>
    </Section>
  );
}
