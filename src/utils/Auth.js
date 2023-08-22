import { MAIN_API_URL, HEADERS } from './const';

const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject({ status: res.status, message: res.json() });
};

export const register = ({ email, password, name }) => {
  return fetch(`${MAIN_API_URL}/signup`, {
    method: 'POST',
    headers: HEADERS,
    credentials: 'include',
    body: JSON.stringify({ email, password, name }),
  }).then(checkServerResponse);
};

export const authorize = ({ email, password }) => {
  return fetch(`${MAIN_API_URL}/signin`, {
    method: 'POST',
    headers: HEADERS,
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  }).then(checkServerResponse);
};

export const checkToken = () => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then(checkServerResponse);
};
