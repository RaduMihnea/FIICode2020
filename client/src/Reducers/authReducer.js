import {AUTH_LOGOUT, AUTH_LOGIN} from '../Actions/Auth/authActionTypes';

const initialState = {
    isLoggedIn: false,
    user: {
        id: 0,
        name: "guest",
    }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                isLoggedIn: true,
                user: action.user,
            };
        case AUTH_LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default authReducer;
