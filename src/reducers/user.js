import {
    CHANGE_PASSWORD,
    GET_USER_ALL
} from "../actions/auth/types";

const initialState = {
    listUser: [],
};

function userReducer(state = initialState, action) {
    const {
        type,
        payload
    } = action;
    switch (type) {
        //TODO: change late
        case GET_USER_ALL:
            return {...state, listUser: {...payload}};
        case CHANGE_PASSWORD:
            console.log(payload)
            return {...state, user: payload}
        default:
            return {...state};
    }
};

export default userReducer;