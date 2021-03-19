import AppbarAccountInfo from '../app/appbar/Appbar-Account-Info';
import AppBarDesktopSection from '@components/app/appbar/desktop/Appbar-Desktop-Section';
import AppBarMobileSection from '@components/app/appbar/mobile/Appbar-Mobile-Section';
import AppbarNavitem from '@components/app/appbar/Appbar-Nav-Item';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useState } from 'react';
import styled from 'styled-components';
import StyledAppBar from '@components/app/appbar/Styled-Appbar';
import StyledToolbar from '@components/app/appbar/Styled-Toolbar';
import { Link } from '../../i18n';
import AppbarDropdownMenu from '@components/app/appbar/dropdowns/Dropdown-Menu';
import AppbarDropdownMobileMenu from '@components/app/appbar/dropdowns/Dropdown-Mobile-Menu';

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
                            Project name
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
                            <UserEmail>{"duchpatrik@icloud.com"}</UserEmail>
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
