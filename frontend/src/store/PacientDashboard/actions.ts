import axios from 'axios';
import { baseUrl } from 'helpers';

export enum PatientActions {
  getMeasurments = 'GET_MEASURMENTS',
  getPeriodMeasurments = 'GET_PERIOD_MEASURMENTS',
}

export const getMeasurmentsAction = (id: number) => {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.get(`${baseUrl}/measurements/${id}/`);
      dispatch({ type: PatientActions.getMeasurments, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getPeriodMeasurmentsAction = (value: {id: number, start: string, end: string}) => {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.get(`${baseUrl}/measurements/${value.id}/`, {
        params: {
          created_at__gte: value.start,
          created_at__lte: value.end,
        }});
      dispatch({ type: PatientActions.getMeasurments, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};