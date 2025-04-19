// Contact.js
import React from 'react';

const Contact = () => {
  const handleDirectEmail = () => {
    window.location.href = "mailto:monesh.kovi1@gmail.com?subject=Contact%20from%20Portfolio%20Website";
  };

  return (
    <section id="contact" className="section contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      <div className="contact-options" data-aos="fade-up">
        <button 
          onClick={handleDirectEmail}
          className="email-direct-btn"
          data-aos="zoom-in" 
          data-aos-delay="150"
        >
          <span className="btn-icon">✉</span>
          <span className="btn-text">Send me an email</span>
          <div className="btn-glow"></div>
        </button>
      </div>
    </section>
  );
};

export default Contact;
