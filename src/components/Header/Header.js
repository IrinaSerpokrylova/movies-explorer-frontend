import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import NavTab from '../Main/NavTab/NavTab';

function Header() {
  let location = useLocation();
  // заглушка для разных состояний авторизации (header)
  const authorized = true;
  // const authorized = false;

  return (
    <header className='header'
    >
      <div className={`${location.pathname === '/' ? 'header__main-container' : 'header__container' }`}>{authorized ? <Navigation /> : <NavTab />}</div>
    </header>
  );
}

export default Header;
