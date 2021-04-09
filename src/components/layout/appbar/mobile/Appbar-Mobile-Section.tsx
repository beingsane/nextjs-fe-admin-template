import IStyledComponentProps from '@typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';
import styled from 'styled-components';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps extends IStyledComponentProps { }

/**
 * @function AppbarMobileSection
 * @param children
 * @param className
 */
const AppbarMobileSection: React.FC<IProps> = ({ children, className }) => {
  return (
    <section className={className}>
      { children}
    </section>
  );
};

export default styled(AppbarMobileSection)`

    display: flex;

    ${({ theme }) => { return theme.breakpoints.up('sm'); }} {
    display: none;
    }

`;