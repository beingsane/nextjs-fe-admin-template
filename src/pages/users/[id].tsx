import MainContainer from '@components/layout/Main-Container';
import { NextPage } from 'next';
import UserDetailHeading from '@components/app/user-management/user-detail/User-Detail-Heading';
import UserDetailContent from '@components/app/user-management/user-detail/User-Detail-Content';

/**
 * @function UserDetailPage Page component for displaying detail information of particular user.
 */
const UserDetailPage: NextPage = () => {
  return (
    <MainContainer>
      <UserDetailHeading />
      <UserDetailContent />
    </MainContainer>
  );
};

export default UserDetailPage;