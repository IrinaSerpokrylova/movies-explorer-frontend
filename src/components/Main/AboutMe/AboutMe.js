import React from 'react';
import studentPhoto from '../../../images/student-photo.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__profile">
          <div className="about-me__student">
            <h3 className="about-me__name">Ирина</h3>
            <p className="about-me__description">
              Фронтенд-разработчик, 36 лет
            </p>
            <p className="about-me__bio">
              Я родилась в Хабаровске, но волею судеб оказалась в
              Санкт-Петерубрге. Продолжительное время работала в сфере красоты,
              но решила изменить свою жизнь, связав её с разработкой.
            </p>
          </div>
          <a
            href="https://github.com/IrinaSerpokrylova"
            className="about-me__link"
            target="_blank"
          >
            Github
          </a>
        </div>
        <img src={studentPhoto} alt="Ирина" className="about-me__pic" />
      </div>
    </section>
  );
}

export default AboutMe;
