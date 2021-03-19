
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Menu, MenuItem } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useTranslation } from 'src/i18n';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps {
    anchorEl: Element;
    isMenuOpen: boolean;
    handleMenuClose: (event: React.SyntheticEvent) => void;
    handleProfileMenuOpen: (event: React.SyntheticEvent) => void;
}

/**
 * @function AppBarDropdownMobileMenu Component for triggering visibility state of dropdown menu for mobile devices. 
 * @param anchorEl Anchor element from which is dropdown triggered.
 * @param isMenuOpen State of menu visibility.
 * @param handleMenuClose  Event handler for opening and closing dropdown menu.
 * @param handleProfileMenuOpen Event handler for profile nav-item.
 */
const AppbarDropdownMobileMenu: React.FC<IProps> = ({ anchorEl, isMenuOpen, handleMenuClose, handleProfileMenuOpen }) => {

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const { t } = useTranslation(['sidebar']);

    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem>
                <IconButton color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>{t('notification_label')}</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton color="inherit">
                    <AccountCircle />
                </IconButton>
                <p>{t('profile_label')}</p>
            </MenuItem>
        </Menu>
    );
}

export default AppbarDropdownMobileMenu;