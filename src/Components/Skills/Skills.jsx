import React, { useState } from 'react'
import './Skills.css'

const tabData = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', level: 60 },
      { name: 'HTML/CSS', level: 80 },
      { name: 'JavaScript', level: 60 },
      { name: 'Tailwind CSS', level: 45 },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'Python', level: 95 },
      { name: 'Java', level: 90 },
      { name: 'C#', level: 60 },
    ],
  },
  {
    label: 'Database and Data Engineering',
    skills: [
      { name: 'MySQL', level: 95 },
      { name: 'Python Pandas', level: 90 },
      { name: 'Apache pyspark', level: 80 },
      { name: 'ETL Pipelines', level: 90 },

    ],
  },
  {
    label: 'Cloud and other tools',
    skills: [
      { name: 'AWS', level: 70 },
      { name: 'Azure', level: 40 },
      { name: 'Palantir Foundry', level: 80 }

    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="skills-container">
      <div className="skills-separator"></div>
      <h1 className='skills-title' id='skills'>Skills</h1>
      <ul className="nav-links">
        {tabData.map((tab, idx) => (
          <li key={tab.label}>
            <button
              className={`btn${activeTab === idx ? ' active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        <ul className="skills-list">
          {tabData[activeTab].skills.map(skill => (
            <li key={skill.name} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="skills-separator2"></div>
    </div>
    
  );
};

export default Skills