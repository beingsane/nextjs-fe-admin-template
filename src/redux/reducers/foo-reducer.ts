import { HYDRATE } from 'next-redux-wrapper';
import { FOO } from '../action-types';
const reducer = (state = { foo: 'Test' }, action) => {
  switch (action.type) {
  case HYDRATE:
    return {
      ...state,
      ...action.payload
    };
  case FOO:
    // (action.payload);
    return action.payload;
  default:
    return state;
  }
};

export default reducer;