# เว็บนำเสนอ — สะพานรัษฎาภิเศก (lampang.webdemona.com)

Vite + React + Tailwind v4 + Framer Motion · single-page presentation
โทนมรดก (เขียว #1F5C3D + ทอง #C8781E + ครีม) · ไทยเป็นหลัก (Sarabun)
สแต็กเดียวกับเว็บ smartdata.webdemona.com

---

## 1. รันดูในเครื่อง (local dev)

```bash
cd "07_web"
npm install        # ครั้งแรกครั้งเดียว
npm run dev        # เปิด http://localhost:5173
```

## 2. Build สำหรับ deploy

```bash
npm run build      # ได้ผลลัพธ์ในโฟลเดอร์ dist/
npm run preview    # ทดสอบ build ก่อน deploy (optional)
```

`dist/` คือไฟล์ static ทั้งหมด — ยกไปวางที่โฮสต์ไหนก็ได้
(ใช้ `base: './'` + HashRouter จึงรันได้จากทุก path โดยไม่ต้องตั้ง server rewrite)

## 3. Deploy ไป lampang.webdemona.com

ตัวเว็บเป็น static site ล้วน — เลือกวิธีไหนก็ได้:

- **Cloudflare Pages / Netlify / Vercel** — ตั้ง build command = `npm run build`, output dir = `dist`
- **โฮสต์เดิม (เหมือน smartdata)** — build แล้ว upload เนื้อใน `dist/` ขึ้น subdomain `lampang.webdemona.com`
- ชี้ DNS `lampang` → โฮสต์ปลายทาง

> AI สร้างโค้ด + build ผ่านแล้ว (435 modules · ~415KB JS) — **การ deploy จริงให้ Tua เป็นคนทำ**

## 4. รูป sketch หน้างาน (ยังไม่มี — เว็บมี fallback)

วางไฟล์ที่ `public/images/lampang/` ตามชื่อ (ดู README ในโฟลเดอร์นั้น):
`R1_1_entry.png · R1_2_led.png · R1_3_throat.png · R2_1_entry.png … R3_3_throat.png`

ถ้ายังไม่มีไฟล์ เว็บจะแสดงกรอบประบอกชื่อไฟล์ไว้ (ไม่พัง) · พอวางไฟล์ถูกชื่อ รูปขึ้นเอง

---

## 5. โครงสร้าง

```
07_web/
├─ index.html
├─ vite.config.js         (react + tailwind v4 · base './')
├─ package.json
├─ public/
│  ├─ favicon.svg
│  └─ images/lampang/     ← วางรูป sketch ที่นี่
└─ src/
   ├─ main.jsx · App.jsx  (HashRouter · single page)
   ├─ index.css           (heritage palette tokens + Sarabun/Inter)
   ├─ components/
   │  ├─ Nav.jsx          (anchor scroll · glass nav)
   │  ├─ Footer.jsx
   │  ├─ ui.jsx           (Section · SectionHeader · Card · Pill · FadeUp)
   │  ├─ diagrams.jsx     (SVG top-down: overview · barrier · R1/R2/R3 · junction · cabinet)
   │  └─ SketchGallery.jsx
   └─ sections/
      Hero · Overview · Barrier · Roads(R1/R2/R3) · Cabinet · Survey · QA
```

## 6. Compliance (ผ่านแล้ว · เว็บเผยแพร่สาธารณะ)

- ✅ ไม่มียี่ห้อ — ใช้ generic: "กล้อง ITS / กล้องบันทึกเหตุการณ์", "สมองกล (edge)", "เรดาร์ 77GHz", "เซนเซอร์สแกน"
- ✅ ไม่มีราคา/ROI%
- ✅ ไม่ประกาศเป็น "อุปกรณ์ตรวจวัด" — ระบุชัด "เฝ้าระวัง · บันทึก · ส่งข้อมูล · ไม่ใช่เครื่องตรวจวัดทางการ"
- ✅ กล้องอ่านป้าย = "เก็บภาพเป็นหลักฐานเหตุการณ์เท่านั้น ไม่ใช่การติดตามประชาชน" (per CLAUDE.md §12–13)
- ✅ pain-first (เปิดด้วยความเสี่ยงต่อสะพาน 108 ปี) · ระยะทุกจุดกำกับ "ค่าประมาณ"
- ✅ ไม่มีคำ "smart city / smart light / surveillance / carbon" (DEPA naming filter)

*ร่างเพื่อหารือ · จัดทำ 2026-07-06 · ระยะทั้งหมดเป็นค่าประมาณ ยืนยันด้วยการวัดหน้างาน*
