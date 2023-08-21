import React from 'react';
import { useLocation } from 'react-router-dom';
import { MOVIES_API_URL } from '../../../utils/const';

function MoviesCard({
  movie,
  onSaveMovie,
  onDeleteMovie,
  savedMoviesNames,
  savedMovies,
}) {
  let location = useLocation();

  function minutesToHoursMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}ч${minutes}м`;
  }

  const handleOnClick = (e) => {
    if (location.pathname === '/saved-movies') {
      onDeleteMovie(e.target.id);
    } else {
      if (savedMoviesNames.includes(movie.nameRU)) {
        const id = savedMovies.filter((item) => item.movieId === movie.id)[0]
          ._id;
        onDeleteMovie(id);
      } else {
        onSaveMovie(e.target.id);
      }
    }
  };

  return (
    <div className="movies-card">
      <a href={movie.trailerLink} className="movies-card__link" target="_blank">
        <img
          src={
            movie.image.url
              ? `${MOVIES_API_URL}/${movie.image.url}`
              : movie.image
          }
          alt={movie.nameRU}
          className="movies-card__cover"
        />
      </a>
      <div className="movies-card__description-container">
        <div className="movies-card__title-block">
          <h2 className="movies-card__movie-title">{movie.nameRU}</h2>
          <div
            id={movie.id || movie._id}
            className={`${
              location.pathname === '/movies'
                ? 'movies-card__saved-icon'
                : 'movies-card__delete-icon'
            } ${
              savedMoviesNames.includes(movie.nameRU) &&
              location.pathname === '/movies'
                ? 'movies-card__saved-icon_active'
                : ''
            }`}
            onClick={handleOnClick}
          ></div>
        </div>
        <p className="movies-card__duration">
          {minutesToHoursMinutes(movie.duration)}
        </p>
      </div>
    </div>
  );
}

export default MoviesCard;
