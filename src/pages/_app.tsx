import { wrapper } from '@redux/index';
import React from 'react';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);