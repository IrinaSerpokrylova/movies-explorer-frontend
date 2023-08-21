import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ img, title, duration }) {
  let location = useLocation();
  
  return (
    <div className="movies-card">
      <img src={img} alt={title} className="movies-card__cover" />
      <div className="movies-card__description-container">
        <div className="movies-card__title-block">
          <h2 className="movies-card__movie-title">{title}</h2>
          <div 
          // className="movies-card__saved-icon"
          className={`${location.pathname === '/movies' ? 'movies-card__saved-icon' : 'movies-card__delete-icon'}`}
          ></div>
        </div>
        <p className="movies-card__duration">{duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
