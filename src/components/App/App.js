import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import * as auth from '../../utils/Auth.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import NotFound from '../NotFound/NotFound.js';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import ProfileLayout from '../Layouts/ProfileLayout/ProfileLayout';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useEffect, useState } from 'react';
import api from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [preloaderState, setPreloaderState] = useState(false);
  const [statusCode, setStatusCode] = useState('');
  const [errorState, setErrorState] = useState(false);
  const [statusInfo, setStatusInfo] = useState('');
  const [formState, setFormState] = useState(false);

  // effects

  // получение сохраненных фильмов
  useEffect(() => {
    if (isLoggedIn) {
      getSavedMovies();
    }
  }, [currentUser, isLoggedIn]);

  // получение данных из local storage
  useEffect(() => {
    if (localStorage.getItem('allMovies')) {
      setMovies(JSON.parse(localStorage.getItem('allMovies')));
    }

    if (localStorage.getItem('filteredMovies')) {
      setFilteredMovies(JSON.parse(localStorage.getItem('filteredMovies')));
    }
  }, []);

  // Check token
  function checkToken() {
    auth
      .checkToken()
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setLoggedIn(true);
          navigate(location.pathname);
        }
      })
      .catch((err) => {
        console.log(`Ошибка ${err.status}`);
      });
  }

  // Регистрация

  function handleRegister(registerData) {
    setFormState(true);
    auth
      .register(registerData)
      .then(() => {
        handleLogin(registerData);
        setFormState(false);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        setErrorState(true);
        setStatusCode(err.status);
        setStatusInfo('createUser');
        setFormState(false);
        console.log(`Ошибка ${err.status}`);
      });
  }

  // Авторизация

  function handleLogin(loginData) {
    setFormState(true);
    auth
      .authorize(loginData)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          auth
            .checkToken()
            .then((res) => {
              if (res) {
                setCurrentUser(res);
              }
            })
            .catch((err) => {
              console.log(`Ошибка ${err.status}`);
            });
          setFormState(false);
          navigate('/movies');
        }
      })
      .catch((err) => {
        setErrorState(true);
        setStatusCode(err.status);
        setFormState(false);
        console.log(`Ошибка ${err.status}`);
      });
  }

  function handleUpdateUser({ name, email }) {
    setFormState(true);
    api
      .updateUserInfo({ name, email })
      .then((res) => {
        setCurrentUser(res);
        setErrorState(true);
        setStatusCode(200);
        setStatusInfo('updateProfile');
        setFormState(false);
      })
      .catch((err) => {
        setErrorState(true);
        setStatusCode(err.status);
        setStatusInfo('updateProfile');
        setFormState(false);
        console.log(`Ошибка ${err.status}`);
      });
  }

  // Signout, удаляем токен из cookie

  function handleSignOut() {
    api
      .signOut()
      .then((res) => {
        localStorage.clear();
        setFilteredMovies([]);
        setMovies([]);
        setSavedMovies([]);
        setLoggedIn(false);
        navigate(`/`);
      })
      .catch((err) => {
        setErrorState(true);
        setStatusCode(err.status);
        console.log(`Ошибка ${err.status}`);
      });
  }

  // проверка токена

  useEffect(() => {
    checkToken();
  }, []);

  function getFilteredMovies(request, thumblerState) {
    if (movies.length === 0) {
      setPreloaderState(true);
      moviesApi.getMovies().then((movies) => {
        const filteredMovies = movies.filter((item) => {
          const namesSearch = item.nameRU
            .toLowerCase()
            .concat(item.nameEN.toLowerCase());
          if (thumblerState) {
            return (
              namesSearch.includes(request.toLowerCase()) && item.duration < 41
            );
          } else {
            return namesSearch.includes(request.toLowerCase());
          }
        });

        localStorage.setItem('allMovies', JSON.stringify(movies));
        localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
        localStorage.setItem('searchPhrase', JSON.stringify(request));
        localStorage.setItem('thumblerState', JSON.stringify(thumblerState));
        setMovies(movies);
        setFilteredMovies(filteredMovies);
        setPreloaderState(false);
      });
    } else {
      setPreloaderState(true);
      const requstedMovies = movies.filter(
        (item) =>
          item.nameRU
            .toLowerCase()
            .concat(item.nameEN.toLowerCase())
            .includes(request.toLowerCase()) &&
          (thumblerState ? item.duration < 41 : item.duration > 0)
      );
      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
      localStorage.setItem('searchPhrase', JSON.stringify(request));
      localStorage.setItem('thumblerState', JSON.stringify(thumblerState));
      setFilteredMovies(requstedMovies);
      setPreloaderState(false);
    }
  }

  // отфильтровать короткие для всех
  function getShortMovies(thumblerState) {
    if (localStorage.getItem('searchPhrase')) {
      if (thumblerState) {
        const shortMovies = filteredMovies.filter((item) => item.duration < 41);
        localStorage.setItem('thumblerState', JSON.stringify(thumblerState));

        setFilteredMovies(shortMovies);
      } else {
        getFilteredMovies(
          JSON.parse(localStorage.getItem('searchPhrase')),
          JSON.parse(localStorage.getItem('thumblerState'))
        );
      }
    } else {
      localStorage.setItem('thumblerState', JSON.stringify(thumblerState));
    }
  }

  // отфильтровать сохраненные
  function getFilteredSavedMovies(searchPhraseSaved, thumblerStateSavedMovies) {
    const newFilteredMovies = savedMovies.filter(
      (item) =>
        item.nameRU
          .toLowerCase()
          .concat(item.nameEN.toLowerCase())
          .includes(searchPhraseSaved.toLowerCase()) &&
        (thumblerStateSavedMovies ? item.duration < 41 : item.duration > 0)
    );

    setFilteredSavedMovies(newFilteredMovies);
  }

  // отфильтровать короткие для сохраненных
  function getShortMoviesSaved(thumblerStateSavedMovies) {
    if (localStorage.getItem('searchPhraseSaved')) {
      getFilteredSavedMovies(
        JSON.parse(localStorage.getItem('searchPhraseSaved')),
        JSON.parse(localStorage.getItem('thumblerStateSavedMovies'))
      );
      localStorage.setItem(
        'thumblerStateSavedMovies',
        JSON.stringify(thumblerStateSavedMovies)
      );
      localStorage.removeItem('searchPhraseSaved');
    } else {
      const filteredSavedMovies = savedMovies.filter((item) =>
        thumblerStateSavedMovies ? item.duration < 41 : item.duration > 0
      );
      setFilteredSavedMovies(filteredSavedMovies);
      localStorage.setItem(
        'thumblerStateSavedMovies',
        JSON.stringify(thumblerStateSavedMovies)
      );
    }
  }

  // найти сохраненные фильмы
  function getSavedMovies() {
    api
      .getSavedMovies()
      .then((res) => {
        const savedMovies = res.filter(
          (movie) => movie.owner === currentUser._id
        );
        setSavedMovies(savedMovies);
        setFilteredSavedMovies(savedMovies);
      })
      .catch((err) => {
        setErrorState(true);
        setStatusCode(err.status);
        console.log(`Ошибка ${err.status}`);
      });
  }

  // сохранить фильм
  function handleSaveMovie(id) {
    api
      .saveMovie(filteredMovies.filter((item) => item.id === Number(id))[0])
      .then((res) => {
        const newSavedMovies = [...savedMovies, res];
        setSavedMovies(newSavedMovies);
        setFilteredSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        setErrorState(true);
        setStatusCode(err.status);
        setStatusInfo('saveMovie');
        console.log(`Ошибка ${err.status}`);
      });
  }

  // удалить фильм
  function handleDeleteMovie(id) {
    api
      .removeMovie(id)
      .then(() => {
        const newSavedMovies = savedMovies.filter((item) => item._id !== id);
        setSavedMovies(newSavedMovies);
        setFilteredSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        setErrorState(true);
        setStatusCode(err.status);
        setStatusInfo('deleteMovie');
        console.log(`Ошибка ${err.status}`);
      });
  }

  const handleClose = () => {
    setErrorState(false);
    setStatusCode('');
    setStatusInfo('');
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route path='/' element={<MainLayout isLoggedIn={isLoggedIn} />}>
            <Route index element={<Main />} />
            <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
              <Route
                path='movies'
                element={
                  <main>
                    <Movies
                      onSearch={getFilteredMovies}
                      onCheckbox={getShortMovies}
                      filteredMovies={filteredMovies}
                      savedMovies={savedMovies}
                      onSaveMovie={handleSaveMovie}
                      onDeleteMovie={handleDeleteMovie}
                      preloaderState={preloaderState}
                    />
                  </main>
                }
              />
            </Route>

            <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
              <Route
                path='saved-movies'
                element={
                  <main>
                    <SavedMovies
                      onSearch={getFilteredSavedMovies}
                      onCheckbox={getShortMoviesSaved}
                      filteredMovies={savedMovies}
                      savedMovies={filteredSavedMovies}
                      onSaveMovie={handleSaveMovie}
                      onDeleteMovie={handleDeleteMovie}
                      preloaderState={preloaderState}
                    />
                  </main>
                }
              />
            </Route>
          </Route>
          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
            <Route path='/profile' element={<ProfileLayout />}>
              <Route
                index
                element={
                  <Profile
                    onLogout={handleSignOut}
                    onUpdate={handleUpdateUser}
                    formState={formState}
                  />
                }
              />
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
          <Route
            path='/sign-in'
            element={<Login onAuth={handleLogin} formState={formState} />}
          />
          <Route
            path='/sign-up'
            element={
              <Register onRegister={handleRegister} formState={formState} />
            }
          />
        </Routes>
        <ErrorPopup
          statusCode={statusCode}
          onClose={handleClose}
          opened={errorState}
          statusInfo={statusInfo}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
