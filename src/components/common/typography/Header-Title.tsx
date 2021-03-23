import IStyledComponentProps from '@typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';
import ThemeType from '@typescript/types/shared/themes/Theme-Type';
import styled from 'styled-components';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps extends ThemeType, IStyledComponentProps { }

/**
 * @function HeaderTitle => Component that displays title of application mostly => top heading.
 * @param children Content node that is placed inside this common component.
 * @param className Generated classname via "styled-components" library.
 */
const HeaderTitle: React.FC<IProps> = ({ children, className }) => <h1 className={className}>{children}</h1>;

/* Style of common component. */
export default styled(HeaderTitle)`
  text-align: center;
`;