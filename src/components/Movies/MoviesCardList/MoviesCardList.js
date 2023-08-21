import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

function MoviesCardList({
  filteredMovies,
  savedMovies,
  onSaveMovie,
  onDeleteMovie,
}) {
  const location = useLocation();

  const savedMoviesNames = savedMovies.map((item) => {
    return item.nameRU;
  });

  const renderedMovies =
    location.pathname === '/movies' ? filteredMovies : savedMovies;

  // управление количеством карточек
  // стейт ширины
  const [width, setWidth] = useState(window.innerWidth);
  // стейт максимального количества карточек
  const [limit, setLimit] = useState(0);

  // добавить больше карточек
  const loadMore = () => {
    setLimit((prev) => prev + getAdditional());
  };

  const getAdditional = () => {
    if (width >= 1200) return 4;
    if (width >= 976) return 3;
    if (width >= 320) return 2;
  };

  const getLimit = () => {
    if (width >= 1200) return 16;
    if (width >= 976) return 12;
    if (width >= 736) return 8;
    if (width >= 320) return 5;
  };

  // хук управления стейтом ширины

  useEffect(() => {
    if (location.pathname === '/movies') {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      setLimit(getLimit());
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    } else {
      setLimit(filteredMovies.length);
    }
  }, [window.innerWidth]);

  return (
    <div className="movies-card-list">
      <div className="movies-card-list__container">
        {renderedMovies.slice(0, limit).map((item) => (
          <MoviesCard
            movie={item}
            key={item.id || item._id}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            savedMoviesNames={savedMoviesNames}
            savedMovies={savedMovies}
          />
        ))}
      </div>
      {location.pathname === '/movies' ? (
        <button
          onClick={loadMore}
          className="movies-card-list__button"
          style={{
            visibility: limit < renderedMovies.length ? 'visible' : 'hidden',
          }}
        >
          Еще
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

export default MoviesCardList;
