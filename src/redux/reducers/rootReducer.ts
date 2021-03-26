import { combineReducers } from 'redux';
import projectDetailReducer from './project-detail/project-detail-reducer';
import usersReducer from './users/users-reducer';

const rootReducer = combineReducers({
  projectDetail: projectDetailReducer,
  users: usersReducer
});

export default rootReducer;