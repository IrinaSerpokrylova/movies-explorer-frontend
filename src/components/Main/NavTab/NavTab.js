import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';

// в целом понятно, что этот блок должен реализовывать навигацию по main
// но в макете кнопки навигации, можно сказать, отсутствуют
// поэтому из этого блока сделана часть с навигацией без авторизации
// все равно, кроме как в main такой блок нигде не будет видно (без авторизации)

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
