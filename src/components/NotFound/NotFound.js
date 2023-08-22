import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <main className="not-found">
      <span className="not-found__error-code">404</span>
      <h1 className="not-found__title">Страница не найдена</h1>
      <Link to="-" onClick={() => navigate(-2)} className="not-found__link">
        Назад
      </Link>
    </main>
  );
}

export default NotFound;
