import axios from 'axios';
import { FOO, FETCH_PROJECT_DETAIL } from '../action-types';

export const getPosts: any = () => (dispatch) =>
  axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    headers: []
  }).then((response) => dispatch({ type: FOO, payload: response.data }));

export const getProjectDetail: any = () => (dispatch) => axios({
  method: 'GET',
  url: 'http://localhost:3000/api/projectdetail',
  headers: []
}).then((response) => dispatch({ type: FETCH_PROJECT_DETAIL, payload: response.data }));