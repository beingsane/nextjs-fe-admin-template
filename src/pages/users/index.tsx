import MainContainer from '@components/layout/Main-Container';
import UserModelType from '@typescript/types/app/models/User-Model-Type';
import { wrapper } from '@redux/index';
import { getUsers } from '@redux/actions/users';
import StoreTypeObj from '@typescript/types/shared/redux/thunk/Store-Type';
import UserDataGridList from '@components/app/user-management/user-list/User-DataGrid-List';
import { Button, Grid, Typography } from '@material-ui/core';

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
  return (
    <MainContainer>
      <Grid container>
        <Grid item xs={10}>
          <Typography component="h1" variant="h5">
                          Uživatelé
          </Typography>

          <Grid item xs={2} style={{ textAlign: 'right', marginLeft: '3.8vw', marginTop: '0.5vh' }}>
            <Button variant="contained" color="primary">
                    Create new
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <UserDataGridList users={users} />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

/**
 * @function getServerSideProps SSR preprocessing of Userpage component.
 */
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const { store } = context;
    await (store as StoreTypeObj).dispatch(getUsers());

    return {
      props: {
        users: context.store.getState().users.data
      }
    };
  }
);

export default UserPage;