import {
    CREATE_CATEGORY,
    GET_CATEGORY
} from "../actions/category/types";

const initialState = [];

function categoryReducer(category = initialState, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case CREATE_CATEGORY:
            return [...category, payload];

        case  GET_CATEGORY:
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
            return category;
    }
};

export default categoryReducer;