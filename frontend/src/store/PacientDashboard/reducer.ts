import { PatientActions } from "./actions";

const initialState: any = {
  measurementsData: [],
  patientInfo: {

  }
};

const patientDashboardsReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case PatientActions.getMeasurments:
      return {
        ...state,
        measurementsData: action.payload,
      };
      case PatientActions.getPatientInfo: 
      return{
        ...state,
        patientInfo: action.payload
      }
    default:
      return state;
  }
};

export default patientDashboardsReducer;
