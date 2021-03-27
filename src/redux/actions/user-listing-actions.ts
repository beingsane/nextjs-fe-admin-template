import axios from 'axios';
import { FETCH_USERS_SUCCESS } from '../action-types';

export const getUsers: any = () => (dispatch) => axios({
  method: 'GET',
  url: 'http://localhost:3000/api/users',
  headers: []
}).then((response) => dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data.users }));