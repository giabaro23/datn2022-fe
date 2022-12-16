import {
    CREATE_JOB,
    GET_JOB_ID,
    GET_LIST_BY_USER_ID,
    RETRIEVE_JOBS,
} from "../actions/job/types";

const initialState = [];

function jobReducer(jobs = initialState, action) {
    const {
        type,
        payload
    } = action;
   
    switch (type) {
        case CREATE_JOB:
            return [...jobs, payload];
        case GET_LIST_BY_USER_ID:
            console.log([...jobs, payload])
            return payload;
        case RETRIEVE_JOBS:
            return payload;
        case GET_JOB_ID:
            return payload;
            //   case UPDATE_TUTORIAL:
            //     return tutorials.map((tutorial) => {
            //       if (tutorial.id === payload.id) {
            //         return {
            //           ...tutorial,
            //           ...payload,
            //         };
            //       } else {
            //         return tutorial;
            //       }
            //     });

            //   case DELETE_TUTORIAL:
            //     return tutorials.filter(({ id }) => id !== payload.id);

            //   case DELETE_ALL_TUTORIALS:
            //     return [];

        default:
            return jobs;
    }
};

export default jobReducer;