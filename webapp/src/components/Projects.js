import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'AI-Powered Content Generation and Management Platform',
    description: 'Developed and deployed an AI-powered platform using AWS Elastic Beanstalk, integrated OpenAI’s GPT-4 API for automated content generation, and utilized Amazon S3 for secure, scalable storage, reducing manual effort by 70%.',
    tech: ['AWS', 'OpenAI', 'Elastic Beanstalk', 'S3', 'Secrets Manager']
  },
  {
    title: 'AI Agents for Medical Diagnosis',
    description: 'Designed and implemented a system of specialized AI agents (Cardiologist, Psychologist, Pulmonologist) that analyze medical reports concurrently, providing multidisciplinary diagnoses and generating professional PDF reports with comprehensive assessments and treatment recommendations.',
    tech: ['Python', 'OpenAI', 'WeasyPrint', 'Threading', 'Jinja2']
  }
];

const Projects = () => (
  <main className={styles.projectsMain}>
    <h1 className={styles.title}>Projects</h1>
    <div className={styles.projectList}>
      {projects.map((proj, i) => (
        <div className={styles.projectCard} key={i}>
          <h2 className={styles.projectTitle}>{proj.title}</h2>
          <p className={styles.projectDesc}>{proj.description}</p>
          <div className={styles.techStack}>
            {proj.tech.map((tech, j) => (
              <span className={styles.techBadge} key={j}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </main>
);

export default Projects; 