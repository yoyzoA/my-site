import React, { useEffect, useState } from 'react';
import './Projects.css';

const GITHUB_USERNAME = 'yoyzoa';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="projects-container" id="projects">
        <div className="skills-separator"></div>
      <h1 className="projects-title">GitHub Projects</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="projects-list">
          {repos.map(repo => (
            <div className="project-card" key={repo.id}>
              <h2>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h2>
              <p>{repo.description ? repo.description : "No description provided."}</p>
              <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                <span>⭐ {repo.stargazers_count}</span>
                {repo.language && <span>📝 {repo.language}</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;