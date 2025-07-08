import React, { useState } from 'react';
import styles from './Contact.module.css';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Email sending logic will go here in the future
  };

  return (
    <main className={styles.contactMain}>
      <div className={styles.contactCard}>
        <FaEnvelopeOpenText className={styles.icon} />
        <h1 className={styles.title}>Get in touch</h1>
        <p className={styles.subtitle}>Let's work together!</p>
        {submitted ? (
          <div className={styles.successMsg}>Thank you for reaching out! I'll get back to you soon.</div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
            />
            <button type="submit" className={styles.submitBtn}>Submit</button>
          </form>
        )}
      </div>
    </main>
  );
};

export default Contact; 