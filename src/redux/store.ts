import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import reducer from './reducers/root-reducer';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const initStore = () => { return createStore(reducer, bindMiddleware([thunkMiddleware])); };

export const store = createStore(reducer, bindMiddleware([thunkMiddleware]));

export const wrapper = createWrapper(initStore);