import { GO_TO_MATCH, LOGIN_MODE } from "./interface";

export const setLoginMode = (payload) => ({
  type: LOGIN_MODE,
  payload,
});

export const goToMatch = (payload) => ({
  type: GO_TO_MATCH,
  payload,
});

export { LOGIN_MODE };
