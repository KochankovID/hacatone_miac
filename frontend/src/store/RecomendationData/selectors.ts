import { TStore } from 'store/rootTypes';

export const getRecomendations = (state: TStore) => {
  return state.recomendationDataReducer.recomendationsData;
};

