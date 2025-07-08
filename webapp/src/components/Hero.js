import React from 'react';
import styles from './Hero.module.css';
import profilePic from '../profile-pic.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <span className={styles.badge}>Cloud Architect · AI · Software Development</span>
          <h1>
            Turning code into <br />
            <span className={styles.accent}>scalable solutions</span>
          </h1>
          <p className={styles.subtitle}>
            Exploring the future of tech and building tomorrow's cloud & AI experiences.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/documents/resume.pdf" className={styles.resumeBtn} target="_blank" rel="noopener noreferrer">Resume</a>
            <a href="#projects" className={styles.projectsBtn}>Projects</a>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImageBg}></div>
          <img src={profilePic} alt="Monesh Kovi" className={styles.heroImage} />
        </div>
      </div>
      <div className={styles.aboutCard}>
        <p className={styles.intro}>My name is Monesh Kovi and I turn code into intelligent, scalable solutions.</p>
        <p className={styles.description}>
          As a final-year Master's student in Information Systems at Saint Louis University (GPA 3.95) and an AWS Certified Cloud Practitioner, I'm passionate about the future of cloud computing and AI. My journey includes hands-on experience automating data processes with Python and Airflow, visualizing data with OpenSearch, and building secure, efficient AWS infrastructure. I love exploring new technologies, building creative tools, and sharing what I learn. I'm currently seeking a full-time role in cloud, DevOps, or data engineering where I can keep learning, build meaningful solutions, and contribute to a team that values clear thinking and clean code.
        </p>
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/monesh-kovi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/moneshkovi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 