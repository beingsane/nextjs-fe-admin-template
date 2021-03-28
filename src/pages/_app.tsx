import GlobalStyle from '@components/styled-components/Global-Style';
import { StylesProvider } from '@material-ui/core';
import { wrapper } from '@redux/index';
import Head from 'next/head';
import React from 'react';
import { appWithTranslation } from 'src/i18n';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Patrik Duch, Enterprise Solutions Architect</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <StylesProvider injectFirst>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </div>

  );
};

export default wrapper.withRedux(appWithTranslation(MyApp));