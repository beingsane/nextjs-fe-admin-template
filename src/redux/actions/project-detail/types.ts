import ProjectDetailTypeModel from '@typescript/types/app/models/Project-Detail-Type-Model';
import ActionTypes from '../types';

/**
 * @interface FetchProjectDetailAction Interface's action contract for fetching basic project information (project name, etc).
 */
export interface FetchProjectDetailAction {
    type: ActionTypes.fetchProjectDetailSuccess;
    payload: ProjectDetailTypeModel;
}