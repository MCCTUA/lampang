import React from 'react';

/* ------------------------------------------------------------------ *
 * Top-down site diagrams — ported from the meeting deck (SVG).
 * All device labels use compliance-safe wording:
 *   · "กล้องประเมินความสูง"  (not measuring device)
 *   · "กล้องบันทึกเหตุการณ์"  (event camera, not LPR/ANPR)
 *   · "สมองกล (edge)"        (not a hardware brand)
 *   · "เรดาร์ 77GHz"         (spec, not brand)
 * ------------------------------------------------------------------ */

const G = 'var(--h-green)';
const G2 = 'var(--h-green2)';
const RED = 'var(--h-red)';
const ROAD = 'var(--h-road)';
const GOLD = 'var(--h-gold)';

/* ---- 1. OVERVIEW — 3 approach roads, vertical layout ---- */
export function OverviewMap() {
  return (
    <svg className="diagram" viewBox="0 0 640 720" role="img" aria-label="ผังรวม 3 ถนนเข้าสะพาน">
      {/* TOP 4-way: Pong Sanuk / Phra Kaow */}
      <rect x="110" y="70" width="420" height="22" fill={ROAD} />
      <circle cx="320" cy="81" r="6" fill="#2F7D54" />
      <text x="120" y="62" fontSize="12">← Pong Sanuk (ซ้าย)</text>
      <text x="405" y="62" fontSize="12">Phra Kaow (ขวา) →</text>
      <text x="352" y="86" fontSize="11" fill="#555">สี่แยกไฟแดง</text>
      {/* R2 */}
      <rect x="306" y="92" width="28" height="176" fill={ROAD} />
      <text x="345" y="175" fontSize="13" fill={G} fontWeight="700">R2 รัษฎาเหนือ</text>
      <text x="345" y="192" fontSize="12" fill={G}>ตรง ~98 ม.</text>
      <text x="288" y="186" fontSize="16" fill="#333">↓</text>
      {/* North throat */}
      <rect x="150" y="268" width="340" height="20" fill={ROAD} />
      <circle cx="320" cy="278" r="7" fill={RED} />
      <text x="332" y="264" fontSize="12" fill={RED}>คอสะพานเหนือ (ไม้กั้น)</text>
      <text x="150" y="307" fontSize="10.5" fill={RED}>← เจริญประเทศ (ตัดออก)</text>
      <text x="415" y="307" fontSize="10.5" fill="#555">Pahmai →</text>
      {/* river + bridge */}
      <rect x="0" y="330" width="640" height="42" fill="#BCD3D6" />
      <text x="10" y="356" fontSize="12" fill="#4A6A6D">แม่น้ำวัง</text>
      <rect x="293" y="288" width="54" height="126" fill="#EFE9D8" stroke="#B9B19A" />
      <path d="M293 302 Q320 278 347 302" fill="none" stroke="#9A927B" strokeWidth="3" />
      <path d="M293 400 Q320 424 347 400" fill="none" stroke="#9A927B" strokeWidth="3" />
      <text x="358" y="352" fontSize="12" fill="#7A745F">สะพาน ๒๔๖๐</text>
      {/* South throat */}
      <circle cx="320" cy="420" r="7" fill={RED} />
      <text x="335" y="415" fontSize="12" fill={RED}>คอสะพานใต้ (ไม้กั้น)</text>
      {/* R3 Talad Gao left */}
      <line x1="316" y1="428" x2="150" y2="505" stroke={ROAD} strokeWidth="16" />
      <text x="40" y="524" fontSize="12.5" fill={G} fontWeight="700">R3 ตลาดเก่า ~93 ม. (ซ้าย)</text>
      {/* Rajabutr right OUT */}
      <line x1="326" y1="428" x2="495" y2="500" stroke="#E6DED0" strokeWidth="10" strokeDasharray="6 6" />
      <text x="430" y="518" fontSize="11.5" fill={RED}>ราชบุตร (ตัดออก · ขวา)</text>
      {/* R1 */}
      <rect x="306" y="430" width="28" height="215" fill={ROAD} />
      <text x="345" y="545" fontSize="13" fill={G} fontWeight="700">R1 รัษฎาใต้</text>
      <text x="345" y="562" fontSize="12" fill={G}>ตรง ~126 ม.</text>
      <text x="288" y="550" fontSize="16" fill="#333">↑</text>
      {/* bottom T: Tipchang */}
      <rect x="110" y="645" width="420" height="22" fill={ROAD} />
      <text x="320" y="690" fontSize="12" fill="#333" textAnchor="middle">สามแยก Tipchang (ตัว T)</text>
    </svg>
  );
}

/* ---- 2. BARRIER — 3.3m height-limit gate, side view ---- */
export function BarrierDiagram() {
  return (
    <svg className="diagram" viewBox="0 0 460 300" role="img" aria-label="กลไกไม้กั้นจำกัดความสูง">
      <rect x="0" y="250" width="460" height="50" fill={ROAD} />
      <rect x="40" y="70" width="16" height="180" fill="#8A8270" />
      <text x="20" y="285" fontSize="11">ทางเดินใหม่</text>
      <path d="M360 250 Q410 120 460 250" fill="none" stroke="#B9B19A" strokeWidth="8" />
      <text x="392" y="150" fontSize="11" fill="#7A745F">ราวสะพาน</text>
      <line x1="48" y1="70" x2="48" y2="150" stroke={G2} strokeWidth="8" strokeLinecap="round" />
      <text x="60" y="60" fontSize="12" fill={G}>ปกติ: ยกขึ้น (เปิด)</text>
      <line x1="48" y1="150" x2="300" y2="150" stroke={RED} strokeWidth="8" strokeLinecap="round" />
      <text x="120" y="142" fontSize="12" fill={RED}>พับลงกั้นที่ 3.3 ม. เมื่อพบรถสูง</text>
      <line x1="320" y1="150" x2="320" y2="250" stroke="#666" strokeWidth="1" />
      <text x="326" y="205" fontSize="11" fill="#555">3.3 ม.</text>
      <rect x="150" y="212" width="70" height="38" rx="6" fill="#7C93A6" />
      <text x="185" y="236" fontSize="10" fill="#fff" textAnchor="middle">รถทั่วไปลอดใต้</text>
    </svg>
  );
}

/* ---- 3. R1 — Rashada south, straight ~126m ---- */
export function R1Map() {
  return (
    <svg className="diagram" viewBox="0 0 1000 220" role="img" aria-label="ผัง R1 รัษฎาใต้">
      <rect x="60" y="95" width="880" height="30" fill={ROAD} />
      <circle cx="120" cy="110" r="6" fill={G2} />
      <text x="70" y="150" fontSize="12">สามแยก Tipchang</text>
      <rect x="150" y="55" width="12" height="40" fill="#3B6EA5" />
      <rect x="150" y="125" width="12" height="40" fill="#3B6EA5" />
      <text x="118" y="45" fontSize="11.5" fill="#2A527C">กล้องประเมินสูง 2 ต้น + เรดาร์</text>
      <rect x="185" y="118" width="26" height="8" fill={GOLD} />
      <text x="180" y="182" fontSize="11" fill={GOLD}>ลูกระนาด</text>
      <circle cx="470" cy="110" r="6" fill="#8A6D12" />
      <rect x="462" y="60" width="16" height="35" fill="#6A7F52" />
      <text x="404" y="50" fontSize="11.5" fill="#5A6A2F">ป้าย LED + ตู้/Edge AI</text>
      <text x="430" y="150" fontSize="11.5">จุด Sirimas</text>
      <circle cx="880" cy="110" r="7" fill={RED} />
      <rect x="872" y="70" width="16" height="25" fill={RED} />
      <text x="792" y="60" fontSize="11.5" fill={RED}>ไม้กั้น + กล้องเหตุการณ์ ×2 + strobe</text>
      <text x="850" y="150" fontSize="12">คอสะพานใต้</text>
      <line x1="150" y1="200" x2="880" y2="200" stroke="#555" strokeWidth="1" />
      <line x1="150" y1="192" x2="150" y2="208" stroke="#555" strokeWidth="2" />
      <line x1="470" y1="192" x2="470" y2="208" stroke="#555" strokeWidth="2" />
      <line x1="880" y1="192" x2="880" y2="208" stroke="#555" strokeWidth="2" />
      <text x="290" y="196" fontSize="11.5" textAnchor="middle">58 ม.</text>
      <text x="660" y="196" fontSize="11.5" textAnchor="middle">55 ม. → คอ · สายถึงไม้กั้น ~75 ม.</text>
      <text x="612" y="112" fontSize="12" fill="#333">→ ทิศรถขึ้นสะพาน</text>
    </svg>
  );
}

/* ---- 4. R2 — Rashada north, straight ~98m, no escape ---- */
export function R2Map() {
  return (
    <svg className="diagram" viewBox="0 0 1000 220" role="img" aria-label="ผัง R2 รัษฎาเหนือ">
      <rect x="60" y="95" width="880" height="26" fill={ROAD} />
      <circle cx="120" cy="108" r="6" fill={G2} />
      <text x="66" y="150" fontSize="12">สี่แยก Pong Sanuk (ไฟแดง)</text>
      <rect x="150" y="58" width="12" height="37" fill="#3B6EA5" />
      <rect x="150" y="121" width="12" height="37" fill="#3B6EA5" />
      <text x="110" y="45" fontSize="11" fill="#2A527C">กล้อง 2 ต้น (10 ม.) + เรดาร์ + สแกนประเมินขนาด</text>
      <text x="210" y="70" fontSize="11" fill={RED}>⚡ หม้อแปลง (เรดาร์หลบ ≥5ม.)</text>
      <circle cx="250" cy="86" r="10" fill="#5C7D3A" opacity="0.6" />
      <text x="238" y="66" fontSize="10" fill="#3F5A26">ต้นก้ามปู (บังมุม)</text>
      <circle cx="520" cy="108" r="6" fill="#8A6D12" />
      <rect x="512" y="60" width="16" height="35" fill="#6A7F52" />
      <text x="466" y="50" fontSize="11.5" fill="#5A6A2F">ป้าย LED เสริม + ตู้ควบคุม</text>
      <text x="500" y="150" fontSize="11.5">เสากลาง</text>
      <circle cx="880" cy="108" r="7" fill={RED} />
      <rect x="872" y="70" width="16" height="25" fill={RED} />
      <text x="800" y="60" fontSize="11.5" fill={RED}>ไม้กั้น + กล้องเหตุการณ์ + strobe</text>
      <text x="852" y="150" fontSize="12">คอสะพานเหนือ</text>
      <line x1="150" y1="195" x2="880" y2="195" stroke="#555" strokeWidth="1" />
      <line x1="150" y1="187" x2="150" y2="203" stroke="#555" strokeWidth="2" />
      <line x1="520" y1="187" x2="520" y2="203" stroke="#555" strokeWidth="2" />
      <line x1="880" y1="187" x2="880" y2="203" stroke="#555" strokeWidth="2" />
      <text x="335" y="191" fontSize="11.5" textAnchor="middle">~50 ม.</text>
      <text x="700" y="191" fontSize="11.5" textAnchor="middle">~50 ม.</text>
      <text x="612" y="110" fontSize="12" fill="#333">→ ทิศรถลงสะพาน</text>
    </svg>
  );
}

/* ---- 5. R3 — Talad Gao, ~93m walking street ---- */
export function R3Map() {
  return (
    <svg className="diagram" viewBox="0 0 1000 210" role="img" aria-label="ผัง R3 ตลาดเก่า">
      <rect x="60" y="90" width="880" height="24" fill={ROAD} />
      <circle cx="120" cy="102" r="6" fill={G2} />
      <rect x="150" y="55" width="12" height="35" fill="#3B6EA5" />
      <text x="70" y="46" fontSize="11.5" fill="#2A527C">1 กล้อง (เสาไฟเดิม)</text>
      <text x="66" y="145" fontSize="12">3-แยกปากทาง (มีเสาไฟ+หม้อแปลง)</text>
      <g fill="#3A3A3A">
        <rect x="360" y="70" width="6" height="44" />
        <rect x="520" y="70" width="6" height="44" />
        <rect x="680" y="70" width="6" height="44" />
      </g>
      <text x="410" y="60" fontSize="11" fill="#555">เสาโคมมรดก (ไม่ใช่เสาไฟ · ห้ามทำเลอะ)</text>
      <circle cx="880" cy="102" r="7" fill={RED} />
      <rect x="872" y="66" width="16" height="24" fill={RED} />
      <text x="800" y="58" fontSize="11.5" fill={RED}>ไม้กั้นร่วมกับ R1</text>
      <text x="852" y="145" fontSize="12">คอสะพานใต้</text>
      <line x1="150" y1="185" x2="880" y2="185" stroke="#888" strokeWidth="1" />
      <text x="480" y="181" fontSize="11">~93 ม. (ตรง · ไม่มีเสาไฟตลอดเส้น)</text>
    </svg>
  );
}

/* ---- 6. R3 junction — sensor placement plan (top-down) ---- */
export function R3JunctionMap() {
  return (
    <svg className="diagram" viewBox="0 0 420 300" role="img" aria-label="ผังวางเซนเซอร์ 3-แยก R3">
      <defs>
        <marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill={GOLD} />
        </marker>
      </defs>
      <rect x="175" y="70" width="70" height="210" fill={ROAD} />
      <path d="M175 70 L110 30 L150 30 L210 70 Z" fill={ROAD} />
      <path d="M245 70 L310 30 L270 30 L210 70 Z" fill={ROAD} />
      <text x="210" y="298" fontSize="12" fill={G} textAnchor="middle" fontWeight="700">↓ ตลาดเก่า → คอสะพาน (93 ม.)</text>
      <text x="120" y="24" fontSize="10">ขา 3-แยก</text>
      <text x="270" y="24" fontSize="10">ขา 3-แยก</text>
      <circle cx="285" cy="120" r="7" fill="#7A5A1E" />
      <text x="292" y="112" fontSize="11" fill="#7A5A1E">P0 เสาหม้อแปลง</text>
      <text x="292" y="128" fontSize="10.5" fill="#2A527C">กล้อง A (ประเมินสูง)</text>
      <circle cx="120" cy="120" r="7" fill={G2} />
      <text x="18" y="112" fontSize="11" fill={G2}>P2 เยื้อง 10 ม.</text>
      <text x="18" y="128" fontSize="10.5" fill="#2A527C">กล้อง B (ประเมินสูง)</text>
      <text x="18" y="143" fontSize="10.5" fill={GOLD}>+ เรดาร์ 77GHz</text>
      <circle cx="270" cy="180" r="7" fill="#8A6D12" />
      <text x="278" y="184" fontSize="11" fill="#8A6D12">P1 เยื้อง 6 ม.</text>
      <text x="278" y="199" fontSize="10.5" fill="#5A6A2F">เซนเซอร์สแกน (สแกนขวาง)</text>
      <line x1="128" y1="132" x2="200" y2="250" stroke={GOLD} strokeWidth="2.5" markerEnd="url(#ar)" strokeDasharray="4 3" />
      <text x="146" y="210" fontSize="10.5" fill={GOLD}>เรดาร์เล็งลงถนน</text>
      <line x1="120" y1="120" x2="285" y2="120" stroke="#3B6EA5" strokeWidth="1" strokeDasharray="3 3" />
      <text x="146" y="115" fontSize="10" fill="#2A527C">baseline ประเมินสูง ~10 ม.</text>
      <line x1="262" y1="180" x2="178" y2="180" stroke="#5A6A2F" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
}

/* ---- 7. CABINET — 2 control cabinets + edge compute ---- */
export function CabinetDiagram() {
  return (
    <svg className="diagram" viewBox="0 0 1000 300" role="img" aria-label="ผังตู้ควบคุม 2 ตู้">
      <rect x="0" y="140" width="1000" height="26" fill="#BCD3D6" />
      <text x="14" y="158" fontSize="12" fill="#4A6A6D">แม่น้ำวัง / สะพาน</text>
      <rect x="120" y="210" width="150" height="46" rx="8" fill="#E7F0E9" stroke={G} />
      <text x="195" y="232" fontSize="13" fill={G} textAnchor="middle" fontWeight="700">ตู้ใต้ (S-CAB)</text>
      <text x="195" y="249" fontSize="11.5" fill={G} textAnchor="middle">Edge AI ×2 = R1 + R3</text>
      <line x1="195" y1="210" x2="140" y2="170" stroke={G2} strokeWidth="3" />
      <text x="60" y="195" fontSize="11">← R1 (Sirimas 55–75ม.)</text>
      <line x1="230" y1="210" x2="330" y2="175" stroke={GOLD} strokeWidth="3" strokeDasharray="5 4" />
      <text x="300" y="200" fontSize="11" fill={GOLD}>R3 ตลาดเก่า (ถ้าเลือก)</text>
      <rect x="640" y="60" width="150" height="46" rx="8" fill="#F3E6D3" stroke={GOLD} />
      <text x="715" y="82" fontSize="13" fill={GOLD} textAnchor="middle" fontWeight="700">ตู้เหนือ (N-CAB)</text>
      <text x="715" y="99" fontSize="11.5" fill={GOLD} textAnchor="middle">Edge AI ×1 = R2</text>
      <line x1="715" y1="106" x2="760" y2="140" stroke={GOLD} strokeWidth="3" />
      <text x="770" y="120" fontSize="11">R2 (เสากลาง 50ม.)</text>
      <path d="M270 220 C 500 260, 500 40, 640 80" fill="none" stroke="#7C93A6" strokeWidth="2" strokeDasharray="3 5" />
      <text x="452" y="150" fontSize="11.5" fill="#5A7285">เชื่อมผ่านเครือข่าย 4G/5G → แดชบอร์ดเดียว</text>
    </svg>
  );
}
