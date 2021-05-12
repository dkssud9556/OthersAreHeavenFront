import { useDispatch } from "react-redux";
import { useSelectState } from "../default";
import { setLoginEmail, setLoginPassword } from "../../../modules/action/login";

const useLogin = () => {
  const dispatch = useDispatch();
  const state = useSelectState().login;
  const setState = {
    setLoginEmail: (payload) => {
      dispatch(setLoginEmail(payload));
    },
    setLoginPassword: (payload) => {
      dispatch(setLoginPassword(payload));
    },
  };
  return { state, setState };
};

export default useLogin;
