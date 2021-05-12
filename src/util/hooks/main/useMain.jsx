import { useDispatch } from "react-redux";
import { useSelectState } from "../default";
import { setLoginMode } from "../../../modules/action/main";

const useMain = () => {
  const dispatch = useDispatch();
  const state = useSelectState().main;
  const setState = {
    setLoginMode: (payload) => () => {
      dispatch(setLoginMode(payload));
    },
  };
  return { state, setState };
};

export default useMain;
