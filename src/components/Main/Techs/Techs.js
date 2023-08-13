import React from 'react';

function Techs() {
  return (
    <section className="about-techs">
      <h2 className="section__title">Технологии</h2>
      <div className="about-techs__content">
        <h3 className="about-techs__title">7 технологий</h3>
        <p className="about-techs__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="about-techs__techs-list">
          <li className="about-techs__techs-item">HTML</li>
          <li className="about-techs__techs-item">CSS</li>
          <li className="about-techs__techs-item">JS</li>
          <li className="about-techs__techs-item">React</li>
          <li className="about-techs__techs-item">Git</li>
          <li className="about-techs__techs-item">Express.js</li>
          <li className="about-techs__techs-item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
