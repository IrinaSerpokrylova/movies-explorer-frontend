import { React, useState } from 'react';
import Logo from '../Logo/Logo';
import { Link, NavLink } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation() {
  const [burgerState, setBurgerState] = useState(false);

  const handleOpenBurger = () => {
    setBurgerState(true);
  };

  const handleCloseBurger = () => {
    setBurgerState(false);
  };

  // Ручка для управления активной ссылкой
  const setNavItemActive = ({ isActive }) =>
    isActive
      ? 'navigation__movies-item navigation__movies-item_active'
      : 'navigation__movies-item';

  return (
    <section className="navigation">
      <Logo />
      <nav className="navigation__movies">
        <NavLink to="/movies" className={setNavItemActive}>
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" className={setNavItemActive}>
          Сохранённые фильмы
        </NavLink>
      </nav>
      <div className="navigation__account-container">
        <NavLink to="/profile" className="navigation__account-title">
          Аккаунт
        </NavLink>
        <Link to="/profile" className="navigation__account-icon"></Link>
      </div>
      <button
        onClick={handleOpenBurger}
        className="navigation__burger"
        
      ></button>
      <BurgerMenu
        burgerState={burgerState}
        handleCloseBurger={handleCloseBurger}
      />
    </section>
  );
}

export default Navigation;
