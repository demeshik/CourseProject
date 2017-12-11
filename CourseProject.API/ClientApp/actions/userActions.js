import { AUTHENTICATE_FAILED, AUTHENTICATE_LOADING, AUTHENTICATE_SUCCESS } from '../constants/reduxConstants';

export function authenticate() {
    return function (dispatch) {
        dispatch({
            type: AUTHENTICATE_LOADING,
            data: null,
        });

        fetch('/api/session', {
            credentials: 'same-origin',
        })
            .then(response => response.json())
            .then(userInfo => {
                dispatch({
                    type: AUTHENTICATE_SUCCESS,
                    data: userInfo,
                })
            })
            .catch(error => {
                dispatch({
                    type: AUTHENTICATE_FAILED,
                    data: null,
                })
            })
    }
}

export function login(userLoginModel) {
    return function(dispatch) {
        dispatch({
            type: AUTHENTICATE_LOADING,
            data: null,
        });

        fetch('/api/session', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify(userLoginModel)
        })
            .then(response => response.json())
            .then(userInfo => {
                dispatch({
                    type: AUTHENTICATE_SUCCESS,
                    data: userInfo,
                })
            })
    }
}