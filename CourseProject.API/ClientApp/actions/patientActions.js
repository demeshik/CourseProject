import { PATIENT_SERVER_REQUEST, PATIENT_UPLOAD_SUCCESS, PATIENT_SERVER_ERROR } from '../constants/reduxConstants';

export function createPatient(patientCreationModel) {
    return function (dispatch) {
        dispatch({
            type: PATIENT_SERVER_REQUEST,
            data: null,
        });

        fetch('/api/patients', {
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify(patientCreationModel)
        })
            .then(response => response.json())
            .then(patientInfo => {
                dispatch({
                    type: PATIENT_UPLOAD_SUCCESS,
                    data: patientInfo,
                })
            })
            .catch(error => {
                dispatch({
                    type: PATIENT_SERVER_ERROR,
                    data: JSON.stringify(error),
                })
            })
    }
}