import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import App from './App';
import Writing from './pages/Writing';
import DigitalArtifacts from './pages/DigitalArtifacts';
import Beliefs from './pages/Beliefs';
import Tools from './pages/Tools';

function Main() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/digital-artifacts" element={<DigitalArtifacts />} />
        <Route path="/beliefs" element={<Beliefs />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </Router>
  );
}

export default Main;