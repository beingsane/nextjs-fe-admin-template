import MainContainer from '@components/layout/Main-Container';
import { Button, Grid, Typography } from '@material-ui/core';
import { NextPage } from 'next';

/**
 * @function UserDetailPage Page component for displaying detail information of particular user.
 */
const UserDetailPage: NextPage = () => (
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

export default UserDetailPage;