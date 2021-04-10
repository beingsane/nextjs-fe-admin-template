import React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';
import IStyledComponentProps from '@typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';
import UserListHeadingCTA from './User-List-Heading-CTA';

/**
 * @interface IProps Component's props interface.
 */
interface IProps extends IStyledComponentProps {}

/**
 * @function UserListHeading Heading areas of user list page.
 * @param className Generated classname via "styled-components" library.
 */
const UserListHeading: React.FC<IProps> = ({ className }) => {
  return (
    <Grid className={ className } item xs={10}>
      <Typography component="h1" variant="h5">Uživatelé</Typography>
      <UserListHeadingCTA />
    </Grid>
  );
};

export default styled(UserListHeading)``;