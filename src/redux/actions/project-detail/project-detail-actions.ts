import * as actionTypes from '@redux/actionTypes';
import { Dispatch } from 'redux';

/**
 * @function fetchProjectDetail - REST API call to fetch current details about project.
 * @returns {object} - Action object with type "FETCH_PROJECT_DETAIL"
 */
export const fetchProjectDetail: any = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch({
      type: actionTypes.FETCH_PROJECT_DETAIL_SUCCESS,
      payload: {
        data: {
          name: 'Nextjs-Admin-Fe-template'
        }
      }
    });
  } catch {
    dispatch({
      type: actionTypes.FETCH_PROJECT_DETAIL_FAIL
    });
  }
};