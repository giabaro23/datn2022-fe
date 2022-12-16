import {
    CREATE_CATEGORY,
    GET_CATEGORY,
    GET_CATEGORY_SUB,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,
} from "./types";
import CategoryService from "../../services/category/category.service";
// import CategoryService from "../../services/job/job.service";

// export const createCategory = (userId, categoryId, workTypeId, payTypeId, name, description, salary, startDate, endDate, dueDate, location) => async (dispatch) => {
//     try {
//         const res = await CategoryService.create({
//             userId,
//             categoryId,
//             workTypeId,
//             payTypeId,
//             name,
//             description,
//             salary,
//             startDate,
//             endDate,
//             dueDate,
//             location
//         });

//         dispatch({
//             type: CREATE_JOB,
//             payload: res.data,
//         });

//         return Promise.resolve(res.data);
//     } catch (err) {
//         return Promise.reject(err);
//     }
// };

export const getCategory = () => async (dispatch) => {
    try {
        const res = await CategoryService.get();

        dispatch({
            type: GET_CATEGORY,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
export const getCategorySub = (id) => async (dispatch) => {
    try {
        const res = await CategoryService.getSub(id);

        dispatch({
            type: GET_CATEGORY_SUB,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateJob = (id, data) => async (dispatch) => {
    try {
        const res = await CategoryService.update(id, data);

        dispatch({
            type: UPDATE_CATEGORY,
            payload: data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteJob = (id) => async (dispatch) => {
    try {
        await CategoryService.remove(id);

        dispatch({
            type: DELETE_CATEGORY,
            payload: {
                id
            },
        });
    } catch (err) {
        console.log(err);
    }
};

//   export const deleteAllJobs = () => async (dispatch) => {
//     try {
//       const res = await CategoryService.removeAll();

//       dispatch({
//         type: DELETE_ALL_JobS,
//         payload: res.data,
//       });

//       return Promise.resolve(res.data);
//     } catch (err) {
//       return Promise.reject(err);
//     }
//   };

//   export const findJobsByTitle = (title) => async (dispatch) => {
//     try {
//       const res = await CategoryService.findByTitle(title);

//       dispatch({
//         type: RETRIEVE_JobS,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };