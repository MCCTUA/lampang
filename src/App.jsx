import React from 'react';
import Deck from './components/Deck.jsx';
import Hero from './sections/Hero.jsx';
import Overview from './sections/Overview.jsx';
import Zones from './sections/Zones.jsx';
import SpeedDistance from './sections/SpeedDistance.jsx';
import Frames from './sections/Frames.jsx';
import { WhySensorsMain, WhySensorsFusion } from './sections/WhySensors.jsx';
import LedSign from './sections/LedSign.jsx';
import Barrier from './sections/Barrier.jsx';
import Roads from './sections/Roads.jsx';
import Cabinet from './sections/Cabinet.jsx';
import Timeline from './sections/Timeline.jsx';
import Survey from './sections/Survey.jsx';
import EngineeringFAQ from './sections/EngineeringFAQ.jsx';
import LidarAppendix from './sections/LidarAppendix.jsx';
import QA from './sections/QA.jsx';

// Fixed-slide deck (1280×720). Each entry is one slide; long sections are
// auto-scaled to fit for now and will be split into multiple slides next.
const slides = [
  { id: 'hero', label: 'ปก · สะพานรัษฎาภิเศก 108 ปี', node: <Hero /> },
  { id: 'overview', label: 'ภาพรวมระบบ · 3 เส้นทาง', node: <Overview /> },
  { id: 'zones', label: '3 โซนต่อถนน (อุปกรณ์+ข้อจำกัด)', node: <Zones /> },
  { id: 'speed', label: 'ความเร็ว × ระยะทาง ต่อโซน', node: <SpeedDistance /> },
  { id: 'frames', label: 'จำนวนเฟรม/สแกน vs ความเร็ว', node: <Frames /> },
  { id: 'why1', label: 'ทำไมใช้ 3 เซนเซอร์ · บทบาท+ข้อดี/ข้อจำกัด', node: <WhySensorsMain /> },
  { id: 'why2', label: 'ทำไมใช้ 3 เซนเซอร์ · เสริมกัน+เคสยาก', node: <WhySensorsFusion /> },
  { id: 'led', label: 'ป้ายจอ LED (ข้อดี+ระยะ+BOQ)', node: <LedSign /> },
  { id: 'barrier', label: 'ไม้กั้น 3.3 ม.', node: <Barrier /> },
  { id: 'roads', label: '3 เส้นทาง (R1/R2/R3)', node: <Roads /> },
  { id: 'cabinet', label: 'ตู้ควบคุม', node: <Cabinet /> },
  { id: 'timeline', label: 'Timeline จัดหา–ติดตั้ง–จูน', node: <Timeline /> },
  { id: 'survey', label: 'วัดหน้างาน', node: <Survey /> },
  { id: 'faq', label: 'FAQ วิศวกรรม', node: <EngineeringFAQ /> },
  { id: 'lidar', label: 'ภาคผนวก LiDAR', node: <LidarAppendix /> },
  { id: 'qa', label: 'คำถาม & ขอคำแนะนำ', node: <QA /> },
];

export default function App() {
  return <Deck slides={slides} />;
}
