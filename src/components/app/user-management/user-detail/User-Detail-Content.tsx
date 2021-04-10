import React from 'react';
import { Grid, Typography } from '@material-ui/core';

/**
 * @interface IProps Component's props interface.
 */
interface IProps {}

/**
 * @function UserDetailContent Content area fro User detail page.
 */
const UserDetailContent: React.FC<IProps> = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography component="h1" variant="h5">User detail</Typography>
      </Grid>
    </Grid>
  );
};

export default UserDetailContent;