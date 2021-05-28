import { GO_TO_MATCHING } from "../../action/match/interface";

const MatchReducer = (state = null, action) => {
  switch (action.type) {
    case GO_TO_MATCHING:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default MatchReducer;
