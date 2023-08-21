import React from 'react';
import globeLogo from '../../../images/landing-logo-min.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <div className="promo__description">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <img src={globeLogo} alt="earth" className="promo__globe-logo" />
      </div>
      <a href="#about-project" className="promo__button">
        Узнать больше
      </a>
    </section>
  );
}

export default Promo;
