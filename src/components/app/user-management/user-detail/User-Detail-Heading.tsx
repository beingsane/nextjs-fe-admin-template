import React from 'react';
import { Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import { useRouter } from 'next/router';

import UserEditFormDialog from '@components/app/user-management/user-edit/User-Edit-Form-Dialog';
import UserDetailContext from '@contexts/user-management/user-detail.context';

/**
 * @interface IProps Component's props interface.
 */
interface IProps {}

/**
 * @function UserDetailHeading Heading area for user detail page.
 */
const UserDetailHeading: React.FC<IProps> = () => {
  const router = useRouter();

  const [openDialog, setOpenDialog] = React.useState(false);

  const openDialogHandler: () => void = () => {
    setOpenDialog(true);
  };

  const closeDialogHandler: () => void = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<ArrowBackIcon />}
        onClick={() => { return router.push('/users'); }}
      />

      <UserDetailContext.Provider value={{ openDialog, openDialogHandler, closeDialogHandler }}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<EditIcon />}
          onClick={() => { return setOpenDialog(true); }}
        >
              Edit
        </Button>

        <hr></hr>

        <UserEditFormDialog />

      </UserDetailContext.Provider>

    </>
  );
};

export default UserDetailHeading;