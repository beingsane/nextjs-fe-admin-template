import MainContainer from '@components/layout/Main-Container';
import { Button, Grid, Typography } from '@material-ui/core';
import { NextPage } from 'next';
import { useTranslation } from 'src/i18n';
import { wrapper } from '@redux/store';
import { connect } from 'react-redux';
import { fetchProjectDetail } from '@redux/actions/project-detail/project-detail-actions';
import { fetchUserList } from '@redux/actions/users/users-listing-actions';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import DataGridContainer, { DataGridColumn } from '@components/common/datagrid/DataGrid-Container';
import UserModelType from '@typescript/types/app/models/User-Model-Type';
import UserList from '@components/users/User-List';

/**
 * @interface PageProps Page`s props interface.
 */
interface PageProps {
  users: [],
  fetchUserList(): void;
}

/**
 * @function UserPage User page component.
 * @returns JSX markup for listing collection of users.
 */
const UserPage: NextPage<PageProps> = ({ users, fetchUserList }) => {
  const { t } = useTranslation(['userspage']);
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
    },
  ];

  useEffect(() => {
    fetchUserList();
  }, [users]);

  useEffect(() => {
    fetchUserList();
  },[]);


  useEffect(() => {
    return () => {
      console.log("cleaned up");

      fetchUserList();
      
    };
  }, []);


  return (
    <MainContainer>
        <Grid container>
        <Grid item xs={10}>
          <Typography component="h1" variant="h5">
            Users
          </Typography>
        </Grid>
        <Grid item xs={2} style={{ textAlign: 'right' }}>
          <Button variant="contained" color="primary">
            Create new
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <UserList users={users} />
          {users.length}
        </Grid>
      </Grid>
    </MainContainer>
  );
};

/**
 * @function getServerSideProps Redux initial data processing.
 */
const getServerSideProps = wrapper.getServerSideProps( 
  async (ctx) => {
    ctx.store.dispatch(fetchUserList());
    return {
      props: {
        users: ctx.store.getState().users.data
      }
    }
  }
);



export default connect((state) => state.users, {fetchUserList})(UserPage);
export { getServerSideProps };