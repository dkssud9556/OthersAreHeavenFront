import { useSelectState } from "../default";

const useSignUp = () => {
  const state = useSelectState().signup;
  return { state };
};

export default useSignUp;
