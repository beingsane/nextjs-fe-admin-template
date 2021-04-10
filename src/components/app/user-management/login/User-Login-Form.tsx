import React from 'react';
import { Button, FormControl, Grid, Input, InputLabel } from '@material-ui/core';

/**
 * @function UserLoginForm Form for login functionality.
 * @constructor
 */
const UserLoginForm: React.FC = () => {
  return (
    <form>
      <Grid item container>
        <Grid item xs={10}>
          <FormControl>
            <InputLabel htmlFor="email-input">Email address</InputLabel>
            <Input id="email-input" />
          </FormControl>
        </Grid>
        <Grid item xs={10}>
          <FormControl>
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <Input id="password-input" />
          </FormControl>
        </Grid>
        <Grid item xs={10}>
          <Button>Log-in</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserLoginForm;