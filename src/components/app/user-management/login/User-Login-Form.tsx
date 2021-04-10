import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, FormControl, Grid, Input, InputLabel } from '@material-ui/core';

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
      emailField: yup.string().required(),
      passwordField: yup.string().required()
    }),

    onSubmit: async values => {
      console.log(values);
      debugger;
    }
  });

  // console.log('Form values', formik.values);

  console.log('Form errors', formik.errors);

  return (
    <form onSubmit={ formik.handleSubmit }>
      <Grid item container>
        <Grid item xs={10}>
          <FormControl>
            <InputLabel htmlFor="emailField">Email address</InputLabel>
            <Input
              type='text'
              id="emailField"
              onChange={ formik.handleChange }
              value={ formik.values.emailField }
              error={!!formik.errors.emailField}
            />

            {
              formik.errors.emailField ? <div>{ formik.errors.emailField }</div> : null
            }

          </FormControl>
        </Grid>
        <Grid item xs={10}>
          <FormControl>
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <Input type='text' id="passwordField" onChange={ formik.handleChange } value={ formik.values.passwordField } error={!!formik.errors.passwordField} />

            {
              formik.errors.passwordField ? <div>{ formik.errors.passwordField }</div> : null
            }
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