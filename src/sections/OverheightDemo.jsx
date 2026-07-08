import React, { useState } from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const GOLD = 'var(--h-gold)';
const RED = 'var(--h-red)';

function Video() {
  const [failed, setFailed] = useState(false);
  const box = { width: '100%', borderRadius: 12, border: '1px solid var(--h-line)', display: 'block', background: '#111', boxShadow: '0 8px 26px rgba(20,40,30,0.14)' };
  if (failed) {
    return (
      <img src="./videos/overheight_demo_poster.jpg" alt="ระบบกล้องตรวจรถสูง ทดสอบใช้งานจริง" style={{ ...box }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
    );
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
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>
        ทดสอบใช้งานจริง · ไม่ใช่แค่แนวคิด
      </span>
      <h2 className="font-bold tracking-tight mt-2" style={{ fontSize: 29, lineHeight: 1.14, color: G }}>
        ระบบกล้องตรวจรถสูง — ทำงานจริงหน้างานแล้ว
      </h2>
      <p className="mt-1.5" style={{ fontSize: 14.5, color: 'var(--h-muted)' }}>
        คลิปจากระบบต้นแบบที่เราพัฒนาและทดสอบใช้งานจริงในกรุงเทพฯ (มิ.ย. 2569) — ตรวจจับรถ ประเมินความสูง และคัด “รถสูงเกิน” แบบเรียลไทม์
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: 20, marginTop: 14, alignItems: 'start' }}>
        <div>
          <Video />
          <p style={{ fontSize: 11.5, color: 'var(--h-muted)', marginTop: 6 }}>
            สถานที่ทดสอบ: แยกกลางเมืองกรุงเทพฯ · เวลากลางวัน รถเคลื่อนช้า · ป้ายกำกับความสูงบนรถคือผลจากระบบเรียลไทม์
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ background: '#fff', border: '1px solid var(--h-line)', borderTop: `5px solid ${G}`, borderRadius: 14, padding: '12px 16px' }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: G, marginBottom: 5 }}>เห็นอะไรในคลิป</div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, lineHeight: 1.5 }}>
              <li>จับรถทุกคันที่เข้าพื้นที่ + ประเมินความสูงทันที</li>
              <li>คัดแยก “ผ่าน” / “รถสูงเกิน” อัตโนมัติ</li>
              <li>บันทึกเหตุการณ์ + ภาพหลักฐานเป็นรายการ</li>
            </ul>
          </div>

          <div style={{ background: 'var(--h-gold-soft)', border: `2px solid ${GOLD}`, borderRadius: 14, padding: '12px 16px' }}>
            <div style={{ fontSize: 14.5, fontWeight: 800, color: '#8A5A12', marginBottom: 5 }}>ทำไมที่ลำปางต้องเสริม LiDAR + เรดาร์</div>
            <p style={{ fontSize: 13, color: 'var(--h-ink)', lineHeight: 1.5, margin: 0 }}>
              คลิปนี้เป็นสภาพ <strong>กลางวัน · รถช้า · อากาศใส</strong> ซึ่งกล้องทำได้ดี · แต่สะพานรัษฎาฯ มี <strong>กลางคืน · หมอกควัน/PM2.5 · รถเร็ว · ผิวรถดำ</strong> ที่กล้องเดี่ยวเริ่มพลาด → เสริม <strong>LiDAR + เรดาร์</strong> ให้แม่นและครบทุกสภาพ
            </p>
          </div>
        </div>
      </div>

      <p style={{ fontSize: 11.5, color: 'var(--h-muted)', marginTop: 10 }}>
        หมายเหตุ: ระบบนี้เป็น “เฝ้าระวัง–คัดกรอง–บันทึกเหตุการณ์” รถสูง (ไม่ใช่เครื่องวัดความสูงเชิงมาตรวิทยาที่สอบเทียบรับรอง) · หากเปิดไฟล์แบบ PDF/ออฟไลน์จะเห็นเป็นภาพนิ่ง — เปิดบนเว็บเพื่อดูคลิปเคลื่อนไหว
      </p>
    </Section>
  );
}
