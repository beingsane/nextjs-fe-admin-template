/**
 * @type ReduxActionType Type action definition that is shared among of all reducers.
 */
type ReducerActionType<T> = {
    payload: T,
    type: string;
}

export default ReducerActionType;