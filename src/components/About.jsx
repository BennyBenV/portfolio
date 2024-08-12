import React from 'react';
import '../style/about.css';
import pp from '../assets/pp.jpg'; // Assurez-vous que ce chemin est correct

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={pp} alt="photoDeProfil" />
        </div>
        <div className="about-content">
          <h2>À propos de moi</h2>
          <h2>À propos de moi</h2>
          <p>
            Je suis un développeur web récemment diplômé de la formation "Développeur Web" sur OpenClassrooms. Passionné par le développement web, j'ai une affinité particulière pour le frontend.
          </p>
          <p>
            Au cours de ma formation, j'ai acquis des compétences solides en JavaScript, React, Node.js, et MongoDB. Ces technologies me permettent de créer des interfaces utilisateurs dynamiques et des applications web robustes.
          </p>
          <p>
            En dehors du développement, je suis passionné par le basket et les voyages, ce qui m'inspire à toujours repousser mes limites, que ce soit sur le terrain ou en explorant de nouvelles cultures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
