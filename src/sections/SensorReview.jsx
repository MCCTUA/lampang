import React from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const G2 = 'var(--h-green2)';
const GOLD = 'var(--h-gold)';
const RED = 'var(--h-red)';

// qualitative reliability under each condition (0–1 = bar length, NOT a measured %)
const COND = [
  { label: 'แสงสว่างปกติ (กลางวัน)', fusion: 1.0, cam: 0.95, word: 'เต็ม', carry: 'ทุกเซนเซอร์ทำงานเต็มที่' },
  { label: 'ฝนตก', fusion: 0.9, cam: 0.55, word: 'สูง', carry: 'เรดาร์นำ · กล้อง/สแกนลดลง' },
  { label: 'กลางคืน / มืด', fusion: 0.92, cam: 0.4, word: 'สูง', carry: 'เรดาร์ + IR + ไฟส่อง' },
  { label: 'หมอกควัน / PM2.5 (ฤดูเผา ภาคเหนือ)', fusion: 0.88, cam: 0.35, word: 'สูง', carry: 'เรดาร์มองทะลุหมอก/ฝุ่น', hl: true },
  { label: 'แดดจ้า / ย้อนแสง', fusion: 0.9, cam: 0.55, word: 'สูง', carry: 'เรดาร์/สแกน · กล้อง WDR ช่วย' },
];

function Bars() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
      {/* legend */}
      <div style={{ display: 'flex', gap: 18, fontSize: 12, color: 'var(--h-muted)', marginBottom: 2 }}>
        <span><span style={{ display: 'inline-block', width: 22, height: 8, background: G, borderRadius: 4, verticalAlign: 'middle', marginRight: 5 }} />Fusion (3 เซนเซอร์)</span>
        <span><span style={{ display: 'inline-block', width: 22, height: 8, background: '#C9C2AE', borderRadius: 4, verticalAlign: 'middle', marginRight: 5 }} />กล้องเดี่ยว</span>
      </div>
      {COND.map((c) => (
        <div key={c.label} style={{ background: c.hl ? 'var(--h-gold-soft)' : 'transparent', borderRadius: 8, padding: c.hl ? '6px 8px' : '0 8px' }}>
          <div style={{ fontSize: 12.8, fontWeight: c.hl ? 800 : 600, color: c.hl ? '#8A5A12' : 'var(--h-ink)', marginBottom: 4 }}>
            {c.label}{c.hl ? ' ★' : ''}
          </div>
          {/* fusion bar */}
          <div style={{ position: 'relative', height: 15, background: '#EDE8DA', borderRadius: 8, marginBottom: 3 }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${c.fusion * 100}%`, background: `linear-gradient(90deg, ${G2}, ${G})`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 8 }}>
              <span style={{ fontSize: 10.5, fontWeight: 800, color: '#fff' }}>{c.word}</span>
            </div>
          </div>
          {/* camera-only bar */}
          <div style={{ position: 'relative', height: 9, background: '#EDE8DA', borderRadius: 6 }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${c.cam * 100}%`, background: '#C9C2AE', borderRadius: 6 }} />
          </div>
          <div style={{ fontSize: 11, color: 'var(--h-muted)', marginTop: 2 }}>{c.carry}</div>
        </div>
      ))}
    </div>
  );
}

function BigVenn() {
  return (
    <svg viewBox="0 0 460 372" style={{ width: '100%', height: 'auto', display: 'block' }} role="img" aria-label="Venn 3 เซนเซอร์">
      <circle cx="175" cy="140" r="118" fill={G} fillOpacity="0.24" stroke={G} strokeWidth="3" />
      <circle cx="285" cy="140" r="118" fill={GOLD} fillOpacity="0.22" stroke={GOLD} strokeWidth="2" />
      <circle cx="230" cy="230" r="118" fill={RED} fillOpacity="0.20" stroke={RED} strokeWidth="3" strokeDasharray="7 5" />
      <text x="86" y="58" fontSize="16" fontWeight="800" fill={G} textAnchor="middle">เรดาร์</text>
      <text x="86" y="77" fontSize="11.5" fill="#555" textAnchor="middle">ทุกสภาพอากาศ</text>
      <text x="384" y="58" fontSize="16" fontWeight="800" fill="#8A5A12" textAnchor="middle">กล้อง</text>
      <text x="384" y="77" fontSize="11.5" fill="#555" textAnchor="middle">หลักฐาน/บริบท</text>
      <text x="230" y="352" fontSize="16" fontWeight="800" fill={RED} textAnchor="middle">LiDAR</text>
      <text x="230" y="370" fontSize="11.5" fill="#555" textAnchor="middle">รูปทรงแม่น</text>
      <text x="230" y="150" fontSize="15" fontWeight="800" fill={G} textAnchor="middle">แก้ครบ</text>
      <text x="230" y="171" fontSize="17" fontWeight="800" fill={G} textAnchor="middle">ทุกปัญหา ✓</text>
    </svg>
  );
}

export default function SensorReview() {
  return (
    <Section id="review" tone="cream">
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>
        Sensor Fusion · รีวิวความสามารถ
      </span>
      <h2 className="font-bold tracking-tight mt-2.5" style={{ fontSize: 30, lineHeight: 1.15, color: G }}>
        ประสิทธิภาพภายใต้สภาพอากาศจริง (ภาคเหนือ)
      </h2>
      <p className="mt-1.5" style={{ fontSize: 14.5, color: 'var(--h-muted)' }}>
        กล้องเดี่ยวลดประสิทธิภาพในฝน/กลางคืน/หมอกควัน — ระบบ 3 เซนเซอร์ (Fusion) ยังเชื่อถือได้ทุกสภาวะ เพราะแต่ละตัวชดเชยกัน
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 26, marginTop: 14, alignItems: 'center' }}>
        <Bars />
        <div>
          <BigVenn />
          <div style={{ fontSize: 12.5, color: 'var(--h-muted)', textAlign: 'center', marginTop: 4 }}>จุดร่วมของ 3 เซนเซอร์ = แก้ครบทุกสภาวะ</div>
        </div>
      </div>

      <p style={{ fontSize: 11.5, color: 'var(--h-muted)', marginTop: 10 }}>
        แถบเป็นระดับเชิงคุณภาพ (ประมาณการ) ไม่ใช่ค่าที่วัดจริง · ยืนยันด้วยการทดสอบหน้างาน · หมอกควัน/PM2.5 ในฤดูเผาภาคเหนือ = สภาวะที่กล้องแพ้แต่เรดาร์มองทะลุได้
      </p>
    </Section>
  );
}
