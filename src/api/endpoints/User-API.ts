import UserModelType from '@typescript/types/app/models/User-Model-Type';
import { AxiosResponse } from 'axios';
import * as requestUtils from '../requestUtils';

/**
 * @function getUserList Fetch list of user-management without any restrictions.
 */
export const getUserList = (): Promise<AxiosResponse<{users: UserModelType[]}>> => { return requestUtils.sendGet('/api/users', false); };
