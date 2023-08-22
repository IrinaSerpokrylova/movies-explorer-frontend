import { MAIN_API_URL, HEADERS, MOVIES_API_URL } from './const';

class Api {
  constructor({ apiURL, headers, moviesURL }) {
    this._url = apiURL;
    this._headers = headers;
    this._moviesURL = moviesURL;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject({ status: res.status, message: res.json() });
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      credentials: 'include',
    }).then((res) => this._checkResponse(res));
  }

  updateUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then((res) => this._checkResponse(res));
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    }).then((res) => this._checkResponse(res));
  }

  saveMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: data.country,
        description: data.description,
        director: data.director,
        duration: data.duration,
        image: `${this._moviesURL}${data.image.url}`,
        nameEN: data.nameEN,
        nameRU: data.nameRU,
        movieId: data.id,
        thumbnail: `${this._moviesURL}${data.image.formats.thumbnail.url}`,
        trailerLink: data.trailerLink,
        year: data.year,
      }),
    }).then((res) => this._checkResponse(res));
  }

  removeMovie(movieID) {
    return fetch(`${this._url}/movies/${movieID}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    }).then((res) => this._checkResponse(res));
  }

  signOut() {
    return fetch(`${this._url}/signout`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    }).then((res) => this._checkResponse(res));
  }
}

const api = new Api({
  apiURL: MAIN_API_URL,
  headers: HEADERS,
  moviesURL: MOVIES_API_URL,
});

export default api;
