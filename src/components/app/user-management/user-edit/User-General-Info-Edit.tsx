import { Box, TextField, Typography } from '@material-ui/core';
import { FormikContextType } from 'formik';
import React from 'react';
import { useTranslation } from 'src/i18n';
import UserEditModel from '@typescript/types/app/models/users/user-edit/User-Edit-Model';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps {
    formik: FormikContextType<UserEditModel>;
}

/**
 * @function UserGeneralInfoEdit Edit form for editing general info user's details.
 * @param formik Formik instance.
 */
const UserGeneralInfoEdit: React.FC<IProps> = ({ formik }) => {
  const { t } = useTranslation(['userdetailpage']);

  return (
    <>
      <Typography component="h1" variant="h6" color="secondary">
        <Box fontWeight="bold">{t('general_information')}</Box>{' '}
      </Typography>
      <Box my={1} px={1}>
        <TextField
          id="firstName"
          name="firstName"
          label={`${t('first_name')}: `}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          fullWidth
          error={!!formik.errors.firstName && (formik.touched.firstName || formik.submitCount > 0)}
        />
      </Box>
      <Box my={1} px={1}>
        <TextField
          id="surname"
          name="surname"
          label={`${t('surname')}: `}
          value={formik.values.surname}
          onChange={formik.handleChange}
          fullWidth
          error={!!formik.errors.surname && (formik.touched.surname || formik.submitCount > 0)}
        />
      </Box>
    </>
  );
};

export default UserGeneralInfoEdit;