import React from 'react';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__project-list">
        <a
          target="_blank"
          href="https://github.com/IrinaSerpokrylova/how-to-learn"
          className="portfolio__link"
        >
          <p className="portfolio__project-name">Статичный сайт</p>
          <p className="portfolio__arrow">&#8599;</p>
        </a>
        <a
          target="_blank"
          href="https://github.com/IrinaSerpokrylova/russian-travel"
          className="portfolio__link"
        >
          <p className="portfolio__project-name">Адаптивный сайт</p>
          <p className="portfolio__arrow">&#8599;</p>
        </a>
        <a
          target="_blank"
          href="https://github.com/IrinaSerpokrylova/react-mesto-api-full-gha"
          className="portfolio__link"
        >
          <p className="portfolio__project-name">Одностраничное приложение</p>
          <p className="portfolio__arrow">&#8599;</p>
        </a>
      </ul>
    </section>
  );
}

export default Portfolio;
