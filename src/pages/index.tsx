import React from 'react';
import MainContainer from '@components/layout/Main-Container';
import { NextPage } from 'next';
import { Grid, Typography } from '@material-ui/core';

/**
 * @function Homepage Page component for root path.
 * @return JSX markup that consists all components for the Homepage.
 */
const Homepage: NextPage = () => (
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

export default Homepage;