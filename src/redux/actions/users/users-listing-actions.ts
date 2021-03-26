
import axios from 'axios';
import * as actionTypes from '@redux/actionTypes';
import { Dispatch } from 'redux';

/**
 * @function fetchUserList - Action creator for fetching list of users..
 */
 export const fetchUserList: any = () => async (dispatch: Dispatch): Promise<void> => {
    try {
      const res = await axios.get('https://nextjs-fe-admin.azurewebsites.net/api/users');
      console.log(res);
      debugger;
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