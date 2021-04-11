import UserGeneralInfoEdit from '@components/app/user-management/user-edit/User-General-Info-Edit';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { useTranslation } from 'src/i18n';
import * as yup from 'yup';
import UserDetailContext from '@contexts/user-management/user-detail.context';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps {
}

/**
 * @function UserEditFormDialog Displays form dialog for editing particular user.
 * @param formik Form object that contains information about particular user.
 * @param open Prop telling you if the dialog is open or not
 * @param closeDialog Function that close dialog in which is this form component
 * @returns React node.
 */
const UserEditFormDialog: React.FC<IProps> = () => {
  const { t } = useTranslation(['userdetailpage']);

  const userDetailContext = useContext(UserDetailContext);

  const formik = useFormik<any>({
    initialValues: {
      firstName: '',
      surname: ''
    },
    validationSchema: yup.object().shape({
      firstName: yup.string(),
      surname: yup.string()
    }),
    onSubmit: async values => {
      console.log('test');
    }
  });

  return (

    <Dialog
      open={userDetailContext.openDialog}
      onClose={userDetailContext.closeDialogHandler}
      fullWidth
    >
      <DialogTitle >
        <Typography component="h1" variant="h5">{t('modal_title')}</Typography>
      </DialogTitle>

      <form onSubmit={formik.handleSubmit} id="simple-modal-description">
        <DialogContent>
          <div style={{ overflow: 'auto' }}>
            <UserGeneralInfoEdit formik={formik} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" type="reset" onClick={() => {
            formik.resetForm();
            userDetailContext.closeDialogHandler();
          }}>{t('cancel')}</Button>
          <Button variant="contained" color="primary" type="submit">{t('save')}</Button>
        </DialogActions>
        <pre>
          <code>{JSON.stringify(formik.errors, null, 2)}</code>
        </pre>
      </form>

    </Dialog>
  );
};

export default UserEditFormDialog;
