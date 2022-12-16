import {
    GET_USER,
    GET_USER_ALL,
    UPDATE_USER
} from "../actions/auth/types";

const initialState = [];

function getUserReducer(users = initialState, action) {
    const {
        type,
        payload
    } = action;
    switch (type) {
        case GET_USER_ALL:
            return payload;
        default:
            return users;
    }
};

export default getUserReducer;