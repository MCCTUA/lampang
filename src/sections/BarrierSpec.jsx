import React from 'react';
import { Section } from '../components/ui.jsx';

const G = 'var(--h-green)';
const GOLD = 'var(--h-gold)';
const RED = 'var(--h-red)';

const BOQ = [
  'ไม้กั้นจำกัดความสูง 3.3 ม.',
  'ไฟสัญญาณเตือน (strobe)',
  'กล้องบันทึกเหตุการณ์',
  'ไฟส่องอินฟราเรด (IR)',
  'ตู้ควบคุม + สมองกล (edge)',
];

const SPEC = [
  ['ไม้กั้นจำกัดความสูง', 'ขึ้น–ลง ~2–3 วินาที · fail-safe (พับหนีทางโล่ง · ข้อต่อเปลี่ยนได้)'],
  ['กล้องบันทึกเหตุการณ์', 'ชัตเตอร์เร็ว ~1/1000 วินาที · ~30 เฟรม/วิ · ความละเอียดสูง (หยุดภาพรถ/ป้ายไม่เบลอ)'],
  ['ไฟส่องอินฟราเรด (IR)', 'ส่องกลางคืน ~30–50 ม. · แสงที่ตามองไม่เห็น (ไม่รบกวนคนขับ)'],
  ['ไฟสัญญาณเตือน (strobe)', 'ไฟวับความถี่สูง เห็นแต่ไกล · กินไฟต่ำ ทนทาน'],
];

export default function BarrierSpec() {
  return (
    <Section id="barrier-spec" tone="soft">
      <span className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1" style={{ background: 'rgba(31,92,61,0.10)', color: G }}>
        อุปกรณ์ · ช่วงกันหน้าสะพาน
      </span>
      <h2 className="font-bold tracking-tight mt-3" style={{ fontSize: 30, lineHeight: 1.15, color: G }}>
        ไม้กั้น + ชุดคอสะพาน — BOQ & สเปก
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 20, marginTop: 14, alignItems: 'start' }}>
        {/* BOQ */}
        <div style={{ background: '#fff', border: '1px solid var(--h-line)', borderTop: `5px solid ${RED}`, borderRadius: 14, padding: '14px 18px' }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: RED, marginBottom: 8 }}>BOQ ชุดคอสะพาน</div>
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, lineHeight: 1.7 }}>
            {BOQ.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>

        {/* Spec */}
        <div>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: G, marginBottom: 6 }}>สเปกสำคัญ</div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
            <tbody>
              {SPEC.map(([k, v], i) => (
                <tr key={k} style={{ background: i % 2 ? '#FBF8EF' : '#fff' }}>
                  <td style={{ padding: '9px 11px', border: '1px solid var(--h-line)', fontWeight: 700, color: G, width: '34%', verticalAlign: 'top' }}>{k}</td>
                  <td style={{ padding: '9px 11px', border: '1px solid var(--h-line)' }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* acceleration + speed bump reason */}
      <div style={{ marginTop: 16, background: 'var(--h-gold-soft)', border: `1px solid ${GOLD}`, borderRadius: 14, padding: '14px 20px' }}>
        <div style={{ fontSize: 15.5, fontWeight: 800, color: '#8A5A12', marginBottom: 6 }}>ทำไมต้องมีลูกระนาดยางในช่วงนี้</div>
        <div style={{ fontSize: 14, lineHeight: 1.6 }}>
          จากจุดวัดความสูงถึงคอสะพาน (~55 ม.) หากรถ <strong>เร่งความเร็ว</strong> จาก ~20 กม./ชม. (อัตราเร่งทั่วไป ~2.5 ม./วิ²)
          จะทำความเร็วได้ถึง <strong>~60 กม./ชม. ก่อนถึงไม้กั้น</strong> — เร็วเกินสำหรับกล้อง และเสี่ยงเบรก/ไม้กั้นไม่ทัน
          <br />→ จึงวาง <strong>ลูกระนาดยาง (rubber speed bump)</strong> เพื่อคุมความเร็วตลอดช่วงให้ ≤ 30 กม./ชม. (กล้องวัดแม่น · เบรกทัน · ไม้กั้นพับลงทัน)
        </div>
        <div style={{ fontSize: 12, color: 'var(--h-muted)', marginTop: 6 }}>ตัวเลขเป็นค่าประมาณการ (ระยะ/อัตราเร่ง) ยืนยันด้วยการวัดหน้างานจริง</div>
      </div>
    </Section>
  );
}
