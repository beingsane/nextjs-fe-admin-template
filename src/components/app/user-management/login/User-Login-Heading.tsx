import React from 'react';
import { Grid, Typography } from '@material-ui/core';

/**
 * @function UserLoginHeading Heading area for user login page.
 */
const UserLoginHeading: React.FC = () => {
  return (

    <Grid item xs={10}>
      <Typography component="h1" variant="h5">
                Login
      </Typography>
    </Grid>

  );
};

export default UserLoginHeading;