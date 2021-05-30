import { LOGIN_MODE } from "./interface";

export const setLoginMode = (payload) => ({
  type: LOGIN_MODE,
  payload,
});

export { LOGIN_MODE };
