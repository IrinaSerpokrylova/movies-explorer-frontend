export const MOVIES_API_URL = `https://api.nomoreparties.co`;

export const MAIN_API_URL = `https://api.movies.melomori.nomoreparties.co`;

export const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const DEVICE_WIDTH = {
  laptop: 1200,
  tablet: 976,
  miniTablet: 736,
  phone: 320,
};

export const CARDS_DEFAULT = {
  laptop: 16,
  tablet: 12,
  miniTablet: 8,
  phone: 5,
};

export const CARDS_ADD = {
  laptop: 4,
  tablet: 3,
  phone: 2,
};

export const SHORT_FILM_LENGTH = 40;

export const ERRORS = {
  200: `Данные успешно отправлены`,
  409: `Пользователь с таким email уже существует`,
  404: `Фильм с указанным _id не найден`,
  500: `На сервере произошла ошибка`,
  403: `Недостаточно прав для удаления фильма`,
  401: `Вы ввели неправильный логин или пароль`,
  400: `Переданы некорректные данные`,
  429: `Слишком много запросов`,
};

export const INVALID_STATUSES = {
  updateProfile: `При обновлении профиля произошла ошибка`,
  saveMovie: `Переданы некорректные данные при создании фильма`,
  createUser: `Переданы некорректные данные при создании пользователя`,
  deleteMovie: `Передан невалидный id`,
};

export const SUCCESS_STATUSES = {
  updateProfile: `Профиль успешно обновлен`,
  saveMovie: `Фильм успешно сохранен`,
};
