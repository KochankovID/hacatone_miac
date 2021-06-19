import axios from 'axios';
import { baseUrl } from 'helpers';

export enum PatientActions {
  getMeasurments = 'GET_MEASURMENTS',
}

export const getMeasurmentsAction = (id: number) => {
  console.log('!!!121')
  return async (dispatch: any) => {
    try {
      const { data } = await axios.get(`${baseUrl}/measurements/${id}/`);
      dispatch({ type: PatientActions.getMeasurments, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};
