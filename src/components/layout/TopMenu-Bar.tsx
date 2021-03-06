import AppBarDesktopSection from '@components/layout/appbar/desktop/Appbar-Desktop-Section';
import AppBarMobileSection from '@components/layout/appbar/mobile/Appbar-Mobile-Section';
import AppbarNavitem from '@components/layout/appbar/Appbar-Nav-Item';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useState } from 'react';
import styled from 'styled-components';
import StyledAppBar from '@components/layout/appbar/Styled-Appbar';
import StyledToolbar from '@components/layout/appbar/Styled-Toolbar';
import AppbarDropdownMenu from '@components/layout/appbar/dropdowns/Dropdown-Menu';
import AppbarDropdownMobileMenu from '@components/layout/appbar/dropdowns/Dropdown-Mobile-Menu';
import HeaderTitle from '@components/skeleton/header/title/Header-Title';
import AppbarAccountInfo from './appbar/Appbar-Account-Info';
import { Link } from '../../i18n';

const UserEmail = styled(Typography)`
  margin-left: 5px;
`;

/**
 * @function TopMenuBar Header navigation of admin portal.
 */
const TopMenuBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  /**
     * @function handleProfileMenuOpen Event handler for opening a dropdown menu of particular anchor tag for desktop clients.
     * @param event Event handler instance.
     */
  const handleProfileMenuOpen = (event: React.SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  /**
     * @function handleMenuClose Event handler for closing a dropdown menu of particular anchor tag for desktop clients.
     * @param event Event handler instance.
     */
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  /**
     * @function handleMobileMenuClose Event handler for closing a dropdown menu of particular anchor tag for mobile clients.
     * @param event Event handler instance.
     */
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  /**
     * @function handleMobileMenuOpen Event handler for opening a dropdown menu of particular anchor tag for mobile clients.
     * @param event Event handler instance.
     */
  const handleMobileMenuOpen = (event: React.SyntheticEvent) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (
    <>
      <StyledAppBar color="primary" position="fixed">
        <StyledToolbar>
          <Link href="/">
            <AppbarNavitem variant="h6" color="inherit" noWrap>
              <HeaderTitle />
            </AppbarNavitem>
          </Link>
          <AppBarDesktopSection>
            <IconButton color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <AppbarAccountInfo onClick={handleProfileMenuOpen} color="inherit">
              <AccountCircle />
              <UserEmail>{'duchpatrik@icloud.com'}</UserEmail>
            </AppbarAccountInfo>
          </AppBarDesktopSection>

          <AppBarMobileSection>
            <IconButton onClick={handleMobileMenuOpen} color="inherit">
              <MoreIcon />
            </IconButton>
          </AppBarMobileSection>
        </StyledToolbar>
      </StyledAppBar>
      <AppbarDropdownMobileMenu anchorEl={mobileMoreAnchorEl} isMenuOpen={isMobileMenuOpen} handleMenuClose={handleMobileMenuClose} handleProfileMenuOpen={handleProfileMenuOpen} />
      <AppbarDropdownMenu anchorEl={anchorEl} isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} />
    </>
  );
};

export default TopMenuBar;