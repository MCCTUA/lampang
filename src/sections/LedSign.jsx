import React, { useState } from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const GOLD = 'var(--h-gold)';
const ROAD = 'var(--h-road)';

function Photo({ file, h }) {
  const [failed, setFailed] = useState(false);
  const box = { width: '100%', height: h, borderRadius: 12 };
  if (!failed) return <img src={`./images/lampang/${file}`} alt="" onError={() => setFailed(true)} style={{ ...box, objectFit: 'cover', border: '1px solid var(--h-line)', display: 'block' }} />;
  return <div style={{ ...box, border: '2px dashed var(--h-gold)', background: 'var(--h-gold-soft)', color: '#7A5A1E', fontSize: 12.5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>วางรูป: {file}</div>;
}

function DistanceStrip() {
  return (
    <svg viewBox="0 0 620 120" style={{ width: '100%', height: 'auto', display: 'block' }} role="img" aria-label="ระยะติดตั้งป้าย LED">
      <rect x="0" y="66" width="560" height="14" fill={ROAD} />
      <circle cx="60" cy="73" r="7" fill={G} />
      <text x="60" y="54" fontSize="12" fill={G} textAnchor="middle" fontWeight="700">จุดวัดสูง</text>
      <rect x="252" y="40" width="56" height="26" rx="3" fill="#143F2A" />
      <text x="280" y="58" fontSize="11" fill="#E7C46A" textAnchor="middle" fontFamily="monospace">3.3m</text>
      <text x="280" y="98" fontSize="12" fill={GOLD} textAnchor="middle" fontWeight="700">ป้าย LED</text>
      <rect x="470" y="62" width="44" height="18" rx="4" fill="#7C93A6" />
      <text x="492" y="75" fontSize="10" fill="#fff" textAnchor="middle">คนขับ</text>
      <text x="540" y="75" fontSize="11.5" fill="#7A745F">→ คอสะพาน</text>
      <line x1="60" y1="108" x2="280" y2="108" stroke="#555" strokeWidth="1" />
      <text x="170" y="105" fontSize="10.5" fill="#555" textAnchor="middle">ระยะให้ประมวลผลเสร็จ</text>
      <line x1="280" y1="108" x2="492" y2="108" stroke="#555" strokeWidth="1" />
      <text x="386" y="105" fontSize="10.5" fill={GOLD} textAnchor="middle">อ่านชัด ~30–50 ม.</text>
    </svg>
  );
}

const BOQ = [
  ['ป้ายแสดงผล LED', 'จอ full-color กลางแจ้ง · ปรับความสว่างอัตโนมัติ'],
  ['ตู้ควบคุม', 'ชุดควบคุมป้าย + สั่งการอุปกรณ์ในโซน'],
  ['Edge AI Computer', 'ประมวลผล AI เรียลไทม์ที่หน้างาน (edge)'],
  ['Network System', 'อุปกรณ์เครือข่าย (Switch/Router) + เชื่อมต่อระหว่างจุด'],
  ['MDB', 'ตู้จ่ายไฟหลัก + เบรกเกอร์/กันไฟรั่ว'],
];

export default function LedSign() {
  return (
    <Section id="led" tone="cream">
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>
        อุปกรณ์ · ป้ายจอ LED
      </span>
      <h2 className="font-bold tracking-tight mt-3" style={{ fontSize: 30, lineHeight: 1.15, color: G }}>
        ป้ายจอ LED — เตือนล่วงหน้า อ่านง่ายทุกเพศทุกวัย
      </h2>

      {/* top half: image (left) + cards (right) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 20, marginTop: 14, alignItems: 'stretch' }}>
        <Photo file="led_sign.png" h={318} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ background: '#fff', border: '1px solid var(--h-line)', borderTop: `5px solid ${G}`, borderRadius: 14, padding: '12px 16px' }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: G, marginBottom: 6 }}>ข้อดี</div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13.5, lineHeight: 1.5 }}>
              <li>ปรับข้อความเรียลไทม์ (เช่น “รถสูงเกิน 3.3 ม. ห้ามเข้า”)</li>
              <li>สว่างเห็นชัดกลางวัน–กลางคืน (ปรับความสว่างอัตโนมัติ)</li>
              <li>กินไฟต่ำ · ทนแดดฝน · เตือนล่วงหน้าลดการชนสะพาน</li>
            </ul>
          </div>
          <div style={{ background: '#fff', border: '1px solid var(--h-line)', borderTop: `5px solid ${GOLD}`, borderRadius: 14, padding: '12px 16px' }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: '#8A5A12', marginBottom: 4 }}>ระยะติดตั้ง (ห่างจากจุดวัดความสูง)</div>
            <DistanceStrip />
            <ul style={{ margin: '6px 0 0', paddingLeft: 18, fontSize: 12.8, lineHeight: 1.45 }}>
              <li>อ่านชัด <strong>~30–50 ม.</strong> · ระยะอ่าน ≈ ความสูงตัวอักษร × ~150</li>
              <li><strong>ทุกวัย</strong> (รวมผู้สูงอายุ): ตัวอักษรใหญ่ + คอนทราสต์สูง + สัญลักษณ์ชัด</li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOQ */}
      <div style={{ marginTop: 14 }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: G, marginBottom: 8 }}>BOQ ชุดป้าย LED</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
          {BOQ.map(([t, d]) => (
            <div key={t} style={{ background: 'var(--h-cream-soft)', border: '1px solid var(--h-line)', borderRadius: 12, padding: '11px 16px' }}>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--h-ink)' }}>{t}</div>
              <div style={{ fontSize: 12.5, color: 'var(--h-muted)', marginTop: 3, lineHeight: 1.45 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
