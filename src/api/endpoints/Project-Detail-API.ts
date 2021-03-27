import { AxiosResponse } from 'axios';
import * as requestUtils from '../requestUtils';

/**
 * @function getDetails Fetch project details (projectName, etc.)
 */
export const getDetails = (): Promise<AxiosResponse<any>> => requestUtils.sendGet('/api/projectdetail/', false);