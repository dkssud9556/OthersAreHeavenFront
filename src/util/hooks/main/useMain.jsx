import { useDispatch } from "react-redux";
import { useSelectState } from "../default";

const useMain = () => {
  const state = useSelectState().main;
  return { state };
};

export default useMain;
