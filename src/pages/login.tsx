import { NextPage } from 'next';
import MainContainer from '@components/layout/Main-Container';
import { Grid, Typography } from '@material-ui/core';
import UserLoginForm from '@components/app/user-management/login/User-Login-Form';

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
          <UserLoginForm />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default LoginPage;