import { HYDRATE } from 'next-redux-wrapper';
import initialState from '@redux/initial-state';
import ReducerActionType from '@typescript/types/shared/redux/Reducer-Action-Type';
import ProjectDetailTypeModel from '@typescript/types/app/models/Project-Detail-Type-Model';
import { FETCH_PROJECT_DETAIL_SUCCESS } from '../action-types';

/**
 * @function projectDetailReducer Slice state for manaing project details.
 * @param state Management of slice of Redux state.
 * @param action Incoming request action that comes into this reducer.
 * @returns New slice state for project details.
 */
const projectDetailReducer = (state = initialState.projectDetail, action: ReducerActionType<ProjectDetailTypeModel>): typeof initialState.projectDetail => {
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

export default projectDetailReducer;