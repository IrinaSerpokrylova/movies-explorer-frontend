import { MOVIES_API_URL } from './const';
class Api {
  constructor({ moviesURL }) {
    this._moviesURL = moviesURL;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject({ status: res.status, message: res.json() });
  }

  getMovies() {
    return fetch(`${this._moviesURL}/beatfilm-movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => this._checkResponse(res));
  }
}

const api = new Api({
  moviesURL: MOVIES_API_URL,
});

export default api;
