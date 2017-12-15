import * as Constants from '../constants/websocketConstants';

export function open() {
    return function (dispatch) {
        dispatch({
            type: Constants.SOCKET_CONNECTION_REQUEST,
            data: null,
        })


    }
}