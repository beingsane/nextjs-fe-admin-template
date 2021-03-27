import { combineReducers } from 'redux';
import projectDetailReducer from './project-detail-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
  projectDetail: projectDetailReducer,
  users: userReducer
});

export default rootReducer;