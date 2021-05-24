import {
  LOGIN_EMAIL,
  LOGIN_FAIL,
  LOGIN_PASSWORD,
  LOGIN_SUCCESS,
  LOGIN,
} from "./interface";

export const setLoginEmail = (payload) => ({
  type: LOGIN_EMAIL,
  payload,
});

export const setLoginPassword = (payload) => ({
  type: LOGIN_PASSWORD,
  payload,
});

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFail = (payload) => ({
  type: LOGIN_FAIL,
  payload,
});

export { LOGIN_EMAIL, LOGIN_PASSWORD, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL };
