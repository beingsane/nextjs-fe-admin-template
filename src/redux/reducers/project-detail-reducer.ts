import { HYDRATE } from 'next-redux-wrapper';
import initialState from '@redux/initial-state';
import { FETCH_PROJECT_DETAIL } from '../action-types';

const reducer = (state = initialState.projectDetail, action) => {
  switch (action.type) {
  case HYDRATE:
    return {
      ...state,
      ...action.payload
    };
  case FETCH_PROJECT_DETAIL:
    // (action.payload);
    console.log('FETCHPROJECTDETAIL reducer');
    console.log(action.payload);
    return {
      ...state,
      name: action.payload.name
    };
  default:
    return state;
  }
};

export default reducer;