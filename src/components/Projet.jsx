import React from 'react';
import '../style/projet.css';

const Projet = ({ title, description, technologies, image, link }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <p className="project-technologies">Technologies: {technologies.join(', ')}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        Voir le projet
      </a>
    </div>
  );
};

export default Projet;
