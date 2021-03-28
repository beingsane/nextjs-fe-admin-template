import { Store as ReduxStore } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import ReduxActionType from './Redux-Action-Type';
import ReduxStateType from './Redux-State-Type';

type DispatchObj = ThunkDispatch<ReduxStateType, void, ReduxActionType>;

type StoreTypeObj = ReduxStore<ReduxStateType, ReduxActionType> & {
  dispatch: DispatchObj;
};

export type Actions = undefined;

export type DispatchAction<T = void> = ThunkAction<
  Promise<T>,
  ReduxStateType,
  void,
  ReduxActionType
>;
export default StoreTypeObj;

export type { DispatchObj };