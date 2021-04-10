import MainContainer from '@components/layout/Main-Container';
import UserModelType from '@typescript/types/app/models/User-Model-Type';
import { wrapper } from '@redux/index';
import { getUsers } from '@redux/actions/users';
import StoreTypeObj from '@typescript/types/shared/redux/thunk/Store-Type';
import UserDataGridList from '@components/app/user-management/user-list/User-DataGrid-List';
import { Grid } from '@material-ui/core';
import UserListHeading from '@components/app/user-management/user-list/User-List-Heading';

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
        <UserListHeading />
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