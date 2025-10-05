import React from 'react';
import './ContactMe.css';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';

const ContactMe = () => {
  return (
    <div className="contactme-container" id="Contact">
      <h1 className="contactme-title">Contact Me</h1>
      <div className="contactme-info">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:yorgoassal0@gmail.com" className="contactme-link">
            yorgoassal0@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{' '}
          <a href="tel:+96181747949" className="contactme-link">
            +961 81 747 949
          </a>
        </p>
      </div>
      <div className="contactme-icons">
        <a
          href="https://www.linkedin.com/in/yorgoassal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="contactme-icon" />
        </a>
        <a
          href="https://github.com/yoyzoA"
          target='_blank'
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" className="contactme-icon" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;