import React from 'react';

function SearchForm() {
  return (
    <div className="movies-search-form">
      <form action="submit" className="movies-search-form__form">
        <input
          type="text"
          className="movies-search-form__input"
          placeholder="Фильм"
          required
          name="movie"
        />
        <button
          className="movies-search-form__submit-button"
          type="submit"
        ></button>
      </form>
      <span className="movies-search-form__error"></span>

      <label className="movies-search-form__thumbler">
        <div className="movies-search-form__checkbox-container">
          <input className="movies-search-form__checkbox" type="checkbox" />
          <span className="movies-search-form__slider"></span>
        </div>
        <p className="movies-search-form__checkbox-title">Короткометражки</p>
      </label>
    </div>
  );
}

export default SearchForm;
