import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies({
  onSearch,
  onCheckbox,
  filteredMovies,
  savedMovies,
  onSaveMovie,
  onDeleteMovie,
  formState,
}) {
  const moviesListLength = savedMovies.length === 0;
  const check = filteredMovies.length === 0;

  return (
    <section className='saved-movies'>
      <SearchForm
        onSearch={onSearch}
        onCheckbox={onCheckbox}
        formState={formState}
      />
      {!moviesListLength ? (
        <MoviesCardList
          filteredMovies={filteredMovies}
          savedMovies={savedMovies}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
        />
      ) : (
        !check && (
          <p className='saved-movies__error-message'>Ничего не найдено</p>
        )
      )}
    </section>
  );
}

export default SavedMovies;
