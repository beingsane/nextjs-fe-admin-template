import { FETCH_USERS_SUCCESS } from '../action-types';
import { getUserList } from '../../api/endpoints/User-API';

export const getUsers: any = () => (dispatch) => getUserList().then((response) => dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data.users }));