import React from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function Login() {
  return (
    <div className="login">
      <div className="login__logo-container">
        <Logo />
        <h2 className="login__title">Рады видеть!</h2>
      </div>
      <form name="signin" className="login__form">
        <label htmlFor="email" className="login__form-label">
          E-mail
        </label>
        <input
          type="email"
          className="login__form-input"
          name="email"
          id="email"
          required
        />
        <span className="login__form-error"></span>
        <label htmlFor="password" className="login__form-label">
          Пароль
        </label>
        <input
          type="password"
          id="password"
          className="login__form-input login__form-input_type_error"
          required
        />
        <span className="login__form-error ">error</span>
        <button className="login__button" type="submit">
          Войти
        </button>
      </form>
      <div className="login__registration-block">
        <p className="login__registration-text">Ещё не зарегистрированы?</p>
        <Link to="/sign-up" className="login__registration-link">
          Регистрация
        </Link>
      </div>
      <ErrorPopup
        errorMessage={`При авторизации произошла ошибка. Токен не передан или передан не в
          том формате.`}
      />
    </div>
  );
}

export default Login;
