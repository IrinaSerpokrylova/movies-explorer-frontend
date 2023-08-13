import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import NotFound from '../NotFound/NotFound.js';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import ProfileLayout from '../Layouts/ProfileLayout/ProfileLayout';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />

          <Route path="movies" element={<Movies />} />
          <Route path="saved-movies" element={<SavedMovies />} />
        </Route>
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
