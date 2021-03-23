import * as actionTypes from '@redux/actionTypes';
import { Dispatch } from 'redux';

/**
 * @function fetchProjectDetail - REST API call to fetch current details about project.
 * @returns {object} - Action object with type "FETCH_PROJECT_DETAIL"
 */
export const fetchProjectDetail = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch({
      type: actionTypes.FETCH_PROJECT_DETAIL_SUCCESS,
      payload: {
        data: {
          name: 'Test projectname'
        }
      }
    });
  } catch {
    dispatch({
      type: actionTypes.FETCH_PROJECT_DETAIL_FAIL
    });
  }
};