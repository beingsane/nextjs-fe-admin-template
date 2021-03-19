import { Drawer } from '@material-ui/core';
import styled, { css } from 'styled-components';


const SidebarDrawer = styled(Drawer)`
  z-index: ${({ theme }) => theme.zIndex.drawer};

  overflow: hidden;
  width: 75px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  border-right: 1px solid rgba(0, 0, 0, 0.12);

  transition: ${({ theme }) =>
        theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })};

  ${({ open, theme }) =>
        open &&
        css`
      width: 240px;

      transition: ${theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })};
    `}
`;

export default SidebarDrawer;