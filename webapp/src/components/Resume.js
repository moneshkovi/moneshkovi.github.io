import React from 'react';
import styles from './Resume.module.css';
import { FaCode, FaCloud, FaDatabase, FaCogs, FaProjectDiagram } from 'react-icons/fa';

const experience = [
  {
    title: 'Cloud Architect Intern',
    company: 'Alphathena, Chicago, IL',
    periods: [
      'Jan 2025 – May 2025'
    ],
    bullets: [
      'Centralized AWS service logs and built an OpenSearch dashboard to streamline log monitoring and reduce issue triage time by 40%.',
      'Built a scalable ETL framework using Python and Apache Airflow to automate daily data imports, reducing human intervention by 90%.',
      'Designed and implemented a log archival pipeline to move PROD API and Flask logs to S3 with automated Glacier transition after 15 days, optimizing storage costs and ensuring audit readiness.',
      'Implemented cloud security architectures and coordinated with penetration testing teams to identify and address vulnerabilities.',
      'Developed & Implemented the security of cloud instances by implementing an automated monthly rotation of PEM files, enhancing instance protection and access control.',
      'Developed custom AES encryption for S3 objects, ensuring robust data security and compliance with industry standards.'
    ]
  },
  {
    title: 'Software Engineer Intern',
    company: 'Wrecked Esports, Bangalore, India',
    periods: ['Apr 2023 – Jul 2023'],
    bullets: [
      'Designed and deployed an internal reporting dashboard using advanced MySQL queries to enhance decision-making.',
      'Enhanced invoice accuracy and query responsiveness by 44% while cutting maintenance needs by 50% using AI.',
      'Developed serverless applications using AWS Lambda and API Gateway for improved cost efficiency and scalability.'
    ]
  },
  {
    title: 'Software Engineer Intern',
    company: 'Wrecked Tech Private Limited, Bangalore, India',
    periods: ['Jan 2023 – Mar 2023'],
    bullets: [
      'Automated testing processes with Bash scripts, improving system reliability and operational efficiency.',
      'Developed a feed refresh algorithm that boosted processing speed by 150% and increased content uniqueness by 80%.',
      'Performed advanced data analysis with Pandas and NumPy, enabling data-driven decision-making and identifying key metrics.'
    ]
  }
];

const education = [
  {
    school: 'Saint Louis University',
    degree: 'Master of Information Systems',
    date: 'Aug 2023 – May 2025',
    location: 'Saint Louis, MO',
    gpa: 'GPA: 3.95'
  },
  {
    school: 'Presidency University',
    degree: 'Bachelor of Information Science',
    date: 'Aug 2019 – Apr 2023',
    location: 'Bangalore, India',
    gpa: 'GPA: 3.4'
  }
];

const skills = [
  {
    icon: <FaCode className={styles.skillIcon} />, label: 'Languages', items: ['Python', 'JavaScript', 'HTML', 'CSS', 'Bash']
  },
  {
    icon: <FaCloud className={styles.skillIcon} />, label: 'Cloud & DevOps', items: ['AWS (EC2, S3, Lambda, Glue, VPC, API Gateway, CloudTrail, Quicksight)', 'Docker', 'Git', 'Linux', 'Cloudflare']
  },
  {
    icon: <FaCogs className={styles.skillIcon} />, label: 'Data Engineering & Analytics', items: ['Apache Airflow', 'ETL', 'Elastic Stack', 'Pentaho', 'Scikit-learn']
  },
  {
    icon: <FaDatabase className={styles.skillIcon} />, label: 'Databases', items: ['MySQL', 'Redis', 'InfluxDB', 'DynamoDB']
  },
  {
    icon: <FaProjectDiagram className={styles.skillIcon} />, label: 'Frameworks', items: ['ReactJS']
  }
];

const certifications = [
  {
    name: 'AWS Certified Developer',
    org: 'Amazon Web Services',
    date: 'Jul 2024',
    link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/dc7c20379cf94f2699a4d430c31ac969'
  },
  {
    name: 'AWS Certified Solution Architect',
    org: 'Amazon Web Services',
    date: 'Jul 2024',
    link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/7ec7fce4db1f4b1bab3b6f8caa3f509b'
  }
];

const publications = [
  {
    title: 'Intent-Driven Code Synthesis: Redefining Software Development with Transformers',
    venue: 'Preprint, 2025',
    link: 'https://doi.org/10.20944/preprints202504.1732.v1'
  }
];

const Resume = () => (
  <main className={styles.resumeMain}>
    <div className={styles.header}>
      <h1 className={styles.title}>Resume</h1>
      <a href="/documents/resume.pdf" className={styles.downloadBtn} download>
        Download Resume
      </a>
    </div>
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Experience</h2>
      <div className={styles.verticalCardStack}>
        {experience.map((exp, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.cardHeader}>
              <div>
                <h3>{exp.title}</h3>
                <span className={styles.cardCompany}>{exp.company}</span>
              </div>
              <div className={styles.cardPeriods}>
                {exp.periods.map((period, j) => (
                  <div key={j} className={styles.cardDate}>{period}</div>
                ))}
              </div>
            </div>
            <ul className={styles.cardList}>
              {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Education</h2>
      <div className={styles.verticalCardStack}>
        {education.map((edu, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.cardHeader}>
              <div>
                <h3>{edu.school}</h3>
                <span className={styles.cardDegree}>{edu.degree}</span>
                <span className={styles.cardLocation}>{edu.location}</span>
              </div>
              <span className={styles.cardDate}>{edu.date}</span>
            </div>
            <div className={styles.cardGPA}>{edu.gpa}</div>
          </div>
        ))}
      </div>
    </section>
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Professional Skills & Frameworks</h2>
      <div className={styles.verticalCardStack}>
        <div className={styles.card}>
          <div className={styles.skillsFlex}>
            {skills.map((group, i) => (
              <div className={styles.skillGroup} key={i}>
                <div className={styles.skillLabel}>{group.icon} {group.label}</div>
                <ul className={styles.skillList}>
                  {group.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Certifications</h2>
      <div className={styles.certificationsFlex}>
        {certifications.map((cert, i) => (
          <div className={styles.certCard} key={i}>
            <h3>{cert.name}</h3>
            <div className={styles.cardOrg}>{cert.org}</div>
            <div className={styles.cardDate}>{cert.date}</div>
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.certLink}>Verify</a>
          </div>
        ))}
      </div>
    </section>
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Publications</h2>
      <div className={styles.publicationsFlex}>
        {publications.map((pub, i) => (
          <div className={styles.pubCard} key={i}>
            <h3>{pub.title}</h3>
            <div className={styles.cardVenue}>{pub.venue}</div>
            <a href={pub.link} target="_blank" rel="noopener noreferrer" className={styles.certLink}>View Publication</a>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default Resume; 