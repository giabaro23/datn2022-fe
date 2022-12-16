import {
    CREATE_JOB,
    RETRIEVE_JOBS,
    UPDATE_JOB,
    DELETE_JOB,
    GET_JOB_ID,
    GET_LIST_BY_USER_ID
} from "./types";

import JobService from "../../services/job/job.service";

export const createJob = ({userId, topicName, workTypeName, payTypeName, name, description, salaryMin, salaryMax, dueDate, location, status, skills}) => async (dispatch) => {
    try {
        const res = await JobService.create({
            userId,
            topicName,
            workTypeName,
            payTypeName,
            name,
            description,
            salaryMin,
            salaryMax,
            dueDate,
            location,
            status,
            skills
        });

        dispatch({
            type: CREATE_JOB,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveJobs = () => async (dispatch) => {
    try {
        const res = await JobService.getAll();

        dispatch({
            type: RETRIEVE_JOBS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
export const getListJobByUserId = ({userId}) => async (dispatch) => {
    try {
        const res = await JobService.getListByUserId({userId});
        dispatch({
            type: GET_LIST_BY_USER_ID,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateJob = (id, data) => async (dispatch) => {
    try {
        const res = await JobService.update(id, data);

        dispatch({
            type: UPDATE_JOB,
            payload: data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteJob = (id) => async (dispatch) => {
    try {
        await JobService.remove(id);

        dispatch({
            type: DELETE_JOB,
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
//       const res = await JobService.removeAll();

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
//       const res = await JobService.findByTitle(title);

//       dispatch({
//         type: RETRIEVE_JobS,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };