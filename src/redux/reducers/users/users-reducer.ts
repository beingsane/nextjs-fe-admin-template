import { HYDRATE } from 'next-redux-wrapper';
import { FETCH_USER_LIST_SUCCESS } from '../../actionTypes';
import initialState from '../../initial-state';

/**
 * @type ActionPayloadType Reducer`s payload type.
 */
type ActionPayloadType = {
  type: string;
  payload: {
    data: any
  };
};

/**
 * @function usersReducer Reducer for user management.
 * @param state  Initial state for user`s reducer.
 * @param action Action that enters into user`s reducer.
 */
const usersReducer = (state = initialState.users, action: ActionPayloadType): typeof initialState.users => {
  switch (action.type) {
  case HYDRATE:
    return {
      ...state
    };
  case FETCH_USER_LIST_SUCCESS:  
    return [...action.payload.data];
  default:
    return state;
  }
};

export default usersReducer;