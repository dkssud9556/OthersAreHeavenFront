import { useDispatch } from "react-redux";
import {
  setSignupEmail,
  setSignupPassword,
} from "../../../modules/action/signup";
import { useSelectState } from "../default";

const useSignUp = () => {
  const dispatch = useDispatch();
  const state = useSelectState().signup;
  const setState = {
    setSignupEmail: (payload) => {
      dispatch(setSignupEmail(payload));
    },
    setSignupPassword: (payload) => {
      dispatch(setSignupPassword(payload));
    },
  };
  return { state, setState };
};

export default useSignUp;
