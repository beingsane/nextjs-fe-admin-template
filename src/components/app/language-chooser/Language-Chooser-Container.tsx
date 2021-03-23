import IStyledComponentProps from '@typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';
import styled from 'styled-components';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps extends IStyledComponentProps { }

/**
 * @function LanguageChooserContainer Encapsulation component for toggler of current language
 * @param children Content node that is placed inside this common component.
 * @param className Generated classname via "styled-components" library.
 */
const LanguageChooserContainer: React.FC<IProps> = ({ children, className }) => (
  <div className={className}>
    { children}
  </div>
);

export default styled(LanguageChooserContainer)`
    margin-top: 0.5vh;
    text-align: center;
`;