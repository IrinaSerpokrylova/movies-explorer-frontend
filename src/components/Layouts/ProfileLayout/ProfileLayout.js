import { Outlet } from 'react-router-dom';
import Header from '../../Header/Header';

function ProfileLayout() {
  return (
    <div className='profile-layout'>
      <Header />

      <Outlet />
    </div>
  );
}

export default ProfileLayout;
