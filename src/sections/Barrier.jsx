import React from 'react';
import { Section } from '../components/ui.jsx';
import { BarrierDiagram } from '../components/diagrams.jsx';

const G = 'var(--h-green)';

export default function Barrier() {
  return (
    <Section id="barrier" tone="cream">
      <span
        className="inline-block text-[13px] font-bold rounded-full px-3.5 py-1"
        style={{ background: 'rgba(31,92,61,0.10)', color: G }}
      >
        หัวใจของระบบ
      </span>
      <h2
        className="font-bold tracking-tight mt-3"
        style={{ fontSize: 31, lineHeight: 1.15, color: G }}
      >
        การจำกัดความสูง = “ประตูจำกัดความสูง 3.3 เมตร”
      </h2>
      <p className="mt-2" style={{ fontSize: 15, color: 'var(--h-muted)' }}>
        ปกติยกขึ้นให้รถทุกคันผ่าน · พับลงกั้นที่ 3.3 ม. เฉพาะเมื่อพบรถสูงเกิน
        พร้อมไฟวับวาบและเสียงเตือน
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 22,
          marginTop: 14,
          alignItems: 'start'
        }}
      >
        <BarrierDiagram />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div
            style={{
              background: '#fff',
              border: '1px solid var(--h-line)',
              borderLeft: `5px solid ${G}`,
              borderRadius: 12,
              padding: '12px 16px'
            }}
          >
            <div
              style={{
                fontSize: 14.5,
                fontWeight: 800,
                color: G,
                marginBottom: 5
              }}
            >
              การทำงาน
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 17,
                fontSize: 13.5,
                lineHeight: 1.5
              }}
            >
              <li>
                ปกติ <strong>ยกขึ้น</strong> — รถทุกคันวิ่งปกติ
              </li>
              <li>
                พบรถสูงเกิน → <strong>พับลงกั้นที่ 3.3 ม.</strong> + ไฟวับวาบ +
                เสียงเตือน
              </li>
              <li>
                รถต่ำกว่า 3.3 ม. <strong>ลอดใต้ได้ ไม่กระทบ</strong>
              </li>
            </ul>
          </div>
          <div
            style={{
              background: '#fff',
              border: '1px solid var(--h-line)',
              borderLeft: `5px solid var(--h-gold)`,
              borderRadius: 12,
              padding: '12px 16px'
            }}
          >
            <div
              style={{
                fontSize: 14.5,
                fontWeight: 800,
                color: '#8A5A12',
                marginBottom: 5
              }}
            >
              กันชนราวสะพาน (โจทย์ที่แก้แล้ว)
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 17,
                fontSize: 13.5,
                lineHeight: 1.5
              }}
            >
              <li>
                ถ้ารถชน แขน <strong>พับเก็บ</strong> (ด้านโล่ง)
                ไม่เหวี่ยงเข้าราวสะพาน
              </li>
              <li>
                ชนแรง → ข้อต่อ <strong>หลุดแบบเปลี่ยนได้</strong> + สลิงกันปลิว
              </li>
              <li>
                ฐานอยู่บน <strong>ขอบราวทางเดิม</strong> ไม่แตะสะพาน/เสาหิน
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* sequence 2 points */}
      <div
        style={{
          marginTop: 14,
          background: 'var(--h-cream-soft)',
          border: '1px solid var(--h-line)',
          borderRadius: 12,
          padding: '12px 18px'
        }}
      >
        <div
          style={{ fontSize: 14, fontWeight: 800, color: G, marginBottom: 6 }}
        >
          ลำดับการทำงาน (2 จุด)
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
            fontSize: 13.3,
            lineHeight: 1.5
          }}
        >
          <div>
            <strong style={{ color: G }}>① ปากทาง (ต้นทาง):</strong>{' '}
            ประเมินความสูง (กล้อง/เรดาร์/สแกน) + ป้ายเตือนล่วงหน้า
          </div>
          <div>
            <strong style={{ color: G }}>② คอสะพาน:</strong>{' '}
            กล้องบันทึกภาพเหตุการณ์ + ไม้กั้นพับลง + ไฟวับวาบ + เสียงเตือน
          </div>
        </div>
        <p style={{ fontSize: 12, color: 'var(--h-muted)', marginTop: 8 }}>
          กล้องอ่านป้ายทะเบียนเป็นหลักฐานเฉพาะตอนเกิดเหตุ
          ไม่ใช่การติดตามรถประชาชนทั่วไป · ⏳ ต้องวัดหน้างาน: ช่องระดับ 3.3 ม.
          (ทางเดิน → ราวสะพาน) ทั้ง 2 คอ
        </p>
      </div>
    </Section>
  );
}
