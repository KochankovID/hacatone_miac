import { RecomendationActions } from "./actions";

const initialState: any = {
  recomendationsData: []
};

const recomendationDataReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case RecomendationActions.getRecomendation:
      return {
        ...state,
        recomendationsData: action.payload,
      };
    default:
      return state;
  }
};

export default recomendationDataReducer;
