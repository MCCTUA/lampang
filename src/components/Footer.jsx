import React from 'react';

export default function Footer() {
  return (
    <footer
      className="no-print py-12 px-6"
      style={{ background: 'var(--h-green-deep)', color: 'rgba(246,239,226,0.72)', fontFamily: "'Sarabun', system-ui, sans-serif" }}
    >
      <div className="max-w-[1040px] mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="6" fill="#1F5C3D" />
            <path d="M5 19 Q14 7 23 19" fill="none" stroke="#E7C46A" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M5 19 h18" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          <span className="text-[15px] font-semibold tracking-wide" style={{ color: '#F6EFD9' }}>
            ระบบเฝ้าระวัง–ป้องกันรถสูงชนสะพานรัษฎาภิเศก
          </span>
        </div>
        <p className="text-[12.5px] leading-relaxed max-w-[70ch]" style={{ color: 'rgba(246,239,226,0.6)' }}>
          เอกสารประกอบการหารือกับเทศบาลนครลำปาง — เพื่อขอคำแนะนำจุดติดตั้งและร่วมกำหนดทางเลือกที่เหมาะสม
          ระบบทำหน้าที่ <strong style={{ color: '#E7C46A' }}>เฝ้าระวัง · บันทึก · ส่งข้อมูล</strong>
          {' '}บนถนนสาธารณะของเทศบาลเอง ไม่ใช่การติดตามบุคคล
        </p>
        <div
          className="mt-8 pt-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
        >
          <p className="text-[11.5px]" style={{ color: 'rgba(246,239,226,0.5)' }}>
            ร่างเพื่อหารือ · จัดทำ 2026-07-05 · ระยะทั้งหมดเป็นค่าประมาณ ยืนยันด้วยการวัดหน้างาน
          </p>
          <p className="text-[11.5px]" style={{ color: 'rgba(246,239,226,0.5)' }}>
            เทคโนโลยีไทย · ทีมพัฒนาในประเทศ · พร้อมสนับสนุนหลังการขาย
          </p>
        </div>
      </div>
    </footer>
  );
}
