import React from 'react';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';

/**
 * @interface IProps Component's props interface.
 */
interface IProps {}

/**
 * @function UserDetailHeading Heading area for user detail page.
 */
const UserDetailHeading: React.FC<IProps> = () => {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => { return router.push('/users'); }} >Go back</Button>
      <hr></hr>
    </>
  );
};

export default UserDetailHeading;