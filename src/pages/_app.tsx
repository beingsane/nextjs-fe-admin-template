import App from 'next/app';
import { CssBaseline } from '@material-ui/core';
import GlobalStyle from '@components/styled-components/Global-Style';
import Head from 'next/head';
import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from 'src/i18n';
import theme from '../theme';
import { wrapper } from '../redux/store';
import { fetchProjectDetail } from '@redux/actions/project-detail/project-detail-actions';

/**
 * @class StartupApp Configuration component that is called for each page component.
 */
class StartupApp extends App {
  /**
   * @function getInitialProps Get initial props for particular page component.
   * @param Component page component of particular request.
   * @param ctx context instance of particular request.
   * @returns page properties.
   */
  static async getInitialProps({ Component, ctx }) {

    ctx.store.dispatch(fetchProjectDetail());

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    // Anything returned here can be access by the client
    return { pageProps };
  }

  render() {
    // Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
    const { Component, pageProps } = this.props;

    return (
      <>
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
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </StylesProvider>
      </>
    );
  }
}

export default wrapper.withRedux(appWithTranslation(StartupApp));