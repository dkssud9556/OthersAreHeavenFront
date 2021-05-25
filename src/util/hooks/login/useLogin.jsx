import { useSelectState } from "../default";

const useLogin = () => {
  const state = useSelectState().login;
  return { state };
};

export default useLogin;
