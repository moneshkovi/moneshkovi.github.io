import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import profilePic from './profile-pic.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactTypingEffect from 'react-typing-effect';
import Certifications from './Certifications';
import Projects from './Projects';
import Contact from './Contact';
import Experience from './Experience';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo">Monesh Kovi</a>
        <ul className="nav-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li>
            <a
              href="https://www.linkedin.com/in/monesh-kovi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img src={profilePic} alt="Monesh Kovi" className="profile-image" />
        <h1>Monesh Kovi</h1>
        {/* Typing Animation */}
        <ReactTypingEffect
          text={[
            "Cloud Architect & AI Enthusiast",
            "Turning code into scalable solutions",
            "Exploring the future of tech"
          ]}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={2000}
          className="typing-animation"
        />
        <div className="hero-cta">
          <a
            href="https://github.com/moneshkovi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/monesh-kovi/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            LinkedIn
          </a>
          <a
            href="/documents/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about" data-aos="fade-up">
      <h2>About Me</h2>
      <p>
        Hi, I'm Monesh Kovi! As a final-year Master's student in Information Systems at Saint Louis University (GPA 3.95) and an AWS Certified Cloud Practitioner, I'm excited about the future of cloud computing and its potential to transform the way we build and interact with technology. My journey so far, including three enriching cloud internships, has provided me with hands-on experience in automating data processes with Python and Airflow, visualizing data through OpenSearch dashboards, and implementing secure and efficient AWS infrastructure.
      </p>
      <p>
        I'm also a firm believer in continuous learning and exploration, which is why I'm passionate about my personal project, Geniffy.ai. This platform is my playground for experimenting with the latest in AI, automation, and marketing, using LLMs and creative AI tools to empower brands with smarter content generation.
      </p>
      <p>
        I'm currently looking for a full-time role in cloud, DevOps, or data engineering where I can keep learning, build meaningful tools, and contribute to a team that values clear thinking and clean code.
      </p>
      <div className="about-badges">
        <span className="badge">AWS Certified</span>
        <span className="badge">GPT-4 Builder</span>
        <span className="badge">Pythonic Thinker</span>
      </div>
    </section>
  );
}


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,  // Animation duration in ms
      once: false,    // Whether animation should happen only once
    });
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
            <footer className="footer">
              <p>&copy; {new Date().getFullYear()} Monesh Kovi. All rights reserved.</p>
            </footer>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
