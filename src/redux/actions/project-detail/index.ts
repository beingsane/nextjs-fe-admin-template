import ActionTypes from '@redux/actions/types';
import { Dispatch } from 'redux';
import { getDetails } from '@api/endpoints/Project-Detail-API';
import { FetchProjectDetailAction } from './types';

/**
 * @function getProjectDetail Get project details.
 */
export const getProjectDetail = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    const response = await getDetails();

    dispatch<FetchProjectDetailAction>({
      type: ActionTypes.fetchProjectDetailSuccess,
      payload: response.data
    });
  };
};