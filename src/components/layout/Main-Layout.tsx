import IStyledComponentProps from '@typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';
import styled, { css } from 'styled-components';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps extends IStyledComponentProps {
    open: boolean;
}

/**
 * @function MainLayout Stylization of main element for admin page.
 * @param children Content node that is placed inside this common component.
 * @param className Generated classname via "styled-components" library.
 */
const MainLayout: React.FC<IProps> = ({ children, className }) => {
  return (
    <main className={className}>
      {children}
    </main>
  );
};

export default styled(MainLayout)`

margin-top: 64px;
  margin-left: 75px;
  padding: 30px;

  transition: ${({ theme }) => {
    return theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    });
  }};

  ${({ open }) => {
    return open &&
        css`
      margin-left: 240px;
    `;
  }}
`;