// Hero.js
import React from 'react';
import profilePic from './profile-pic.jpg';
import ReactTypingEffect from 'react-typing-effect';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img src={profilePic} alt="Monesh Kovi" className="profile-image" />
        <h1>Monesh Kovi</h1>
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
            href="https://example.com/resume.pdf"  // Replace with your actual resume link
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
};

export default Hero;
