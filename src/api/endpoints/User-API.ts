import UserModelType from '@typescript/types/app/models/User-Model-Type';
import { AxiosResponse } from 'axios';
import * as requestUtils from '../requestUtils';

/**
 * @function getUserList Fetch list of users without any restrictions.
 */
export const getUserList = (): Promise<AxiosResponse<UserModelType>> => requestUtils.sendGet('/api/users', false);