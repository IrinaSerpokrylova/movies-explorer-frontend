import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';

function NavTab() {
  return (
    <section className="navtab">
      <Logo />
      <nav className="navtab__links">
        <Link to="/sign-up" className="navtab__registration-link">
          Регистрация
        </Link>
        <Link to="/sign-in" className="navtab__login-link">
          Войти
        </Link>
      </nav>
    </section>
  );
}

export default NavTab;
