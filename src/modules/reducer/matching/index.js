import { START_MATCHING } from "../../action/matching";

const MatchingReducer = (state = null, action) => {
  switch (action.type) {
    case START_MATCHING:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default MatchingReducer;
