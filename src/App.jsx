import React from 'react';
import Deck from './components/Deck.jsx';
import Hero from './sections/Hero.jsx';
import Overview from './sections/Overview.jsx';
import Zones from './sections/Zones.jsx';
import SpeedDistance from './sections/SpeedDistance.jsx';
import Frames from './sections/Frames.jsx';
import { WhySensorsMain } from './sections/WhySensors.jsx';
import SensorReview from './sections/SensorReview.jsx';
import VehicleReview from './sections/VehicleReview.jsx';
import ColorReview from './sections/ColorReview.jsx';
import LedSign from './sections/LedSign.jsx';
import BarrierSpec from './sections/BarrierSpec.jsx';
import Barrier from './sections/Barrier.jsx';
import BarrierHousing from './sections/BarrierHousing.jsx';
import { RoadR1, RoadR2, RoadR3 } from './sections/RoadsSplit.jsx';
import Cabinet from './sections/Cabinet.jsx';
import Timeline from './sections/Timeline.jsx';
import { Faq1, Faq2, Faq3, Faq4 } from './sections/FaqPages.jsx';
import { Lidar1, Lidar2, Lidar3, Lidar4 } from './sections/LidarAppendix.jsx';
import { SpecSheet1, SpecSheet2, SpecSheet3 } from './sections/SpecSheet.jsx';
import ConfirmTN from './sections/ConfirmTN.jsx';
import Agenda from './sections/Agenda.jsx';
import SectionDivider from './sections/SectionDivider.jsx';
import OverheightDemo from './sections/OverheightDemo.jsx';

// Fixed-slide deck (1280×720). Each entry is one slide; long sections are
// auto-scaled to fit for now and will be split into multiple slides next.
const slides = [
  { id: 'hero', label: 'ปก · สะพานรัษฎาภิเศก 108 ปี', node: <Hero /> },
  { id: 'agenda', label: 'หัวข้อการนำเสนอ (Agenda)', node: <Agenda /> },

  // ── ส่วนที่ 1 · ภาพรวมระบบ (นำเข้าด้วย Agenda) ──
  { id: 'overview', label: 'ภาพรวมระบบ · 3 เส้นทาง', node: <Overview /> },
  { id: 'zones', label: '3 โซนต่อถนน (อุปกรณ์+ข้อจำกัด)', node: <Zones /> },
  { id: 'speed', label: 'ความเร็ว × ระยะทาง ต่อโซน', node: <SpeedDistance /> },
  { id: 'frames', label: 'จำนวนเฟรม/สแกน vs ความเร็ว', node: <Frames /> },

  { id: 'sec2', label: '— ส่วนที่ 2 · หลักการ 3 เซนเซอร์ & รีวิว', node: <SectionDivider n={2} title="หลักการ 3 เซนเซอร์ & รีวิวการตรวจจับ" items={['ทำไมต้องใช้ 3 เซนเซอร์', 'สภาพอากาศ / PM2.5', 'ประเภทรถ', 'สี / ผิว / ความมันวาว']} /> },
  { id: 'why1', label: 'ทำไมใช้ 3 เซนเซอร์ · บทบาท+ข้อดี/ข้อจำกัด', node: <WhySensorsMain /> },
  { id: 'demo', label: 'คลิปจริง · กล้องตรวจรถสูง (กรุงเทพฯ)', node: <OverheightDemo /> },
  { id: 'review', label: 'รีวิว · สภาพอากาศ (PM2.5)', node: <SensorReview /> },
  { id: 'veh', label: 'รีวิว · ประเภทรถ (เทียบ 3 เซนเซอร์)', node: <VehicleReview /> },
  { id: 'color', label: 'รีวิว · สี/ผิว/ความมันวาว vs เซนเซอร์', node: <ColorReview /> },

  { id: 'sec3', label: '— ส่วนที่ 3 · อุปกรณ์เตือน & ด่านกายภาพ', node: <SectionDivider n={3} title="อุปกรณ์เตือน & ด่านกายภาพ" items={['ป้ายจอ LED เตือนล่วงหน้า', 'ไม้กั้นจำกัดความสูง 3.3 ม.', 'เสาครอบไม้กั้นมรดก']} /> },
  { id: 'led', label: 'ป้ายจอ LED (ข้อดี+ระยะ+BOQ)', node: <LedSign /> },
  { id: 'barrier-spec', label: 'ไม้กั้น — BOQ & สเปก + ลูกระนาด', node: <BarrierSpec /> },
  { id: 'barrier', label: 'ไม้กั้น = ประตูจำกัดความสูง 3.3 ม.', node: <Barrier /> },
  { id: 'barrier-housing', label: '6 แบบ เสารับ/ครอบไม้กั้น (มรดก)', node: <BarrierHousing /> },

  { id: 'sec4', label: '— ส่วนที่ 4 · แผนติดตั้งรายพื้นที่ & กำหนดการ', node: <SectionDivider n={4} title="แผนติดตั้งรายพื้นที่ & กำหนดการ" items={['R1 · รัษฎาใต้', 'R2 · รัษฎาเหนือ', 'R3 · ตลาดเก่า', 'Timeline 120 วัน']} /> },
  { id: 'r1', label: 'R1 · รัษฎาใต้ (แผนที่+อุปกรณ์+รูป)', node: <RoadR1 /> },
  { id: 'r2', label: 'R2 · รัษฎาเหนือ (แผนที่+อุปกรณ์+รูป)', node: <RoadR2 /> },
  { id: 'r3', label: 'R3 · ตลาดเก่า (แผนที่+อุปกรณ์+รูป)', node: <RoadR3 /> },
  { id: 'timeline', label: 'Timeline (Gantt · 120 วัน)', node: <Timeline /> },

  { id: 'sec5', label: '— ส่วนที่ 5 · คำถามที่พบบ่อย (Q&A)', node: <SectionDivider n={5} title="คำถามที่พบบ่อย (Q&A)" items={['ความแม่นยำ & การตรวจจับ', 'ระบบ / ไฟฟ้า / เครือข่าย', 'สิ่งแวดล้อม · ไม้กั้น/ปลอดภัย', 'กฎหมาย · ดูแลรักษา · มรดก']} /> },
  { id: 'faq1', label: 'Q&A · ความแม่นยำ & การตรวจจับ', node: <Faq1 /> },
  { id: 'faq2', label: 'Q&A · ระบบ/ไฟฟ้า/เครือข่าย', node: <Faq2 /> },
  { id: 'faq3', label: 'Q&A · สภาพแวดล้อม · ไม้กั้น/ปลอดภัย', node: <Faq3 /> },
  { id: 'faq4', label: 'Q&A · กฎหมาย · ดูแลรักษา · มรดก', node: <Faq4 /> },

  { id: 'sec6', label: '— ภาคผนวก (Appendix)', node: <SectionDivider n={6} title="ภาคผนวก" kicker="ภาคผนวก · APPENDIX" items={['สเปกอุปกรณ์ (datasheet อ้างอิง)', 'LiDAR เชิงลึก', 'สิ่งที่ต้องยืนยันกับ ทน.']} /> },
  { id: 'spec1', label: 'สเปกอุปกรณ์ 1/3 (เซนเซอร์+Edge AI)', node: <SpecSheet1 /> },
  { id: 'spec2', label: 'สเปกอุปกรณ์ 2/3 (ไม้กั้น+ป้าย+ไฟ)', node: <SpecSheet2 /> },
  { id: 'spec3', label: 'สเปกอุปกรณ์ 3/3 (ไฟฟ้า+ลูกระนาด+โครงสร้าง)', node: <SpecSheet3 /> },
  { id: 'lidar1', label: 'LiDAR · หลักการทำงาน', node: <Lidar1 /> },
  { id: 'lidar2', label: 'LiDAR · โซน & สีผิว', node: <Lidar2 /> },
  { id: 'lidar3', label: 'LiDAR · ติดตั้ง & บำรุงรักษา', node: <Lidar3 /> },
  { id: 'lidar4', label: 'LiDAR · ข้อจำกัด', node: <Lidar4 /> },
  { id: 'confirm', label: 'สิ่งที่ต้องยืนยันกับ ทน. (ทำได้/ไม่ได้)', node: <ConfirmTN /> },

  { id: 'sec-opt', label: '— งานส่วนเพิ่ม (Optional)', node: <SectionDivider n="＋" kicker="งานส่วนเพิ่ม · OPTIONAL" title="งานส่วนเพิ่ม (Optional)" items={['เก็บข้อมูลรวมศูนย์ (4G / Fiber)', 'ต่อยอดเชื่อมระบบในอนาคต']} /> },
  { id: 'cabinet', label: 'งานส่วนเพิ่ม · เก็บข้อมูลรวม (4G/Fiber)', node: <Cabinet /> },
];

export default function App() {
  return <Deck slides={slides} />;
}
