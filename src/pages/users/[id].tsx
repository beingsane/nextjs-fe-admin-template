import MainContainer from '@components/layout/Main-Container';
import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';

class UserDetailPage extends React.Component {
  render() {
    return (
      <MainContainer>
        <Button>Go back</Button>
        <hr></hr>
        <Grid container>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5">
                    User detail
            </Typography>
          </Grid>
        </Grid>
      </MainContainer>
    );
  }
}

export default UserDetailPage;