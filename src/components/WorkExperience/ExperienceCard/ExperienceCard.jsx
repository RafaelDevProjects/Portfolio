import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ details }) => {
  // Extrai os links de deploy e GitHub do objeto details, se estiverem disponíveis
  const deployLink = details.deployLink || '';
  const githubLink = details.githubLink || '';

  return (
    <div className='work-experience-card'>
      <h6>{details.title}</h6>
      <div className='work-duration'>{details.date}</div>
      <ul>
        {details.resposibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="card-buttons">
        {deployLink && (
          <a href={deployLink} target="_blank" rel="noopener noreferrer">
            <button className="card-button">Deploy</button>
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className="card-button">GitHub</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
