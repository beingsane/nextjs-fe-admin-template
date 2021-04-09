import React from 'react';
import { FormControl, Grid, Input, InputLabel } from '@material-ui/core';

/**
 * @function UserLogin Form for login functionality.
 * @constructor
 */
const UserLogin: React.FC = () => {
  return (
    <form>
      <Grid item container>
        <Grid item xs={10}>
          <FormControl>
            <InputLabel htmlFor="password-input">Email address</InputLabel>
            <Input id="email-input" />
          </FormControl>
        </Grid>
        <FormControl>
          <InputLabel htmlFor="password-input">Password</InputLabel>
          <Input id="password-input" />
        </FormControl>
      </Grid>

    </form>
  );
};

export default UserLogin;