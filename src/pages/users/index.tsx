import MainContainer from '@components/layout/Main-Container';
import { Button, Grid, Typography } from '@material-ui/core';
import UserModelType from '@typescript/types/app/models/User-Model-Type';
import { getPosts } from '@redux/actions/foo-actions';
import { wrapper } from '@redux/index';
import React from 'react';

interface IProps {
  users: UserModelType[]
}

class UserPage extends React.Component<IProps, any> {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <MainContainer>
        <Grid container>
          <Grid item xs={10}>
            <Typography component="h1" variant="h5">
                Users
            </Typography>
          </Grid>
          <Grid item xs={2} style={{ textAlign: 'right' }}>
            <Button variant="contained" color="secondary">
                Create new
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>

          </Grid>
        </Grid>
      </MainContainer>
    );
  }
}

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    context.store.dispatch(getPosts());
    console.log(context.store.getState());

    return {
      props: {
        foo: context.store.getState().foo
      }
    };
  }
);

export default UserPage;