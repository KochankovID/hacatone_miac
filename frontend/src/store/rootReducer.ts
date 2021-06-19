import { combineReducers } from 'redux';
import authDataReducer from './AuthData/reducer';
import patientDashboardsReducer from './PacientDashboard/reducer';

const rootReducer = combineReducers({ authData: authDataReducer, patientDashboardsReducer: patientDashboardsReducer });

export default rootReducer;
