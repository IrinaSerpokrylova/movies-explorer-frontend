import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Register({ onRegister, formState }) {
  // стейты для полей формы
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // стейты валидации
  const [emailValid, setEmailValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  // эффект валидации формы от инпутов
  useEffect(() => {
    setFormValid(emailValid && passwordValid && nameValid);
  }, [emailValid, passwordValid, nameValid]);

  // проверка почты
  const checkEmail = (e) => {
    setEmail(e.target.value);
    setEmailValid(e.target.validity.valid);
    setEmailError(e.target.validationMessage);
  };
  // проверка имени
  const checkName = (e) => {
    setName(e.target.value);
    setNameValid(e.target.validity.valid);
    setNameError(e.target.validationMessage);
  };
  // проверка пароля
  const checkPassword = (e) => {
    setPassword(e.target.value);
    setPasswordValid(e.target.validity.valid);
    setPasswordError(e.target.validationMessage);
  };

  // сабмит формы
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email, password, name });
  };

  return (
    <div className='register'>
      <div className='register__logo-container'>
        <Logo />
        <h2 className='register__title'>Добро пожаловать!</h2>
      </div>
      <form name='signin' className='register__form' onSubmit={handleSubmit}>
        <label htmlFor='name' className='register__form-label'>
          Имя
        </label>
        <input
          type='text'
          className={`register__form-input ${
            nameValid ? '' : 'register__form-input_type_error'
          }`}
          name='name'
          onChange={checkName}
          pattern='^[a-zA-Zа-яА-Я\s\-]+$'
          placeholder='Имя'
          id='name'
          required
          minLength='2'
          maxLength='30'
        />
        <span className='register__form-error'>{nameError}</span>
        <label htmlFor='email' className='register__form-label'>
          E-mail
        </label>
        <input
          type='email'
          pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
          onChange={checkEmail}
          className={`register__form-input ${
            emailValid ? '' : 'register__form-input_type_error'
          }`}
          placeholder='E-mail'
          name='email'
          id='email'
          required
        />
        <span className='register__form-error'>{emailError}</span>
        <label htmlFor='password' className='register__form-label'>
          Пароль
        </label>
        <input
          type='password'
          id='password'
          placeholder='Пароль'
          onChange={checkPassword}
          className={`register__form-input ${
            passwordValid ? '' : 'register__form-input_type_error'
          }`}
          required
        />
        <span className='register__form-error '>{passwordError}</span>
        <button
          className={`register__button ${
            formValid ? '' : 'register__button_disabled'
          }`}
          type='submit'
          disabled={!formValid}
        >
          Зарегистрироваться
        </button>
      </form>
      <div className='register__login-block'>
        <p className='register__login-text'>Уже зарегистрированы?</p>
        <Link to='/sign-in' className='register__login-link'>
          Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
