
import axios from 'axios';
import * as actionTypes from '@redux/actionTypes';
import { Dispatch } from 'redux';

/**
 * @function fetchUserList - Action creator for fetching list of users..
 */
 export const fetchUserList: any = () => async (dispatch: Dispatch): Promise<void> => {
    try {
      const res = await axios.get('http://localhost:3000/api/users');
      console.log(res);
      dispatch({
        type: actionTypes.FETCH_USER_LIST_SUCCESS,
        payload: {
          data: res.data.users
        }
      });
    } catch(err) {
      console.log(err);
      dispatch({
        type: actionTypes.FETCH_USER_LIST_FAIL
      });
    }
  };