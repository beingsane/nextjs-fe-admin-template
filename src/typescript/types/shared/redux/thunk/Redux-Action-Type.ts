import { Action as ReduxAction } from 'redux';

/**
 * @type ReduxActionType => Type anotation for signatures of Redux actions.
 */
type ReduxActionType<T extends string = string, P = void> = P extends void
  ? ReduxAction<T>
  : ReduxAction<T> & Readonly<{ payload: P }>;

export default ReduxActionType;