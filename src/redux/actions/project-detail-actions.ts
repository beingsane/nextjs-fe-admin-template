import { FETCH_PROJECT_DETAIL_SUCCESS } from '../action-types';
import { getDetails } from '../../api/endpoints/Project-Detail-API';

export const getProjectDetail: any = () => (dispatch) => getDetails().then((response) => dispatch({ type: FETCH_PROJECT_DETAIL_SUCCESS, payload: response.data }));