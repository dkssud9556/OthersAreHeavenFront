import { PASSWORD, EMAIL } from "./interface";

export const setEmail = (payload) => ({
  type: EMAIL,
  payload,
});

export const setPassword = (payload) => ({
  type: PASSWORD,
  payload,
});

export { EMAIL, PASSWORD };
