import { PATIENT_SERVER_REQUEST, PATIENT_UPLOAD_SUCCESS, PATIENT_SERVER_ERROR } from '../constants/reduxConstants';

const initialState = {
    patients: [
        {
            "avatar": "https://pp.userapi.com/c622418/v622418907/21ca9/aJST0VX6r2M.jpg",
            "id": 1,
            "name": "Alexander",
            "surname": "Demeshchik",
            "bornDate": "29-09-2017",
        },
        {
            "avatar": "https://pp.userapi.com/c639827/v639827880/118ed/cF0COFbU_j8.jpg",
            "id": 2,
            "name": "Julia",
            "surname": "Koptevich ",
            "bornDate": "29-10-2017",
        },
        {
            "avatar": "https://musicpianoworld.files.wordpress.com/2011/12/eminem-rap1.jpg",
            "id": 3,
            "name": "Marshall",
            "surname": "Matters",
            "bornDate": "29-10-2016",
        }
    ],
    currentPatient: null,
    isFetching: false,
    error: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PATIENT_SERVER_REQUEST:
            return { ...state, isFetching: true };

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