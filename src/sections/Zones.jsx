import React from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const GOLD = 'var(--h-gold)';
const RED = 'var(--h-red)';
const ROAD = 'var(--h-road)';

const ZONES = [
  {
    n: 1,
    color: G,
    soft: '#E7F0E9',
    name: 'วัด & ประเมินความสูง',
    where: 'ปากทาง (ต้นน้ำ)',
    role: 'จับรถและประเมินความสูงก่อนถึงสะพาน',
    boq: [
      'กล้องประเมินความสูง 2 ต้น',
      'เรดาร์ตรวจจับยานพาหนะ',
      'เซนเซอร์สแกนระยะ (LiDAR)',
      'โคมไฟส่องสว่าง 2 ดวง',
      'ลูกระนาดยาง (บังคับความเร็ว)'
    ],
    limits: [
      'ต้องบังคับให้รถวิ่งช้า (ลูกระนาด/มุมเลี้ยว)',
      'แสงแดด/หมอกควันลดประสิทธิภาพกล้อง-สแกน',
      'เรดาร์ต้องห่างหม้อแปลง ≥ 5 เมตร',
      'บางจุดไม่มีที่ตั้งเสาใหม่ ต้องใช้เสาเดิม'
    ]
  },
  {
    n: 2,
    color: GOLD,
    soft: 'var(--h-gold-soft)',
    name: 'ป้าย LED เตือนล่วงหน้า',
    where: 'กลางทาง',
    role: 'เตือนคนขับให้ชะลอ/เลี่ยงก่อนถึงคอสะพาน',
    boq: [
      'ป้ายแสดงผล LED (ข้อความปรับได้)',
      'ตู้ควบคุม',
      'Edge AI Computer',
      'Network System',
      'MDB'
    ],
    limits: [
      'บางถนนไม่มีเสา/จุดติดป้าย',
      'รถเข้ามาแล้วไม่มีพื้นที่ให้ U Turn ออก',
      'ต้องมีระยะพอให้คนขับเบรกทัน'
    ]
  },
  {
    n: 3,
    color: RED,
    soft: 'var(--h-red-soft)',
    name: 'ช่วงกันหน้าทางเข้าสะพาน',
    where: 'คอสะพาน (ด่านสุดท้าย)',
    role: 'ด่านกายภาพ หยุดรถสูงเกินก่อนขึ้นสะพาน',
    boq: [
      'ไม้กั้นจำกัดความสูง 3.3 ม.',
      'ไฟสัญญาณเตือน (strobe) พร้อมเสียงแจ้งเตือน',
      'กล้องบันทึกเหตุการณ์ (อ่านป้ายเป็นหลักฐานตอนเกิดเหตุ)',
      'ลูกระนาดยาง (บังคับความเร็ว)',
      'ไฟส่องอินฟราเรด (IR)',
      'ตู้ควบคุมไม้กั้น'
    ],
    limits: [
      'ฐานต้องอยู่บนทางเดินด้านข้างสะพานหลังเสาตราครุฑ',
      'พื้นที่จำกัดใกล้โบราณสถาน',
      'ต้องมี fail-safe เมื่อรถชนไม้กั้น'
    ]
  }
];

// slim road strip showing the 3 zones in order toward the bridge
function ZoneStrip() {
  return (
    <svg
      viewBox="0 0 1100 70"
      style={{ width: '100%', height: 'auto', display: 'block' }}
      role="img"
      aria-label="ลำดับ 3 โซนบนถนนเข้าสะพาน"
    >
      <rect x="0" y="30" width="1000" height="18" fill={ROAD} />
      {[
        [150, G, '① วัดความสูง'],
        [500, GOLD, '② ป้าย LED'],
        [850, RED, '③ ไม้กั้น/คอสะพาน']
      ].map(([x, c, t]) => (
        <g key={t}>
          <circle cx={x} cy="39" r="9" fill={c} />
          <text
            x={x}
            y="20"
            fontSize="14"
            fill={c}
            textAnchor="middle"
            fontWeight="700"
          >
            {t}
          </text>
        </g>
      ))}
      <text x="150" y="63" fontSize="12" fill="#555" textAnchor="middle">
        ปากทาง
      </text>
      <text x="500" y="63" fontSize="12" fill="#555" textAnchor="middle">
        กลางทาง
      </text>
      <text x="850" y="63" fontSize="12" fill="#555" textAnchor="middle">
        คอสะพาน
      </text>
      <polygon points="1000,30 1050,39 1000,48" fill="#9A927B" />
      <text x="1058" y="43" fontSize="13" fill="#7A745F">
        สะพาน
      </text>
    </svg>
  );
}

export default function Zones() {
  return (
    <Section id="zones" tone="soft">
      <span
        className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1"
        style={{ background: 'rgba(31,92,61,0.10)', color: G }}
      >
        โครงสร้างต่อถนน
      </span>
      <h2
        className="font-bold tracking-tight mt-3"
        style={{ fontSize: 34, lineHeight: 1.15, color: G }}
      >
        แต่ละถนนแบ่งเป็น 3 โซน
      </h2>
      <p className="mt-2" style={{ fontSize: 16, color: 'var(--h-muted)' }}>
        ทุกเส้นทางเข้าสะพานทำงานเป็นลำดับ 3 โซน — วัดความสูง → เตือนด้วยป้าย →
        กันที่คอสะพาน · แต่ละโซนมีอุปกรณ์และข้อจำกัดต่างกัน
      </p>

      <div style={{ marginTop: 14 }}>
        <ZoneStrip />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 18,
          marginTop: 16
        }}
      >
        {ZONES.map((z) => (
          <div
            key={z.n}
            style={{
              background: '#fff',
              border: '1px solid var(--h-line)',
              borderTop: `5px solid ${z.color}`,
              borderRadius: 14,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* header */}
            <div style={{ background: z.soft, padding: '12px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: '50%',
                    background: z.color,
                    color: '#fff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: 14,
                    flexShrink: 0
                  }}
                >
                  {z.n}
                </span>
                <span
                  style={{
                    fontSize: 16.5,
                    fontWeight: 800,
                    color: z.color,
                    lineHeight: 1.2
                  }}
                >
                  {z.name}
                </span>
              </div>
              <div
                style={{
                  fontSize: 12.5,
                  color: 'var(--h-muted)',
                  marginTop: 5
                }}
              >
                {z.where} · {z.role}
              </div>
            </div>
            {/* body */}
            <div
              style={{
                padding: '12px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                flex: 1
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 12.5,
                    fontWeight: 700,
                    color: z.color,
                    marginBottom: 4,
                    letterSpacing: 0.4
                  }}
                >
                  อุปกรณ์ในโซน
                </div>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: 16,
                    fontSize: 13.5,
                    lineHeight: 1.5
                  }}
                >
                  {z.boq.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div
                style={{ borderTop: '1px dashed var(--h-line)', paddingTop: 8 }}
              >
                <div
                  style={{
                    fontSize: 12.5,
                    fontWeight: 700,
                    color: '#8A5A12',
                    marginBottom: 4,
                    letterSpacing: 0.4
                  }}
                >
                  ข้อจำกัด
                </div>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: 16,
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: 'var(--h-ink)'
                  }}
                >
                  {z.limits.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3" style={{ fontSize: 12.5, color: 'var(--h-muted)' }}>
        รายการอุปกรณ์เป็นชุดมาตรฐานต่อโซน · ปรับตามข้อจำกัดจริงของแต่ละถนน
        (R1/R2/R3) · ยืนยันตำแหน่งด้วยการวัดหน้างาน
      </p>
    </Section>
  );
}
