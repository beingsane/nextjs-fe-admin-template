import MainContainer from '@components/layout/Main-Container';
import { Button, Grid, Typography } from '@material-ui/core';
import { NextPage } from 'next';
import { useTranslation } from 'src/i18n';
import { useEffect } from 'react';
import router, { useRouter } from 'next/router';
import DataGridContainer, { DataGridColumn } from '@components/common/datagrid/DataGrid-Container';
import UserModelType from '@typescript/types/app/models/User-Model-Type';
import UserList from '@components/users/User-List';
import React from 'react';
import axios from 'axios';

/**
 * @interface PageProps Page`s props interface.
 */
interface PageProps {
  users: [],
  fetchUserList(): void;
}

interface IProps {
  users: UserModelType[]
};


const columns: DataGridColumn<UserModelType>[] = [
  {
    name: 'firstName',
    width: 300,
    visible: true,
  },
  {
    name: 'surname',
    width: 300,
    visible: true,
    title: 'Test',
  }
];

class UserPage extends React.Component<IProps, any> {

  componentDidMount() {
    console.log(this.props);
  }


  static async getInitialProps({ Component, ctx }) {

    const res = await axios.get('https://nextjs-fe-admin.azurewebsites.net/api/users');
    const { data } = res;

    return {
      users: data.users
    };
  }

  renderUserList() {
    return this.props.users.map((user) => {
      return <p>{user.firstName}</p>
    });
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
              <DataGridContainer
                data={this.props.users}
                columns={columns}
                load={() => Promise.resolve(this.props.users)}
                onRowClick={(row) => router.push(`/users/${row.id}`)}
              />
            </Grid>
        </Grid>
    </MainContainer>
    );
  }
  
}

export default UserPage;
