import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ onSearch, onCheckbox, formState }) {
  const location = useLocation();

  const [searchPhrase, setSearchPhrase] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState('');
  const [inputValidate, setInputValidate] = useState(false);

  useEffect(() => {
    if (location.pathname === '/movies') {
      const storedCheck = localStorage.getItem('thumblerState');
      if (storedCheck) {
        setCheckbox(JSON.parse(storedCheck));
      }
      if (localStorage.getItem('searchPhrase')) {
        setSearchPhrase(JSON.parse(localStorage.getItem('searchPhrase')));
      }
    } else {
      const storedCheckSaved = localStorage.getItem('thumblerStateSavedMovies');
      if (storedCheckSaved) {
        setCheckbox(JSON.parse(storedCheckSaved));
      } else {
        setCheckbox(checkbox);
      }
      // setSearchPhrase('');
    }
  }, [location]);

  const onChangeCheckbox = () => {
    if (location.pathname === '/movies') {
      setCheckbox((prev) => !prev);

      localStorage.setItem('thumblerState', JSON.stringify(!checkbox));
    } else {
      setCheckbox((prev) => !prev);

      localStorage.setItem(
        'thumblerStateSavedMovies',
        JSON.stringify(!checkbox)
      );

      localStorage.setItem('searchPhraseSaved', JSON.stringify(searchPhrase));
    }
  };

  const onChangeInput = (evt) => {
    setSearchPhrase(evt.target.value);

    if (evt.target.value.length === 0) {
      setError('Нужно ввести ключевое слово');
      setInputValidate(false);
    } else {
      setError('');
      setInputValidate(true);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (inputValidate || searchPhrase.length > 0) {
      onSearch(searchPhrase, checkbox);
    } else {
      setError('Нужно ввести ключевое слово');
    }
  };

  useEffect(() => {
    onCheckbox(checkbox);
  }, [checkbox]);

  return (
    <div className='movies-search-form'>
      <form
        className='movies-search-form__form'
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          type='text'
          className='movies-search-form__input'
          placeholder='Фильм'
          required
          value={searchPhrase || ''}
          onChange={onChangeInput}
          name='movie'
          autoComplete='off'
        />
        <button
          className='movies-search-form__submit-button'
          type='submit'
        ></button>
      </form>
      <span className='movies-search-form__error'>{error}</span>

      <label className='movies-search-form__thumbler'>
        <div className='movies-search-form__checkbox-container'>
          <input
            className='movies-search-form__checkbox'
            type='checkbox'
            checked={checkbox}
            onChange={onChangeCheckbox}
          />
          <span className='movies-search-form__slider'></span>
        </div>
        <p className='movies-search-form__checkbox-title'>Короткометражки</p>
      </label>
    </div>
  );
}

export default SearchForm;
