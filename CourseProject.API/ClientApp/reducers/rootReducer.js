import { combineReducers } from 'redux';
import userReducer from './userReducer';
import patientReducer from './patientReducer'

export default combineReducers({
	user: userReducer,
	patient: patientReducer,
});