import axios from 'axios';
import { FETCH_PROJECT_DETAIL_SUCCESS } from '../action-types';

export const getProjectDetail: any = () => (dispatch) => axios({
  method: 'GET',
  url: 'http://localhost:3000/api/projectdetail',
  headers: []
}).then((response) => dispatch({ type: FETCH_PROJECT_DETAIL_SUCCESS, payload: response.data }));