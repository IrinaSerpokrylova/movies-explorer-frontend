import React from 'react';
import { NavLink } from 'react-router-dom';

function BurgerMenu({ burgerState, handleCloseBurger }) {
  const setNavItemActive = ({ isActive }) =>
    isActive
      ? 'burger-menu__nav-item burger-menu__nav-item_active'
      : 'burger-menu__nav-item';

  return (
    <div
      className={`${
        burgerState ? 'burger-menu burger-menu_opened' : 'burger-menu'
      }`}
    >
      <div className="burger-menu__content">
        <button
          type="button"
          onClick={handleCloseBurger}
          className="burger-menu__close-button"
        ></button>
        <div className="burger-menu__container">
          <nav className="burger-menu__navigation">
            <NavLink to="/" className={setNavItemActive}>
              Главная
            </NavLink>
            <NavLink to="/movies" className={setNavItemActive}>
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className={setNavItemActive}>
              Сохранённые фильмы
            </NavLink>
          </nav>
          <NavLink to="/profile" className="burger-menu__account-container">
            <p className="burger-menu__account-title">Аккаунт</p>
            <div className="burger-menu__account-icon"></div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
