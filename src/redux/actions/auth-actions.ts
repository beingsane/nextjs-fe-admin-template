import Router from 'next/router';
import cookie from 'js-cookie';
import { AUTHENTICATE, DEAUTHENTICATE } from '../action-types';

export const authenticate = (user) => (dispatch) =>
  fetch('https://aqueous-meadow-07678.herokuapp.com/api/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then((data) => data.json())
    .then((response) => {
      setCookie('token', response.token);
      Router.push('/');
      dispatch({ type: AUTHENTICATE, payload: response.token });
    })
    .catch((err) => console.log(err));

// gets the token from the cookie and saves it in the store
export const reauthenticate = (token) => (dispatch) => {
  dispatch({ type: AUTHENTICATE, payload: token });
};

// removing the token
export const deauthenticate = () => (dispatch) => {
  removeCookie('token');
  Router.push('/');
  dispatch({ type: DEAUTHENTICATE });
};

export const checkServerSideCookie = (ctx) => {
  const token = getCookie('token', ctx.req);
  if (token) {
    ctx.store.dispatch(reauthenticate(token));
  }
};
/**
 * cookie helper methods
 */

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: '/'
    });
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1
    });
  }
};

export const getCookie = (key, req) => process.browser
  ? getCookieFromBrowser(key)
  : getCookieFromServer(key, req);

export const getCookieFromBrowser = (key) => cookie.get(key);

export const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split('=')[1];
};