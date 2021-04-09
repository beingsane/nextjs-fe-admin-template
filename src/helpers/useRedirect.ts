import Router from 'next/router';
import { ServerResponse } from 'http';

export const useRedirect = (route: string, server?: ServerResponse): void => {
  // add the redirected query param for debugging
  if (server) {
    // @see https://github.com/zeit/next.js/wiki/Redirecting-in-%60getInitialProps%60
    // server rendered pages need to do a server redirect
    server.writeHead(302, {
      Location: route
    });
    server.end();
  } else {
    // only client side pages have access to next/router
    Router.push(route);
  }
};