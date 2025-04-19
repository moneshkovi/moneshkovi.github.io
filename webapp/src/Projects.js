import React from 'react';

function Projects() {
  return (
    <section id="projects" className="section projects" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-row">
          <div className="project-card">
            <h3>AI Agents for Medical Diagnosis</h3>
            <p>
              A sophisticated medical diagnostic system powered by AI agents that analyzes patient symptoms 
              and medical records to provide diagnostic recommendations. The system leverages NLP and ML to interpret 
              medical data and assist healthcare professionals.
            </p>
            <div className="project-skills">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">AI Agents</span>
              <span className="skill-tag">NLP</span>
              <span className="skill-tag">Machine Learning</span>
              <span className="skill-tag">Healthcare</span>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/moneshkovi/AI-Agents-for-Medical-Diagnosis" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-btn"
              >
                GitHub
              </a>
            </div>
          </div>
          
          <div className="project-card">
            <h3>AI-Powered Content Platform</h3>
            <p>
              A comprehensive platform that leverages AWS services and GPT-4 API to automatically 
              generate high-quality content for websites, blogs, and marketing materials based on user preferences.
            </p>
            <div className="project-skills">
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">OpenAI</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">MongoDB</span>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/moneshkovi/ai-content" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-btn"
              >
                GitHub
              </a>
            </div>
          </div>
          
          <div className="project-card">
            <h3>Emotion Recognition (EmoBERTa)</h3>
            <p>
              An advanced NLP model built on the RoBERTa architecture that specializes in identifying 
              emotional content in text, fine-tuned on diverse emotional expression datasets.
            </p>
            <div className="project-skills">
              <span className="skill-tag">PyTorch</span>
              <span className="skill-tag">NLP</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Hugging Face</span>
              <span className="skill-tag">Deep Learning</span>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/moneshkovi/erc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-btn"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>
              A modern, responsive portfolio website built with React and enhanced with smooth 
              animations. Features a clean, minimalist design with dark mode aesthetic and seamless navigation.
            </p>
            <div className="project-skills">
              <span className="skill-tag">React</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">AOS</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">JavaScript</span>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/moneshkovi/portfolio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-btn"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <h3>Eternal5 Discord Bot</h3>
            <p>
              A custom Discord bot for gaming communities with music playback from YouTube and Spotify, 
              automated announcements, DM support, and server moderation through role-based commands.
            </p>
            <div className="project-skills">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">discord.py</span>
              <span className="skill-tag">Heroku</span>
              <span className="skill-tag">Spotify</span>
              <span className="skill-tag">YouTube-DL</span>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/moneshkovi/Eternal5_bot" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-btn"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
