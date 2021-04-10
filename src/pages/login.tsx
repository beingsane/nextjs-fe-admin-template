import { NextPage } from 'next';
import MainContainer from '@components/layout/Main-Container';
import { Grid } from '@material-ui/core';
import UserLoginForm from '@components/app/user-management/login/User-Login-Form';
import UserLoginHeading from '@components/app/user-management/login/User-Login-Heading';

/**
 * @function LoginPage Page component for login into system.
 */
const LoginPage: NextPage = () => {
  return (
    <MainContainer>
      <Grid container>
        <UserLoginHeading />
        <Grid item xs={10}>
          <UserLoginForm />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default LoginPage;