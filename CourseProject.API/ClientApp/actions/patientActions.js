import { PATIENT_SERVER_REQUEST, PATIENT_LOAD_DATA_SUCCESS, PATIENT_UPLOAD_SUCCESS, PATIENT_LOAD_INFO_SUCCESS, PATIENT_SERVER_ERROR } from '../constants/reduxConstants';
import { PER_PAGE } from '../constants/globalConstants';

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

export function loadPatientsInfo(page) {
    return function (dispatch) {
        dispatch({
            type: PATIENT_SERVER_REQUEST,
            data: null,
        });

        fetch(`/api/patients?count=${PER_PAGE}&page=${page}`, {
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(patients => {
                dispatch({
                    type: PATIENT_LOAD_DATA_SUCCESS,
                    data: patients,
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

export function loadPatientInfo(id) {
    return function (dispatch) {
        dispatch({
            type: PATIENT_SERVER_REQUEST,
            data: null,
        });

        fetch(`/api/patients/${id}`, {
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(patient => {
                dispatch({
                    type: PATIENT_LOAD_INFO_SUCCESS,
                    data: patient,
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