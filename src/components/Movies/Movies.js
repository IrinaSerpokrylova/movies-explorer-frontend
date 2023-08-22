import React from 'react';

import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';

function Movies({
  onSearch,
  onCheckbox,
  filteredMovies,
  savedMovies,
  onSaveMovie,
  onDeleteMovie,
  preloaderState,
  formState,
}) {
  const moviesListLength = filteredMovies.length === 0;
  const checkMovies = localStorage.getItem('allMovies');

  return (
    <section className='movies'>
      <SearchForm
        onSearch={onSearch}
        onCheckbox={onCheckbox}
        formState={formState}
      />
      {preloaderState ? (
        <Preloader />
      ) : !moviesListLength ? (
        <MoviesCardList
          filteredMovies={filteredMovies}
          savedMovies={savedMovies}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
        />
      ) : (
        checkMovies && (
          <p className='movies__error-message'>Ничего не найдено</p>
        )
      )}
    </section>
  );
}

export default Movies;
