// Experience.js
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section experience" data-aos="fade-in">
      <h2>Experience</h2>
      
      <div className="experience-item" data-aos="slide-up" data-aos-delay="100">
        <h3>Cloud Architect Intern - Alphathena</h3>
        <p className="experience-date">January 2025 - Present</p>
        <p>
          Orchestrated a symphony of AWS services, turning chaotic logs into a harmonious monitoring suite. Crafted an OpenSearch dashboard that slashed issue triage time by 40%, giving engineers back hours of their week. My ETL framework, built with Python and Airflow, now silently moves mountains of data with 90% less human intervention—like a digital ghost in the machine.
        </p>
        <p>
          Created an elegant log archival system that automatically transitions aging logs to the frozen depths of Glacier after 15 days—a financial win that keeps auditors smiling and budgets intact.
        </p>
      </div>
      
      <div className="experience-item" data-aos="slide-up" data-aos-delay="200">
        <h3>Cloud Architect Intern - Alphathena</h3>
        <p className="experience-date">May 2024 - August 2024</p>
        <p>
          Wove a protective shield around cloud assets by implementing a security architecture that stands guard against the digital wilderness. Partnered with ethical hackers to stress-test defenses, then meticulously patched each vulnerability they uncovered.
        </p>
        <p>
          Engineered an automated PEM file rotation system that refreshes access keys monthly—like changing the locks to a digital fortress on schedule. Developed a bespoke AES encryption layer for S3 objects that wraps sensitive data in mathematical armor, ensuring only authorized eyes see what matters.
        </p>
      </div>

      <div className="experience-item" data-aos="slide-up" data-aos-delay="300">
        <h3>Software Engineer Intern - Wrecked Esports</h3>
        <p className="experience-date">April 2023 - July 2023</p>
        <p>
          Conjured a data visualization dashboard that transformed abstract numbers into actionable insights, reshaping how the organization made strategic decisions. The AI-powered invoice processing system I built didn't just improve accuracy by 44%—it performed financial alchemy, turning tedious paperwork into clean, reliable data while cutting maintenance needs in half.
        </p>
        <p>
          Architected serverless applications using AWS Lambda and API Gateway that scaled seamlessly from zero to hero, delivering performance without the persistent infrastructure costs—like having an orchestra that only plays (and costs) when there's an audience.
        </p>
      </div>

      <div className="experience-item" data-aos="slide-up" data-aos-delay="400">
        <h3>Software Engineer Intern - Wrecked Tech Private Limited</h3>
        <p className="experience-date">January 2023 - March 2023</p>
        <p>
          Automated the tedium out of testing with Bash scripts that worked tirelessly through nights and weekends, improving system reliability while engineers focused on creative challenges. My feed refresh algorithm was a digital Renaissance, boosting processing speed by 150% while increasing content uniqueness by 80%—a win for both machines and human readers.
        </p>
        <p>
          Wielded Python's Pandas and NumPy like a data scientist's lightsaber, cutting through information fog to reveal patterns and insights that guided product decisions and optimized user experiences.
        </p>
      </div>
    </section>
  );
};

export default Experience;
