import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import fooReducer from './foo-reducer';

const rootReducer = combineReducers({
  authentication: authReducer,
  foo: fooReducer
});

export default rootReducer;