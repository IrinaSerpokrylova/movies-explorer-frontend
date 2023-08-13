import { Outlet } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

function MainLayout() {
  return (
    <div className='main-layout'>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default MainLayout;
