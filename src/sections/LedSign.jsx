import React from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const GOLD = 'var(--h-gold)';
const ROAD = 'var(--h-road)';

// distance flow: height-check → LED sign → driver reads → throat
function DistanceStrip() {
  return (
    <svg viewBox="0 0 620 130" style={{ width: '100%', height: 'auto', display: 'block' }} role="img" aria-label="ระยะติดตั้งป้าย LED">
      <rect x="0" y="70" width="560" height="16" fill={ROAD} />
      {/* height check */}
      <circle cx="60" cy="78" r="8" fill={G} />
      <text x="60" y="58" fontSize="12" fill={G} textAnchor="middle" fontWeight="700">จุดวัดสูง</text>
      {/* LED sign */}
      <rect x="250" y="40" width="60" height="30" rx="3" fill="#143F2A" />
      <text x="280" y="60" fontSize="11" fill="#E7C46A" textAnchor="middle" fontFamily="monospace">3.3m</text>
      <rect x="278" y="70" width="4" height="16" fill="#8A8270" />
      <text x="280" y="102" fontSize="12" fill={GOLD} textAnchor="middle" fontWeight="700">ป้าย LED</text>
      {/* driver / eye */}
      <rect x="470" y="66" width="46" height="20" rx="4" fill="#7C93A6" />
      <text x="493" y="80" fontSize="10" fill="#fff" textAnchor="middle">คนขับ</text>
      <text x="540" y="80" fontSize="12" fill="#7A745F">→ คอสะพาน</text>
      {/* dims */}
      <line x1="60" y1="115" x2="280" y2="115" stroke="#555" strokeWidth="1" />
      <text x="170" y="112" fontSize="11" fill="#555" textAnchor="middle">ระยะให้ระบบประมวลผลเสร็จ</text>
      <line x1="280" y1="115" x2="493" y2="115" stroke="#555" strokeWidth="1" />
      <text x="386" y="112" fontSize="11" fill={GOLD} textAnchor="middle">ระยะอ่านชัด ~30–50 ม.</text>
    </svg>
  );
}

const BOQ = [
  ['ป้ายจอ LED', 'จอ full-color สำหรับกลางแจ้ง · ปรับความสว่างอัตโนมัติ'],
  ['ตู้ควบคุม + AI Box', 'สมองกลประมวลผล (edge) + ชุดควบคุมป้าย'],
  ['ตู้ไฟ MDB', 'ตู้จ่ายไฟหลัก + เบรกเกอร์/กันไฟรั่ว'],
];

export default function LedSign() {
  return (
    <Section id="led" tone="cream">
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>
        อุปกรณ์ · ป้ายจอ LED
      </span>
      <h2 className="font-bold tracking-tight mt-3" style={{ fontSize: 31, lineHeight: 1.15, color: G }}>
        ป้ายจอ LED — เตือนล่วงหน้า อ่านง่ายทุกเพศทุกวัย
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, marginTop: 16, alignItems: 'start' }}>
        {/* left: advantages */}
        <div style={{ background: '#fff', border: '1px solid var(--h-line)', borderTop: `5px solid ${G}`, borderRadius: 14, padding: '14px 18px' }}>
          <div style={{ fontSize: 15.5, fontWeight: 800, color: G, marginBottom: 8 }}>ข้อดี</div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, lineHeight: 1.6 }}>
            <li>ปรับข้อความเรียลไทม์ตามเหตุการณ์ (เช่น “รถสูงเกิน 3.3 ม. ห้ามเข้า”)</li>
            <li>สว่างเห็นชัดทั้งกลางวัน–กลางคืน (ปรับความสว่างอัตโนมัติ)</li>
            <li>กินไฟต่ำ · ทนแดดฝน</li>
            <li>เตือนล่วงหน้า → ลดโอกาสรถสูงชนสะพาน</li>
          </ul>
        </div>

        {/* right: install distance */}
        <div style={{ background: '#fff', border: '1px solid var(--h-line)', borderTop: `5px solid ${GOLD}`, borderRadius: 14, padding: '14px 18px' }}>
          <div style={{ fontSize: 15.5, fontWeight: 800, color: '#8A5A12', marginBottom: 6 }}>ระยะติดตั้ง (ห่างจากจุดวัดความสูง)</div>
          <DistanceStrip />
          <ul style={{ margin: '8px 0 0', paddingLeft: 18, fontSize: 13.3, lineHeight: 1.5 }}>
            <li>วางถัดจากจุดวัดความสูงพอให้ <strong>ระบบประมวลผลเสร็จ</strong> ก่อนรถถึงป้าย</li>
            <li>ระยะเห็น–อ่านชัด <strong>~30–50 เมตร</strong> · หลักการ: ระยะอ่านได้ ≈ ความสูงตัวอักษร × ~150</li>
            <li><strong>ทุกวัย</strong> (รวมผู้สูงอายุ): ตัวอักษรใหญ่ + คอนทราสต์สูง + สัญลักษณ์ชัด</li>
          </ul>
        </div>
      </div>

      {/* BOQ */}
      <div style={{ marginTop: 16 }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: G, marginBottom: 8 }}>BOQ ชุดป้าย LED</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
          {BOQ.map(([t, d]) => (
            <div key={t} style={{ background: 'var(--h-cream-soft)', border: '1px solid var(--h-line)', borderRadius: 12, padding: '12px 16px' }}>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--h-ink)' }}>{t}</div>
              <div style={{ fontSize: 12.8, color: 'var(--h-muted)', marginTop: 3, lineHeight: 1.45 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
