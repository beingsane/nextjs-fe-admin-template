import React from 'react';
import { Button } from '@material-ui/core';

/**
 * @interface IProps Component's props interface.
 */
interface IProps {}

/**
 * @function UserDetailHeading Heading area for user detail page.
 */
const UserDetailHeading: React.FC<IProps> = () => {
  return (
    <>
      <Button>Go back</Button>
      <hr></hr>
    </>
  );
};

export default UserDetailHeading;