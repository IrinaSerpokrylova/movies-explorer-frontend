import React from 'react';

import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Preloader from '../Movies/Preloader/Preloader';

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
      {/* <Preloader /> */}
    </section>
  );
}

export default Movies;
