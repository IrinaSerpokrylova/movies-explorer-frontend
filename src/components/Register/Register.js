import React from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="register">
      <div className="register__logo-container">
        <Logo />
        <h2 className="register__title">Добро пожаловать!</h2>
      </div>
      <form name="signin" className="register__form">
        <label htmlFor="name" className="register__form-label">
          Имя
        </label>
        <input
          type="text"
          className="register__form-input"
          name="name"
          placeholder='Имя'
          id="name"
          required
          minLength="2"
          maxLength="20"
          />
        <span className="register__form-error"></span>
        <label htmlFor="email" className="register__form-label">
          E-mail
        </label>
        <input
          type="email"
          pattern="/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
          className="register__form-input"
          placeholder='E-mail'
          name="email"
          id="email"
          required
          />
        <span className="register__form-error"></span>
        <label htmlFor="password" className="register__form-label">
          Пароль
        </label>
        <input
          type="password"
          id="password"
          placeholder='Пароль'
          className="register__form-input register__form-input_type_error"
          required
        />
        <span className="register__form-error ">Что-то пошло не так...</span>
        <button className="register__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <div className="register__login-block">
        <p className="register__login-text">Уже зарегистрированы?</p>
        <Link to="/sign-in" className="register__login-link">
          Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
