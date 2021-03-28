import { HYDRATE } from 'next-redux-wrapper';
import initialState from '@redux/initial-state';
import ReducerActionType from '@typescript/types/shared/redux/Reducer-Action-Type';
import UserModelType from '@typescript/types/app/models/User-Model-Type';
import ActionTypes from '@redux/actions/types';

/**
 * @function userReducer Users managment within Redux store.
 * @param state Management of slice of Redux state.
 * @param action Incoming request action that comes into this reducer.
 * @returns New user state.
 */
const userReducer = (state = initialState.users, action: ReducerActionType<{data: UserModelType[]}>): typeof initialState.users => {
  switch (action.type) {
  case HYDRATE:
    return {
      ...state,
      ...action.payload.data
    };
  case ActionTypes.fetchUserListSuccess:
    return {
      ...state,
      data: action.payload.data
    };
  default:
    return state;
  }
};

export default userReducer;