import { AxiosResponse } from 'axios';
import * as requestUtils from '../requestUtils';

/**
 * @function getUserList Fetch list of users without any restrictions.
 */
export const getUserList = (): Promise<AxiosResponse<any>> => requestUtils.sendGet('/api/users', false);