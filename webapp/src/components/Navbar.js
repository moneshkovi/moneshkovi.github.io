import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import { ThemeContext } from '../theme/ThemeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Monesh Kovi</div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar; 