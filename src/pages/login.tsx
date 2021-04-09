import { NextPage } from 'next';
import MainContainer from '@components/layout/Main-Container';
import { Grid, Typography } from '@material-ui/core';
import UserLogin from '@components/app/users/login/User-Login';

/**
 * @function LoginPage Page component for login into system.
 */
const LoginPage: NextPage = () => {
  return (
    <MainContainer>
      <Grid container>
        <Grid item xs={10}>
          <Typography component="h1" variant="h5">
                      Login
          </Typography>
        </Grid>

        <Grid item xs={10}>
          <UserLogin />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default LoginPage;