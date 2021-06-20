import { combineReducers } from 'redux';
import authDataReducer from './AuthData/reducer';
import patientDashboardsReducer from './PacientDashboard/reducer';
import recomendationDataReducer from './RecomendationData/reducer';

const rootReducer = combineReducers({ authData: authDataReducer, patientDashboardsReducer: patientDashboardsReducer, recomendationDataReducer: recomendationDataReducer });

export default rootReducer;
