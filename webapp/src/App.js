import React from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './theme/theme.module.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
