import IStyledComponentProps from '@typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';
import styled from 'styled-components';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps extends IStyledComponentProps { }

/**
 * @function AppbarDesktopSection Navigation section restricted to the desktop clients.
 * @param children Content node that is placed inside this common component.
 * @param className Generated classname via "styled-components" library.
 */
const AppbarDesktopSection: React.FC<IProps> = ({ children, className }) => (
  <section className={className}>
    { children}
  </section>
);

export default styled(AppbarDesktopSection)`

    display: none;

    ${({ theme }) => theme.breakpoints.up('sm')} {
        display: flex;
    }
`;