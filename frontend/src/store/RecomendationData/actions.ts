import axios from 'axios';
import { baseUrl } from 'helpers';

export enum RecomendationActions {
  getRecomendation = 'GET_RECOMENDATION',
  postRecomendation = 'POST_RECOMENDATION'
}

export const getRecomendationAction = (id: number) => {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.get(`${baseUrl}/recomendations/${id}/`);
      dispatch({ type: RecomendationActions.getRecomendation, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const postRecomendationAction = (id: number) => {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.get(`${baseUrl}/recomendations/${id}/`);
      dispatch({ type: RecomendationActions.postRecomendation, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};