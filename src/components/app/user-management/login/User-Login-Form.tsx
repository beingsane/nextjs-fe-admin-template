import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, FormControl, Grid, Input, InputLabel } from '@material-ui/core';
import ErrorFormInput from '@components/common/forms/Error-Form-Input';

/**
 * @function UserLoginForm Form for login functionality.
 */
const UserLoginForm: React.FC = () => {
  const initialValues =
  {
    emailField: '',
    passwordField: ''
  };

  const formik = useFormik({
    initialValues,
    validationSchema: yup.object().shape({
      emailField: yup.string().required('Email must be filled.'),
      passwordField: yup.string().required('Password must be filled.')
    }),

    onSubmit: async values => {
      console.log(values);
      debugger;
    }
  });

  return (
    <form onSubmit={ formik.handleSubmit }>
      <Grid item container>
        <Grid item xs={10}>
          <FormControl>
            <InputLabel htmlFor="emailField">Email address</InputLabel>
            <Input
              type='text'
              id='emailField'
              name='emailField'
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              value={ formik.values.emailField }
              error={ !!formik.errors.emailField && !!formik.touched.emailField }
            />
            <ErrorFormInput isToggled={!!formik.errors.emailField && !!formik.touched.emailField} message={formik.errors.emailField} />
          </FormControl>
        </Grid>

        <Grid item xs={10}>
          <FormControl>
            <InputLabel htmlFor="emailField">Password</InputLabel>
            <Input
              type='text'
              id='passwordField'
              name='passwordField'
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              value={ formik.values.passwordField }
              error={ !!formik.errors.passwordField && !!formik.touched.passwordField }
            />
            <ErrorFormInput isToggled={!!formik.errors.passwordField && !!formik.touched.passwordField } message={formik.errors.passwordField} />
          </FormControl>
        </Grid>

        <Grid item xs={10}>
          <Button variant="contained" color="primary" type="submit">Log-in</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserLoginForm;