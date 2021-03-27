import { HYDRATE } from 'next-redux-wrapper';
import initialState from '@redux/initial-state';
import { FETCH_PROJECT_DETAIL_SUCCESS } from '../action-types';

const reducer = (state = initialState.projectDetail, action) => {
  switch (action.type) {
  case HYDRATE:
    return {
      ...state,
      ...action.payload
    };
  case FETCH_PROJECT_DETAIL_SUCCESS:
    return {
      ...state,
      name: action.payload.name
    };
  default:
    return state;
  }
};

export default reducer;