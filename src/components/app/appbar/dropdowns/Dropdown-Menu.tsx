import { MenuItem } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useTranslation } from 'src/i18n';
import StyledDropdownMenu from './Styled-Dropdown-Menu';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps {
    anchorEl: Element;
    isMenuOpen: boolean;
    handleMenuClose: () => void;
}

/**
 * @function AppBarDropdownMenu Component for triggering visibility state of dropdown menu.
 * @param anchorEl Anchor element from which is dropdown triggered.
 * @param isMenuOpen State of menu visibility.
 * @param handleMenuClose  Event handler for opening and closing dropdown menu.
 */
const AppbarDropdownMenu: React.FC<IProps> = ({ anchorEl, isMenuOpen, handleMenuClose }) => {
  const menuId = 'primary-search-account-menu';
  const router = useRouter();
  const { t } = useTranslation(['navbar']);

  return (
    <StyledDropdownMenu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => { return router.push('/profile'); }}>{t('profile_dropdown_url')}</MenuItem>
      <MenuItem onClick={() => { return console.log('TODO: Logout functionality'); }}>{t('logout_dropdown_url')}</MenuItem>
    </StyledDropdownMenu>
  );
};

export default AppbarDropdownMenu;