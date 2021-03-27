import { HYDRATE } from 'next-redux-wrapper';
import initialState from '@redux/initial-state';
import { FETCH_USERS_SUCCESS } from '../action-types';

const reducer = (state = initialState.users, action) => {
  switch (action.type) {
  case HYDRATE:
    return {
      ...state,
      ...action.payload
    };
  case FETCH_USERS_SUCCESS:
    return {
      ...state,
      data: action.payload
    };
  default:
    return state;
  }
};

export default reducer;