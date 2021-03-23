import { combineReducers } from 'redux';
import projectDetailReducer from './project-detail/project-detail-reducer';

const rootReducer = combineReducers({
  projectDetail: projectDetailReducer
});

export default rootReducer;