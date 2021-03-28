import { Button } from '@material-ui/core';
import IStyledComponentProps from '@typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';
import { i18n } from 'src/i18n';
import styled from 'styled-components';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps extends IStyledComponentProps {
    displayName: string;
    isActive?: boolean;
    langCode: string;

    handleLangStateChange: (langCode: string) => void;
}

/**
 * @function LanguageChooserCTA CTA button fotr changing current language.
 * @param className Generated classname via "styled-components" library.
 * @param displayName Button's label name.
 * @param isActive Activity flag for the particular CTA button.
 * @param langName Language code for the particular CTA button.
 * @returns JSX markup of CTA language chooser button.
 */
const LanguageChooserCTA: React.FC<IProps> = ({ className, displayName, handleLangStateChange, isActive, langCode }) => {
  /**
    * Event handler for changin current language of whole admin portal.
    * @param langCode String representation of target language ("cs", "en" etc.)
    */
  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);

    // Change the state on the parrent component
    handleLangStateChange(langCode);
  };

  return (
    <span className={className} >
      <Button variant={isActive ? 'contained' : null} color="primary" onClick={() => { return handleLanguageChange(langCode); }}>{displayName.toLocaleUpperCase()}</Button>
    </span>
  );
};

export default styled(LanguageChooserCTA)`

    margin-right: 0.35vw;

`;