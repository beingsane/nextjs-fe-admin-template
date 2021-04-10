import React from 'react';
import { Button, Grid } from '@material-ui/core';
import styled from 'styled-components';
import IStyledComponentProps from '@typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';

/**
 * @interface IProps Component's props interface.
 */
interface IProps extends IStyledComponentProps {}

/**
 * @function UserListHeadingCTA Heading call to action areas fro user list page component.
 * @param className Generated classname via "styled-components" library.
 */
const UserListHeadingCTA: React.FC<IProps> = ({ className }) => {
  return (
    <Grid item xs={2} className={className}>
      <Button variant="contained" color="primary">Create new</Button>
    </Grid>

  );
};

export default styled(UserListHeadingCTA)`
  text-align: right;
  margin-left: 3.8vw;
  margin-top: 0.5vh;
`;