import React, { useState } from 'react';
import { Section, Card, Pill, Note } from '../components/ui.jsx';
import { OverviewMap } from '../components/diagrams.jsx';

// Aerial map illustration; falls back to the schematic SVG if the file is absent.
function OverviewVisual() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div style={{ height: 486, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <OverviewMap />
      </div>
    );
  }
  return (
    <img
      src="./images/lampang/overview_map.png"
      alt="ผังมุมสูงบริเวณสะพานรัษฎาภิเศก · R1 ฝั่งใต้ · R2 ฝั่งเหนือ · R3 ตลาดเก่า"
      onError={() => setFailed(true)}
      style={{ width: '100%', height: 486, objectFit: 'cover', borderRadius: 12, border: '1px solid var(--h-line)' }}
    />
  );
}

const G = 'var(--h-green)';

export default function Overview() {
  return (
    <Section id="overview" tone="cream">
      {/* compact header */}
      <span
        className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1"
        style={{ background: 'rgba(31,92,61,0.10)', color: G }}
      >
        ภาพรวมระบบ
      </span>
      <h2 className="font-bold tracking-tight mt-3" style={{ fontSize: 34, lineHeight: 1.15, color: G }}>
        3 เส้นทางเข้าสะพาน (ฝั่งใต้ 2 · ฝั่งเหนือ 1)
      </h2>
      <p className="mt-2" style={{ fontSize: 16, color: 'var(--h-muted)', maxWidth: '95%' }}>
        R1 + R2 คือถนนรัษฎาเส้นเดียวกันที่ข้ามสะพาน (เรียงแนวตั้ง) · R3 ตลาดเก่าเป็นแยกซ้ายที่คอสะพานใต้ ·
        ราชบุตรและเจริญประเทศมีป้ายห้ามเลี้ยวขึ้นสะพานอยู่แล้ว จึงตัดออก
      </p>

      {/* body: map (left) + table & cards (right) */}
      <div style={{ display: 'grid', gridTemplateColumns: '452px 1fr', gap: 34, marginTop: 18, alignItems: 'start' }}>
        <OverviewVisual />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* roads table */}
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14.5 }}>
            <thead>
              <tr>
                {['เส้นทาง', 'ลักษณะ', 'ระยะ'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: '8px 10px', fontWeight: 600, color: '#fff', background: G }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['R1 รัษฎาใต้', 'ตรง · ไม่มีซอย', '~126 ม.'],
                ['R2 รัษฎาเหนือ', 'ตรง · มาจากไฟแดง · ไม่มีทางหนี', '~98 ม.'],
                ['R3 ตลาดเก่า', 'ถนนคนเดินสุดสัปดาห์ · แคบ · ไม่มีเสาไฟ', '~93 ม.'],
              ].map((row, i) => (
                <tr key={row[0]} style={{ background: i % 2 ? '#FBF8EF' : '#fff' }}>
                  <td style={{ padding: '8px 10px', fontWeight: 600, border: '1px solid var(--h-line)' }}>{row[0]}</td>
                  <td style={{ padding: '8px 10px', border: '1px solid var(--h-line)' }}>{row[1]}</td>
                  <td style={{ padding: '8px 10px', border: '1px solid var(--h-line)' }} className="latin">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* cut-out roads */}
          <Card accent="red" style={{ padding: '14px 18px' }}>
            <div className="font-semibold" style={{ marginBottom: 4 }}>2 เส้นที่ “ตัดออก” แล้ว</div>
            <p style={{ fontSize: 14 }}>
              <Pill variant="out">ตัดออก</Pill> <strong>ราชบุตร</strong> (ฝั่งใต้) · <strong>เจริญประเทศ</strong> (ฝั่งเหนือ) — มีป้ายห้ามเลี้ยวขึ้นสะพานอยู่แล้ว → ไม่ต้องติดตั้งอุปกรณ์
            </p>
          </Card>

          {/* two levels */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Card accent="green" style={{ padding: '14px 18px' }}>
              <Pill variant="eco">ประหยัด</Pill>
              <div className="font-semibold" style={{ marginTop: 6, fontSize: 14.5 }}>กล้องประเมินความสูง</div>
              <Note className="mt-1" style={{ fontSize: 13 }}>ทำงานดีเมื่อรถช้า · คุ้มค่างบประมาณ</Note>
            </Card>
            <Card accent="gold" style={{ padding: '14px 18px' }}>
              <Pill variant="full">เต็มระบบ</Pill>
              <div className="font-semibold" style={{ marginTop: 6, fontSize: 14.5 }}>เรดาร์ + สแกน + กล้องบันทึกเหตุการณ์</div>
              <Note className="mt-1" style={{ fontSize: 13 }}>อุปกรณ์มาตรฐานสากล · ความแม่นยำสูง · รองรับรถเร็ว/สายไฟหนา</Note>
            </Card>
          </div>
          <Note style={{ fontSize: 12.5 }}>ทั้ง 2 ระดับใช้ตำแหน่งติดตั้งชุดเดียวกัน ต่างที่ตัวเซนเซอร์ · ระยะเป็นค่าประมาณ ยืนยันด้วยการวัดหน้างาน</Note>
        </div>
      </div>
    </Section>
  );
}
