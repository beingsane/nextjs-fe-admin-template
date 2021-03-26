import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/rootReducer';

// Middleware extension that will be applied
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const initStore = () => createStore(reducer, bindMiddleware([thunkMiddleware]));
export const store = createStore(reducer, bindMiddleware([thunkMiddleware]));
export const wrapper = createWrapper(initStore);