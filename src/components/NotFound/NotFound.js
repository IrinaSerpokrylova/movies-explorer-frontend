import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="not-found">
      <span className="not-found__error-code">404</span>
      <h1 className="not-found__title">Страница не найдена</h1>
      <Link to="/" className="not-found__link">
        Назад
      </Link>
    </main>
  );
}

export default NotFound;
