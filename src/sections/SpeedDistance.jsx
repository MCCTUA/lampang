import React from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const GOLD = 'var(--h-gold)';
const RED = 'var(--h-red)';

const ZONECARDS = [
  {
    color: G, soft: '#E7F0E9', n: 1, name: 'วัด/ประเมินความสูง',
    lines: [
      ['ระยะกรอบตรวจ', '~10 เมตร (baseline กล้องคู่)'],
      ['ไกลกว่านี้', 'error ความสูงสูงขึ้น → คุมกรอบ ~10 ม.'],
      ['เวลาประเมิน', '~0.3–0.5 วิ (เก็บหลายเฟรม เอาแม่นสุด)'],
      ['หมายเหตุ', 'รถยิ่งช้า ยิ่งอยู่ในกรอบนาน = แม่น · LiDAR สแกนเร็วกว่า รองรับรถเร็วขึ้น'],
    ],
  },
  {
    color: GOLD, soft: 'var(--h-gold-soft)', n: 2, name: 'ระยะเห็นป้าย LED',
    lines: [
      ['วางห่างจุดตรวจ', 'พอให้ระบบประมวลผลเสร็จก่อนรถถึงป้าย'],
      ['ระยะเห็นชัด', '~30–50 เมตร (ทุกเพศทุกวัย)'],
      ['เงื่อนไข', 'ตัวอักษรใหญ่พอ + ความสว่างสู้แดด'],
      ['ต้องเห็นล่วงหน้า', '≥ ระยะหยุดรถ (ตามตารางด้านล่าง)'],
    ],
  },
  {
    color: RED, soft: 'var(--h-red-soft)', n: 3, name: 'ระยะที่เหลือ → คอสะพาน',
    lines: [
      ['หลังเห็นป้าย', 'ต้องมีระยะพอเบรกก่อนไม้กั้น'],
      ['ไม้กั้นพับลง', '~2–3 วิ ต้องทันก่อนรถถึง'],
      ['เกณฑ์ปลอดภัย', 'ระยะเหลือ ≥ ระยะหยุดรถ ที่ความเร็วนั้น'],
      ['ถ้าไม่พอ', 'บังคับความเร็วด้วยลูกระนาด (ดูกล่องขวา)'],
    ],
  },
];

const SPEEDROWS = [
  ['20 กม./ชม.', '1.8 วิ', '~12 ม.', true],
  ['30 กม./ชม.', '1.2 วิ', '~21 ม.', true],
  ['50 กม./ชม.', '0.7 วิ', '~45 ม.', false],
  ['80 กม./ชม.', '0.45 วิ', '~95 ม.', false],
];

export default function SpeedDistance() {
  return (
    <Section id="speed" tone="cream">
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>
        ทำไมเลือกอุปกรณ์แบบนี้
      </span>
      <h2 className="font-bold tracking-tight mt-3" style={{ fontSize: 32, lineHeight: 1.15, color: G }}>
        ความเร็ว × ระยะทาง ในแต่ละโซน
      </h2>
      <p className="mt-2" style={{ fontSize: 15.5, color: 'var(--h-muted)' }}>
        ทุกโซนถูกกำหนดระยะจาก “เวลาที่ระบบต้องใช้” เทียบกับ “ความเร็วรถ” — ตัวเลขเป็นค่าประมาณการออกแบบ ยืนยันด้วยการทดสอบหน้างาน
      </p>

      {/* 3 zone cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginTop: 16 }}>
        {ZONECARDS.map((z) => (
          <div key={z.n} style={{ background: '#fff', border: '1px solid var(--h-line)', borderTop: `5px solid ${z.color}`, borderRadius: 14, overflow: 'hidden' }}>
            <div style={{ background: z.soft, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 24, height: 24, borderRadius: '50%', background: z.color, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, flexShrink: 0 }}>{z.n}</span>
              <span style={{ fontSize: 15.5, fontWeight: 800, color: z.color }}>{z.name}</span>
            </div>
            <div style={{ padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 7 }}>
              {z.lines.map(([k, v]) => (
                <div key={k} style={{ fontSize: 13 }}>
                  <span style={{ color: 'var(--h-muted)' }}>{k}: </span>
                  <span style={{ color: 'var(--h-ink)', fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* bottom: speed table + speed-bump callout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 20, marginTop: 16, alignItems: 'start' }}>
        <div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <thead>
              <tr>
                {['ความเร็วรถ', 'อยู่ในกรอบ 10 ม.', 'ระยะหยุดรถ'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: '7px 10px', color: '#fff', background: G, fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SPEEDROWS.map(([s, t, d, ok], i) => (
                <tr key={s} style={{ background: ok ? '#EAF3E6' : '#FCEDEA' }}>
                  <td style={{ padding: '7px 10px', border: '1px solid var(--h-line)', fontWeight: 600 }}>
                    {s} {ok ? <span style={{ color: G }}>✓</span> : <span style={{ color: RED }}>⚠</span>}
                  </td>
                  <td style={{ padding: '7px 10px', border: '1px solid var(--h-line)' }}>{t}</td>
                  <td style={{ padding: '7px 10px', border: '1px solid var(--h-line)' }}>{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: 12, color: 'var(--h-muted)', marginTop: 6 }}>
            ✓ = กล้องวัดความสูงแม่น + ระบบทำงานทัน · ⚠ = เร็วเกินไปสำหรับกล้อง (ต้องพึ่ง LiDAR/เรดาร์ หรือบังคับให้ช้าลง)
          </p>

          {/* formulas behind the table */}
          <div style={{ marginTop: 10, background: '#fff', border: '1px solid var(--h-line)', borderRadius: 10, padding: '10px 14px' }}>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: G, marginBottom: 6, letterSpacing: 0.3 }}>สูตรที่ใช้คำนวณ</div>
            <div style={{ fontSize: 13, color: 'var(--h-ink)', lineHeight: 1.7 }}>
              <div>
                <strong>อยู่ในกรอบ 10 ม.</strong> = 10 ÷ v &nbsp;
                <span style={{ color: 'var(--h-muted)' }}>โดย v (ม./วิ) = ความเร็ว (กม./ชม.) ÷ 3.6</span>
              </div>
              <div>
                <strong>ระยะหยุดรถ</strong> = (v × t<sub>r</sub>) + (v² ÷ 2a) &nbsp;
                <span style={{ color: 'var(--h-muted)' }}>= ระยะช่วงคิด + ระยะเบรก</span>
              </div>
            </div>
            <div style={{ fontSize: 12, color: 'var(--h-muted)', marginTop: 6 }}>
              สมมติฐาน: กรอบตรวจ 10 ม. · เวลาตอบสนองคนขับ t<sub>r</sub> = 1.5 วิ · อัตราหน่วงเบรก a = 4.0 ม./วิ² (≈ μ 0.41) — ค่าออกแบบเชิงอนุรักษ์ ยืนยันด้วยการทดสอบหน้างาน
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--h-gold-soft)', border: `1px solid var(--h-gold)`, borderRadius: 14, padding: '16px 18px' }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#8A5A12', marginBottom: 6 }}>ถ้าความเร็วในโซนเกิน ~30 กม./ชม.</div>
          <div style={{ fontSize: 14.5, color: 'var(--h-ink)', lineHeight: 1.55 }}>
            → ใส่ <strong>ลูกระนาดยาง (rubber speed bump)</strong> ในพื้นที่นั้น เพื่อบังคับให้รถช้าลง
          </div>
          <ul style={{ margin: '10px 0 0', paddingLeft: 18, fontSize: 13.5, lineHeight: 1.55 }}>
            <li>กล้องประเมินความสูงได้แม่น (รถอยู่ในกรอบนานพอ)</li>
            <li>คนขับเห็นป้าย LED และเบรกทัน</li>
            <li>ไม้กั้นพับลงทันก่อนถึงคอสะพาน</li>
          </ul>
          <div style={{ fontSize: 12.5, color: 'var(--h-muted)', marginTop: 8 }}>
            เป้าหมายออกแบบ: คุมความเร็วในโซนตรวจ–ถึงคอสะพาน ≤ 30 กม./ชม.
          </div>
        </div>
      </div>
    </Section>
  );
}
