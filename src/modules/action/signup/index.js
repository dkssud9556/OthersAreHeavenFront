import { SIGNUP_EMAIL, SIGNUP_PASSWORD } from "./interface";

export const setSignupEmail = (payload) => ({
  type: SIGNUP_EMAIL,
  payload,
});

export const setSignupPassword = (payload) => ({
  type: SIGNUP_PASSWORD,
  payload,
});

export { SIGNUP_EMAIL, SIGNUP_PASSWORD };
