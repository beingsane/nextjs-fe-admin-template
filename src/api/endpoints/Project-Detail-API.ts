import ProjectDetailTypeModel from '@typescript/types/app/models/Project-Detail-Type-Model';
import { AxiosResponse } from 'axios';
import * as requestUtils from '../requestUtils';

/**
 * @function getDetails Fetch project details (projectName, etc.)
 */
export const getDetails = (): Promise<AxiosResponse<ProjectDetailTypeModel>> => { return requestUtils.sendGet('/api/projectdetail/', false); };