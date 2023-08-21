import { Outlet } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function MainLayout({ isLoggedIn }) {
  return (
    <div className="layout-main">
      <Header isLoggedIn={isLoggedIn} />

      <Outlet />

      <Footer />
    </div>
  );
}

export default MainLayout;
