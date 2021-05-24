import {
  SIGNUP,
  SIGNUP_EMAIL,
  SIGNUP_FAIL,
  SIGNUP_PASSWORD,
  SIGNUP_SUCCESS,
} from "./interface";

export const setSignupEmail = (payload) => ({
  type: SIGNUP_EMAIL,
  payload,
});

export const setSignupPassword = (payload) => ({
  type: SIGNUP_PASSWORD,
  payload,
});

export const signup = (payload) => ({
  type: SIGNUP,
  payload,
});

export const signupSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const signupFail = (payload) => ({
  type: SIGNUP_FAIL,
  payload,
});

export { SIGNUP_EMAIL, SIGNUP_PASSWORD, SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL };
