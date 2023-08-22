import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Login({ onAuth, formState }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(emailValid && passwordValid);
  }, [emailValid, passwordValid]);

  const checkEmail = (e) => {
    setEmail(e.target.value);
    setEmailValid(e.target.validity.valid);
    setEmailError(e.target.validationMessage);
  };

  const checkPassword = (e) => {
    setPassword(e.target.value);
    setPasswordValid(e.target.validity.valid);
    setPasswordError(e.target.validationMessage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuth({ email, password });
  };

  return (
    <div className='login'>
      <div className='login__logo-container'>
        <Logo />
        <h2 className='login__title'>Рады видеть!</h2>
      </div>
      <form name='signin' className='login__form' onSubmit={handleSubmit}>
        <label htmlFor='email' className='login__form-label'>
          E-mail
        </label>
        <input
          type='email'
          placeholder='E-mail'
          onChange={checkEmail}
          className={`login__form-input ${
            passwordValid ? '' : 'login__form-input_type_error'
          }`}
          name='email'
          id='email'
          required
        />
        <span className='login__form-error'>{emailError}</span>
        <label htmlFor='password' className='login__form-label'>
          Пароль
        </label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Пароль'
          onChange={checkPassword}
          className={`login__form-input ${
            passwordValid ? '' : 'login__form-input_type_error'
          }`}
          required
        />

        <span className='login__form-error '>{passwordError}</span>

        <button
          className={`login__button ${
            formValid ? '' : 'login__button_disabled'
          }`}
          type='submit'
          disabled={!formValid}
        >
          Войти
        </button>
      </form>
      <div className='login__registration-block'>
        <p className='login__registration-text'>Ещё не зарегистрированы?</p>
        <Link to='/sign-up' className='login__registration-link'>
          Регистрация
        </Link>
      </div>
    </div>
  );
}

export default Login;
