import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardListSaved from './MoviesCardList/MoviesCardListSaved';

function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardListSaved />
    </section>
  );
}

export default SavedMovies;
