import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__content">
          <p className="footer__year">&copy; 2023</p>
          <ul className="footer__links">
            <a
              target="_blank"
              href="https://practicum.yandex.ru/"
              className="footer__link"
            >
              Яндекс.Практикум
            </a>
            <a
              target="_blank"
              href="https://github.com/IrinaSerpokrylova"
              className="footer__link"
            >
              Github
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
