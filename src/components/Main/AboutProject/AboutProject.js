import React from 'react';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="section__title" id="about-project">
        О проекте
      </h2>
      <ul className="about-project__description">
        <li className="about-project__element">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__info">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__element">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__info">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__timeline">
        <div className="about-project__backend">
          <div className="about-project__timeline-container about-project__timeline-container_type_backend">
            <p className="about-project__length about-project__length_type_backend">
              1 неделя
            </p>
          </div>
          <p className="about-project__timeline-subtitle">Back-end</p>
        </div>
        <div className="about-project__frontend">
          <div className="about-project__timeline-container about-project__timeline-container_type_frontend">
            <p className="about-project__length about-project__length_type_frontend">
              4 недели
            </p>
          </div>
          <p className="about-project__timeline-subtitle">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
