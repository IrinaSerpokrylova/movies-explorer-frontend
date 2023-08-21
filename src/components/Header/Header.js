import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import NavTab from '../Main/NavTab/NavTab';

function Header({ isLoggedIn }) {
  let location = useLocation();

  return (
    <header className="header">
      <div
        className={`${
          location.pathname === '/'
            ? 'header__main-container'
            : 'header__container'
        }`}
      >
        {isLoggedIn ? <Navigation /> : <NavTab />}
      </div>
    </header>
  );
}

export default Header;
