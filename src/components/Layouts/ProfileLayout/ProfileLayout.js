import { Outlet } from 'react-router-dom';
import Header from '../../Header/Header';

function ProfileLayout(isLoggedIn) {
  return (
    <div className="layout-profile">
      <Header isLoggedIn={isLoggedIn} />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ProfileLayout;
