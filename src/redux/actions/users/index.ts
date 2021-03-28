import { Dispatch } from 'redux';
import { FetchUserListAction } from './types';
import { getUserList } from '../../../api/endpoints/User-API';
import ActionTypes from '../types';

/**
 * @function getUsers Action creator for fetching list of users.
 */
export const getUsers = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    const response = await getUserList();

    dispatch<FetchUserListAction>({
      type: ActionTypes.fetchUserListSuccess,
      payload: {
        data: response.data.users
      }
    });
  };
};