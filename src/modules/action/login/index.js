import { LOGIN_EMAIL, LOGIN_PASSWORD } from "./interface";

export const setLoginEmail = (payload) => ({
  type: LOGIN_EMAIL,
  payload,
});

export const setLoginPassword = (payload) => ({
  type: LOGIN_PASSWORD,
  payload,
});

export { LOGIN_EMAIL, LOGIN_PASSWORD };
