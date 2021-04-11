import { createContext } from 'react';

const UserDetailContext = createContext({
  openDialog: false,
  openDialogHandler: () => {
    console.log('Skeleton that will be overridden.');
  },
  closeDialogHandler: () => {
    console.log('Skeleton that will be overridden.');
  }
});

export default UserDetailContext;