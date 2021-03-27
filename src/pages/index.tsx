import React from 'react';
import { getProjectDetail, getPosts } from '@redux/actions/foo-actions';
import { wrapper } from '@redux/index';
import { checkServerSideCookie } from '@redux/actions/auth-actions';
import MainContainer from '@components/layout/Main-Container';
import { Grid, Typography } from '@material-ui/core';

const IndexPage = () => (
  <MainContainer>
    <Grid container>
      <Grid item xs={10}>
        <Typography component="h1" variant="h5">
          Dashboard
        </Typography>
      </Grid>
    </Grid>
  </MainContainer>
);

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    checkServerSideCookie(context);
    await context.store.dispatch(getPosts());
    await context.store.dispatch(getProjectDetail());
    return {
      props: {
        projectDetail: context.store.getState().projectDetail
      }
    };
  }
);

export default IndexPage;