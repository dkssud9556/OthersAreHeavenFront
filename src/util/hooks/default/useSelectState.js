import { useSelector } from "react-redux";

const useSelectState = () => {
  return useSelector((state) => state);
};

export default useSelectState;
