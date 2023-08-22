import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ onLogout, onUpdate, formState }) {
  // текущий пользователь
  const currentUser = useContext(CurrentUserContext);

  // стейты для полей формы
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');

  // стейты валидации
  const [emailValid, setEmailValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);
  const [formValid, setFormValid] = useState(false);

  // проверка почты
  const checkEmail = (e) => {
    setEmail(e.target.value);
    setEmailValid(e.target.validity.valid);
    setEmailError(e.target.validationMessage);
  };

  // проверка имени
  const checkName = (e) => {
    console.log(email);
    setName(e.target.value);
    setNameValid(e.target.validity.valid);
    setNameError(e.target.validationMessage);
  };

  // эффект валидации формы от инпутов
  useEffect(() => {
    setFormValid(
      emailValid &&
        nameValid &&
        (currentUser.name !== name || currentUser.email !== email)
    );
  }, [email, name, emailValid, nameValid, currentUser]);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ email, name });
  };

  return (
    <section className='profile'>
      <h1 className='profile__greetings'>Привет, {currentUser.name}!</h1>
      <form action='submit' className='profile__form' onSubmit={handleSubmit}>
        <div className='profile__form-item'>
          <label htmlFor='name' className='profile__label'>
            Имя
          </label>
          <input
            type='text'
            name='name'
            pattern='^[a-zA-Zа-яА-Я\s\-]+$'
            className='profile__input'
            placeholder='Имя'
            onChange={checkName}
            value={name}
            required
            minLength='2'
            maxLength='30'
            autoComplete='off'
            disabled={formState}
          />
        </div>
        <span className='profile__input-error'>{nameError}</span>
        <div className='profile__form-item'>
          <label htmlFor='email' className='profile__label'>
            E-mail
          </label>
          <input
            type='email'
            name='email'
            onChange={checkEmail}
            className='profile__input'
            placeholder='E-mail'
            value={email}
            required
            disabled={formState}
          />
        </div>
        <span className='profile__input-error'>{emailError}</span>
        <button
          type='submit'
          disabled={!formValid || formState}
          className={`profile__edit-button ${
            formValid ? '' : 'profile__edit-button_disabled'
          }`}
        >
          Редактировать
        </button>

        <button type='submit' className='profile__save-button'>
          Сохранить
        </button>
      </form>
      <Link to='/' className='profile__signout' onClick={onLogout}>
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Profile;
