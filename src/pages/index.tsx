import React from 'react';
import { wrapper } from '@redux/index';
import MainContainer from '@components/layout/Main-Container';
import { Grid, Typography } from '@material-ui/core';
import { getProjectDetail } from '@redux/actions/project-detail-actions';
import { NextPage } from 'next';

/**
 * @function IndexPage Page component for root application path.
 */
const IndexPage: NextPage = () => (
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
    await context.store.dispatch(getProjectDetail());
    return {
      props: {
        projectDetail: context.store.getState().projectDetail
      }
    };
  }
);

export default IndexPage;