// Certifications.js
import React from 'react';

const techSkills = [
  { name: "Languages", items: ["Python", "JavaScript", "HTML", "CSS", "Bash"] },
  { name: "Technologies", items: ["AWS (EC2, S3, EBS, VPC, CloudTrail, Lambda, API Gateway)", "Linux", "Docker", "Git", "Cloudflare", "Elastic Stack", "Scikit-learn"] },
  { name: "Databases", items: ["MySQL", "Redis", "InfluxDB", "DynamoDB"] },
  { name: "Frameworks", items: ["ReactJS"] }
];


const softSkills = [
  { name: "Teamwork", percent: 90 },
  { name: "Communication", percent: 85 },
  { name: "Problem Solving", percent: 88 },
  { name: "Adaptability", percent: 82 }
];

const Certifications = () => {
  // Certification data with local image paths and Credly URLs
  const certifications = [
    {
      id: 'aws-dev',
      title: 'AWS Certified Developer Associate',
      image: '/certs/aws-certified-developer-associate.png',
      credlyBadgeId: 'a69f7a9a-d426-44e7-9ff5-05a892dec45d',
      credlyUrl: 'https://www.credly.com/badges/a69f7a9a-d426-44e7-9ff5-05a892dec45d/public_url'
    },
    {
      id: 'aws-architect',
      title: 'AWS Certified Solutions Architect Associate',
      image: '/certs/aws-certified-solutions-architect-associate.png',
      credlyBadgeId: 'e341d5d7-01c8-4743-a477-0854eb8148e8',
      credlyUrl: 'https://www.credly.com/badges/e341d5d7-01c8-4743-a477-0854eb8148e8/public_url'
    }
  ];

  return (
    <>
    <section id="certifications" className="section certifications" data-aos="fade-up">
      <h2>Certifications</h2>
      <div className="cert-cards">
        {certifications.map((cert) => (
          <div key={cert.id} className="cert-card" data-aos="fade-right" data-aos-delay="100">
            {/* Image that links to Credly verification when clicked */}
            <a 
              href={cert.credlyUrl}
              target="_blank" 
              rel="noopener noreferrer"
              title="Click to verify this certification"
            >
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="cert-img" 
              />
            </a>
            
            <h3>{cert.title}</h3>
            
            {/* Separate verify button */}
            <a
              href={cert.credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Verify
            </a>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="skills-container">
        <div className="tech-skills">
          <h2>Technical Skills</h2>
          {techSkills.map(group => (
          <div key={group.name} className="skill-group">
            <h4>{group.name}</h4>
            <ul className="skill-list">
              {group.items.map(skill => (
                <li key={skill} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
        </div>
        <div className="soft-skills">
          <h2>Professional Skills</h2>
          <div className="soft-skills-grid">
            {softSkills.map(skill => (
              <div key={skill.name} className="circle-skill">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path className="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path className="circle"
                    strokeDasharray={`${skill.percent}, 100`}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" className="percentage">{skill.percent}%</text>
                </svg>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
    <section className="section process-phases" data-aos="fade-up">
      <h2>Why am I Different?</h2>
      <div className="phases-grid">
        
        <div className="phase-card" data-aos="fade-up" data-aos-delay="100">
          <div className="phase-content">
            <div className="phase-title">Phase 1</div>
            <div className="phase-details">
              <h3>Learn Fast, Think Deep</h3>
              <p>I go beyond surface-level problem-solving. I break down complex challenges, ask the right questions, and quickly grasp new tools or technologies — whether it's AI-assisted coding or cloud-first thinking.</p>
            </div>
            <div className="color-drop"></div>
          </div>
        </div>

        <div className="phase-card" data-aos="fade-up" data-aos-delay="200">
          <div className="phase-content">
            <div className="phase-title">Phase 2</div>
            <div className="phase-details">
              <h3>Adapt With Intention</h3>
              <p>I use tools like Cursor, GitHub Copilot, and AWS-native services to build efficiently — not just fast. I adapt quickly, but every tech choice I make serves a purpose, not just a trend.</p>
            </div>
            <div className="color-drop"></div>
          </div>
        </div>

        <div className="phase-card" data-aos="fade-up" data-aos-delay="300">
          <div className="phase-content">
            <div className="phase-title">Phase 3</div>
            <div className="phase-details">
              <h3>Deliver Like an Owner</h3>
              <p>I take full responsibility for what I build — from planning and dev to testing and delivery. I don’t stop at “it works,” I aim for “it works, scales, and delivers impact.”</p>
            </div>
            <div className="color-drop"></div>
          </div>
        </div>

      </div>
    </section>

    </>
  );
};

export default Certifications;
