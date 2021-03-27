import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import fooReducer from './foo-reducer';
import projectDetailReducer from './project-detail-reducer';

const rootReducer = combineReducers({
  authentication: authReducer,
  foo: fooReducer,
  projectDetail: projectDetailReducer
});

export default rootReducer;