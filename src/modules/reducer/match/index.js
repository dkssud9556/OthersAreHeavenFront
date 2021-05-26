import { START_MATCH } from "../../action/match";

const MatchReducer = (state = null, action) => {
  switch (action.type) {
    case START_MATCH:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default MatchReducer;
