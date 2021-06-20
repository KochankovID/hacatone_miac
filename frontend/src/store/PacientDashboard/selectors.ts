import { TStore } from 'store/rootTypes';

export const getMeasurements = (state: TStore) => {
  return state.patientDashboardsReducer.measurementsData;
};

export const getPatientInfo = (state: TStore) => {
  return state.patientDashboardsReducer.patientInfo;
};