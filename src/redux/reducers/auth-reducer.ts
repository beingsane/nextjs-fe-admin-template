import { HYDRATE } from 'next-redux-wrapper';
import { AUTHENTICATE, DEAUTHENTICATE } from '../action-types';

const authReducer = (state = { token: null }, action) => {
  switch (action.type) {
  case HYDRATE:
    return {
      ...state,
      ...action.payload
    };
  case AUTHENTICATE:
    return { ...state, token: action.payload };
  case DEAUTHENTICATE:
    return { token: null };
  default:
    return state;
  }
};

export default authReducer;