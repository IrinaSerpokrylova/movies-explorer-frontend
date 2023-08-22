import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import { CARDS_ADD, CARDS_DEFAULT, DEVICE_WIDTH } from '../../../utils/const';

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
    if (width >= DEVICE_WIDTH.laptop) return CARDS_ADD.laptop;
    if (width >= DEVICE_WIDTH.tablet) return CARDS_ADD.tablet;
    if (width >= DEVICE_WIDTH.phone) return CARDS_ADD.phone;
  };

  const getLimit = () => {
    if (width >= DEVICE_WIDTH.laptop) return CARDS_DEFAULT.laptop;
    if (width >= DEVICE_WIDTH.tablet) return CARDS_DEFAULT.tablet;
    if (width >= DEVICE_WIDTH.miniTablet) return CARDS_DEFAULT.miniTablet;
    if (width >= DEVICE_WIDTH.phone) return CARDS_DEFAULT.phone;
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

  useEffect(() => {
    if (location.pathname === '/movies') {
      setLimit(getLimit());
    }
  }, [filteredMovies]);

  return (
    <div className='movies-card-list'>
      <div className='movies-card-list__container'>
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
          className='movies-card-list__button'
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
