import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Logo and Description */}
        <div style={styles.section}>
          <h2 style={styles.logo}>Job Hunt</h2>
          <p>Your dream job is just a click away.</p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h4>Quick Links</h4>
          <ul style={styles.linkList}>
            <li><a href="/about" style={styles.link}>About Us</a></li>
            <li><a href="/jobs" style={styles.link}>Jobs</a></li>
            <li><a href="/contact" style={styles.link}>Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div style={styles.section}>
          <h4>Follow Us</h4>
          <div style={styles.socialMedia}>
            <a href="https://facebook.com" style={styles.link}>Facebook</a>
            <a href="https://twitter.com" style={styles.link}>Twitter</a>
            <a href="https://linkedin.com" style={styles.link}>LinkedIn</a>
          </div>
        </div>
      </div>

      <p style={styles.copyright}>© {new Date().getFullYear()} Job Hunt. All rights reserved.</p>
    </footer>
  );
};

// Inline styles for the footer
const styles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    textAlign: 'center',
    padding: '20px 0',
    marginTop: '40px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '1000px',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  section: {
    flex: '1',
    minWidth: '200px',
    margin: '10px',
    textAlign: 'left',
  },
  logo: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  linkList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    color: '#ecf0f1',
    textDecoration: 'none',
    margin: '5px 0',
    display: 'block',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#3498db',
  },
  socialMedia: {
    display: 'flex',
    flexDirection: 'column',
  },
  copyright: {
    marginTop: '15px',
    fontSize: '0.9em',
    color: '#bdc3c7',
  },
};

export default Footer;


