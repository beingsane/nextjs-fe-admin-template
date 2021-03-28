import { HYDRATE } from 'next-redux-wrapper';
import initialState from '@redux/initial-state';
import ReducerActionType from '@typescript/types/shared/redux/Reducer-Action-Type';

import ProjectDetailTypeModel from '@typescript/types/app/models/Project-Detail-Type-Model';
import actionTypes from '@redux/actions/types';

/**
 * @function projectDetailReducer Project detail managment within Redux store.
 * @param state Management of slice of Redux state.
 * @param action Incoming request action that comes into this reducer.
 * @returns New project details state.
 */
const projectDetailReducer = (state = initialState.projectDetail, action: ReducerActionType<ProjectDetailTypeModel>): typeof initialState.projectDetail => {
  switch (action.type) {
  case HYDRATE:
    return {
      ...state,
      ...action.payload
    };
  case actionTypes.fetchProjectDetailSuccess:
    return {
      ...state,
      name: action.payload.name
    };
  default:
    return state;
  }
};

export default projectDetailReducer;