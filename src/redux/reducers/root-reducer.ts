import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import projectDetailReducer from './project-detail-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
  authentication: authReducer,
  projectDetail: projectDetailReducer,
  users: userReducer
});

export default rootReducer;