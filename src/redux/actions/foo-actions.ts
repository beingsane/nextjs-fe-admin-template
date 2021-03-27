import axios from 'axios';
import { FOO } from '../action-types';

export const getPosts: any = () => (dispatch) =>
  axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    headers: []
  }).then((response) => dispatch({ type: FOO, payload: response.data }));