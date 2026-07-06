import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import Overview from './sections/Overview.jsx';
import Barrier from './sections/Barrier.jsx';
import Roads from './sections/Roads.jsx';
import Cabinet from './sections/Cabinet.jsx';
import Survey from './sections/Survey.jsx';
import QA from './sections/QA.jsx';

// Single-page presentation. HashRouter is used for static-hosting
// compatibility (drop-in deploy on any host, no server rewrites needed).
function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Overview />
        <Barrier />
        <Roads />
        <Cabinet />
        <Survey />
        <QA />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        {/* any unknown hash route falls back to the single page */}
        <Route path="*" element={<Page />} />
      </Routes>
    </HashRouter>
  );
}
