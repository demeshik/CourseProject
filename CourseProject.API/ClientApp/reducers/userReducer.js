import { AUTHENTICATE_FAILED, AUTHENTICATE_LOADING, AUTHENTICATE_SUCCESS } from '../constants/reduxConstants';

const initialState = {
    username: "",
    roles: [],
    isAuthenticate: false,
    isFetching: true,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATE_LOADING:
            return { ...state, isFetching: true, isAuthenticate: false };
        case AUTHENTICATE_SUCCESS:
            return { ...state, username: action.data.username, roles: action.data.roles, isAuthenticate: true, isFetching: false };
        case AUTHENTICATE_FAILED:
            return { ...state, isAuthenticate: false, isFetching: false };
        default:
            return state;
    }
}