import React from 'react';
import { Link } from 'react-router-dom';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__greetings">Привет, Ирина!</h1>
      <form action="submit" className="profile__form">
        <div className="profile__form-item">
          <label htmlFor="name" className="profile__label">
            Имя
          </label>
          <input
            type="text"
            name="name"
            className="profile__input"
            placeholder="Ирина"
            value={'Ирина'}
            required
            minLength="2"
            maxLength="30"
            disabled
            autocomplete="off"
          />
        </div>
        <span className="profile__input-error"></span>
        <div className="profile__form-item">
          <label htmlFor="email" className="profile__label">
            E-mail
          </label>
          <input
            type="email"
            pattern="/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
            name="email"
            className="profile__input"
            placeholder="irina@ya.ru"
            value={'irina@ya.ru'}
            required
            disabled
            autocomplete="off"
          />
        </div>
        <span className="profile__input-error"></span>
        <button type="button" className="profile__edit-button">
          Редактировать
        </button>

        <button type="submit" className="profile__save-button">
          Сохранить
        </button>
      </form>
      <Link to="/" className="profile__signout">
        Выйти из аккаунта
      </Link>
      <ErrorPopup errorMessage={`При обновлении профиля произошла ошибка.`} />
    </section>
  );
}

export default Profile;
