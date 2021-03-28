import React from 'react';
import MainContainer from '@components/layout/Main-Container';
import { Grid, Typography } from '@material-ui/core';
import { NextPage } from 'next';

/**
 * @function IndexPage Page component for root application path.
 */
const IndexPage: NextPage = () => {
  return (
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
};

export default IndexPage;