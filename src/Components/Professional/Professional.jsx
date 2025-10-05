import React, { useState } from 'react';
import './Professional.css';

// Import images from assets
import company1 from '../../assets/ignizia.png';
import company2 from '../../assets/inmind.jpg';
import company3 from '../../assets/ace.jpg';
import company4 from '../../assets/lau.jpg';

const experiences = [
  {
    image: company1,
    mainTitle: 'Fullstack and Data Analyst intern ',
    subTitle: 'ignizia.ai',
    description: 'Conducted market research on upskilling needs, contributed to prototype development, built cloud infrastructure on Azure, worked with NIMs & Omniverse, and developed a ReactJS landing page. ',
    date: 'Jan 2025 - Jul 2025',
    link: 'https://www.ignizia.ai',
  },
  {
    image: company2,
    mainTitle: 'Data Engineer intern',
    subTitle: 'inmind.ai',
    description: 'Received training in AWS and plantir foundry, built etl pipelines, visualised data and created dashboards, implemented NHTSA dataset into comprehemsive dashboard.',
    date: 'Jul 2024 - Aug 2024',
    link: 'https://inmind.ai',
  },
  {
    image: company3,
    mainTitle: 'Computer Repair Technician',
    subTitle: 'Ace Computer SARL',
    description: 'Diagnosed and repaired PCs, printers, and consoles; supported client troubleshooting; assisted with sales.',
    date: 'Jun 2019 - Jul 2024',
    link: 'https://www.instagram.com/acecomputers.sarl',
  },
  {
    image: company4,
    mainTitle: 'Tutor',
    subTitle: 'Lebanese American University',
    description: 'Tutored Electrical Circuits and supported second- and third-year engineering students.',
    date: 'Feb 2022 - May 2024',
    link: 'https://www.lau.edu.lb',
  },
];

const getIndices = (current, length) => {
  // Always show two cards, wrap around if needed
  const first = current;
  const second = (current + 1) % length;
  return [first, second];
};

const Professional = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('right');

  const handleRotate = (dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) =>
        dir === 'right'
          ? (prev + 1) % experiences.length
          : (prev - 1 + experiences.length) % experiences.length
      );
      setAnimating(false);
    }, 500); // Animation duration
  };

  const [firstIdx, secondIdx] = getIndices(current, experiences.length);

  return (
    <div className="professional-container">
        <h1 className="professional-title" id='experience'>Professional Experience</h1>
      <button className="arrow-btn" onClick={() => handleRotate('left')} disabled={animating}>
        &lt;
      </button>
      <div className={`experience-cards-wrapper ${animating ? `rotate-${direction}` : ''}`}>
        {[experiences[firstIdx], experiences[secondIdx]].map((exp) => (
          <a
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="experience-card-link"
            key={exp.mainTitle + exp.date}
            tabIndex={0}
          >
            <div className="experience-card">
              <img src={exp.image} alt={exp.subTitle} className="experience-image" />
              <div className="experience-info">
                <h2 className="experience-main-title">{exp.mainTitle}</h2>
                <h3 className="experience-sub-title">{exp.subTitle}</h3>
                <p className="experience-description">{exp.description}</p>
                <span className="experience-date">{exp.date}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
      <button className="arrow-btn" onClick={() => handleRotate('right')} disabled={animating}>
        &gt;
      </button>
    </div>
  );
};

export default Professional;