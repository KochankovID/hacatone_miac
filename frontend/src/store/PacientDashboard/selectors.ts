import { TStore } from 'store/rootTypes';

export const getMeasurements = (state: TStore) => {
  return state.patientDashboardsReducer.measurementsData;
};

