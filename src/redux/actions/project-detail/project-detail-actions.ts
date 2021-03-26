import axios from 'axios';
import * as actionTypes from '@redux/actionTypes';
import { Dispatch } from 'redux';

/**
 * @function fetchProjectDetail - REST API call to fetch current details about project.
 * @returns {object} - Action object with type "FETCH_PROJECT_DETAIL"
 */
export const fetchProjectDetail: any = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    const res = await axios.get('http://localhost:3000/api/projectdetail');
    dispatch({
      type: actionTypes.FETCH_PROJECT_DETAIL_SUCCESS,
      payload: {
        data: {
          name: res.data.name
        }
      }
    });
  } catch(err) {
    console.log(err);
    dispatch({
      type: actionTypes.FETCH_PROJECT_DETAIL_FAIL
    });
  }
};