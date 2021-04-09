import { AppBar } from '@material-ui/core';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  z-index: ${({ theme }) => { return theme.zIndex.drawer + 1; }};

  transition: ${({ theme }) => {
    return theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    });
  }};
`;

export default StyledAppBar;