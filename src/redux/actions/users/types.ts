import UserModelType from '@typescript/types/app/models/User-Model-Type';
import ActionTypes from '../types';

/**
 * @interface FetchUserListAction Interface's action contract for fetching list of user-management.
 */
export interface FetchUserListAction {
    type: ActionTypes.fetchUserListSuccess;
    payload: {
        data: UserModelType[];
    }
}