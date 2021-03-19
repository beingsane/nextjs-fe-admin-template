import { FETCH_PROJECT_DETAIL_SUCCESS } from "../../actionTypes";
import { HYDRATE } from 'next-redux-wrapper';
import ProjectDetailTypeModel from "@typescript/types/app/models/Project-Detail-Type-Model";
import initialState from "../../initial-state";

/**
 * @type ActionPayloadType Reducer`s payload type.
 */
type ActionPayloadType = {
  type: string;
  payload: ProjectDetailTypeModel;
};

/**
 * @function projectDetailReducer => Project detail info management.
 * @param state   => Initial state for project detail`s reducer.
 * @param action  => Action that enters into project detail`s reducer.
 */
const projectDetailReducer = (state = initialState, action: ActionPayloadType): typeof initialState => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
      };
    case FETCH_PROJECT_DETAIL_SUCCESS:
      return { ...state, };
    default:
      return state;
  }
};

export default projectDetailReducer;
