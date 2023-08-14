import { Outlet } from 'react-router-dom';
import Header from '../../Header/Header';

function ProfileLayout() {
  return (
    <div className='layout-profile'>
      <Header />

      <main class="main">
        <Outlet />
      </main>
    </div>
  );
}

export default ProfileLayout;
