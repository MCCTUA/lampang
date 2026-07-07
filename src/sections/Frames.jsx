import React from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const RED = 'var(--h-red)';
const GOLD = 'var(--h-gold)';

// camera 30 fps · LiDAR ~50 Hz · detection window 10 m
const SPEEDS = [
  { s: '20 กม./ชม.', f: '~54', l: '~90', stars: 5 },
  { s: '30 กม./ชม.', f: '~36', l: '~60', stars: 4, target: true },
  { s: '50 กม./ชม.', f: '~22', l: '~36', stars: 2 },
  { s: '80 กม./ชม.', f: '~13', l: '~22', stars: 1 },
];

function Stars({ n }) {
  return (
    <span style={{ color: GOLD, letterSpacing: 1 }}>
      {'★'.repeat(n)}<span style={{ color: 'var(--h-line)' }}>{'★'.repeat(5 - n)}</span>
    </span>
  );
}

function MiniTable({ title, head2, render }) {
  return (
    <div>
      <div style={{ fontSize: 13.5, fontWeight: 700, color: G, marginBottom: 6 }}>{title}</div>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '7px 9px', color: '#fff', background: G, fontWeight: 600 }}>ความเร็ว</th>
            <th style={{ textAlign: 'left', padding: '7px 9px', color: '#fff', background: G, fontWeight: 600 }}>{head2}</th>
          </tr>
        </thead>
        <tbody>
          {SPEEDS.map((r) => (
            <tr key={r.s} style={{ background: r.target ? '#EAF3E6' : '#fff' }}>
              <td style={{ padding: '7px 9px', border: '1px solid var(--h-line)', fontWeight: r.target ? 700 : 500 }}>{r.s}</td>
              <td style={{ padding: '7px 9px', border: '1px solid var(--h-line)' }}>{render(r)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Frames() {
  return (
    <Section id="frames" tone="soft">
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>
        ข้อมูลต้อง “พอ” ต่อการตัดสิน
      </span>
      <h2 className="font-bold tracking-tight mt-3" style={{ fontSize: 31, lineHeight: 1.15, color: G }}>
        จำนวนเฟรม / สแกน ที่ได้ เทียบกับความเร็วรถ
      </h2>
      <p className="mt-2" style={{ fontSize: 15, color: 'var(--h-muted)' }}>
        กล้องเฉลี่ยหลายเฟรม (ยิ่งมาก error ยิ่งต่ำ) · LiDAR ได้รูปทรงจากไม่กี่สแกน · ความเร็วรถเป็นตัวจำกัดจำนวนข้อมูล — รวม 2 ค่ามาประเมินเป็นดาว
      </p>

      {/* 3 tables */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginTop: 16 }}>
        <MiniTable title="1 · ความเร็ว vs เฟรมกล้อง" head2="เฟรม (กล้อง 30fps)" render={(r) => <span className="latin">{r.f} เฟรม</span>} />
        <MiniTable title="2 · ความเร็ว vs สแกน LiDAR" head2="สแกน (~50Hz)" render={(r) => <span className="latin">{r.l} สแกน</span>} />
        <MiniTable title="3 · ประเมินรวม (เฟรม + สแกน)" head2="ความเหมาะสม" render={(r) => <><Stars n={r.stars} />{r.target ? <span style={{ fontSize: 11.5, color: G, marginLeft: 6 }}>เป้าหมาย</span> : null}</>} />
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--h-muted)', marginTop: 7 }}>
        สมมติฐาน (ค่าประมาณการ): กล้อง 30 เฟรม/วินาที · LiDAR ~50 สแกน/วินาที · กรอบตรวจ 10 เมตร · ยืนยันด้วยการทดสอบหน้างาน
      </p>

      {/* 2 conclusion cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginTop: 14 }}>
        <div style={{ background: '#E7F0E9', border: `1px solid ${G}`, borderRadius: 14, padding: '14px 18px' }}>
          <div style={{ fontSize: 15.5, fontWeight: 800, color: G, marginBottom: 4 }}>ข้อสรุป: เป้าหมายออกแบบ ≤ 30 กม./ชม.</div>
          <div style={{ fontSize: 14, lineHeight: 1.55 }}>
            ได้ <strong>~36 เฟรม + ~60 สแกน (★★★★)</strong> — พอต่อการเฉลี่ยให้ความสูงแม่น → <strong>จึงใส่ลูกระนาดยางเพื่อบังคับให้อยู่ระดับนี้</strong>
          </div>
        </div>
        <div style={{ background: 'var(--h-red-soft)', border: `1px solid ${RED}`, borderRadius: 14, padding: '14px 18px' }}>
          <div style={{ fontSize: 15.5, fontWeight: 800, color: RED, marginBottom: 4 }}>ถ้ารถเร็วเกิน</div>
          <div style={{ fontSize: 14, lineHeight: 1.55 }}>
            เฟรม/สแกนน้อยลง + ภาพเบลอ (★–★★) → กล้องเดี่ยวไม่พอ · ต้องพึ่ง <strong>LiDAR + เรดาร์</strong> หรือใส่ <strong>ลูกระนาด</strong> บังคับให้ช้าลง
          </div>
        </div>
      </div>
    </Section>
  );
}
