import MainContainer from '@components/layout/Main-Container';
import { Button, Grid, Typography } from '@material-ui/core';
import UserModelType from '@typescript/types/app/models/User-Model-Type';
import { wrapper } from '@redux/index';
import { getUsers } from '@redux/actions/user-listing-actions';
import DataGridContainer, { DataGridColumn } from '@components/common/datagrid/DataGrid-Container';
import { useRouter } from 'next/router';

/**
 * @interface IProps Page`s props interface.
 */
interface IProps {
  users: UserModelType[]
}

/**
 * @function UserPage Page component for user management.
 */
const UserPage: React.FC<IProps> = ({ users }) => {
  const router = useRouter();

  const columns: DataGridColumn<UserModelType>[] = [
    {
      name: 'id',
      width: 300,
      visible: true
    },
    {
      name: 'firstName',
      width: 300,
      visible: true,
      title: 'First name'
    },
    {
      name: 'surname',
      width: 300,
      visible: true,
      title: 'Surname'
    }
  ];

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
          <DataGridContainer
            data={users}
            columns={columns}
            load={() => Promise.resolve(users)}
            onRowClick={(row) => router.push(`/users/${row.id}`)}
          />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

/**
 * @function getServerSideProps SSR preprocessing of Userpage root component.
 */
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    await context.store.dispatch(getUsers());
    return {
      props: {
        users: context.store.getState().users.data
      }
    };
  }
);

export default UserPage;