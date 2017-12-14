import { PATIENT_SERVER_REQUEST, PATIENT_LOAD_DATA_SUCCESS, PATIENT_LOAD_INFO_SUCCESS, PATIENT_UPLOAD_SUCCESS, PATIENT_SERVER_ERROR } from '../constants/reduxConstants';

const initialState = {
    patients: [],
    currentPatient: null,
    isFetching: false,
    error: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PATIENT_SERVER_REQUEST:
            return { ...state, isFetching: true };

        case PATIENT_LOAD_DATA_SUCCESS:
            return { ...state, patients: [ ...state.patients, ...action.data], isFetching: false };

        case PATIENT_LOAD_INFO_SUCCESS:
            return { ...state, currentPatient: action.data, isFetching: false };

        case PATIENT_UPLOAD_SUCCESS:
            const modifiedPatients = [ ...state.patients ];

            modifiedPatients.push(action.data);

            return { ...state, patients: [...modifiedPatients], isFetching: false };

        case PATIENT_SERVER_ERROR:
            return { ...state, error: action.data, isFetching: false };

        default:
            return state;
    }
}