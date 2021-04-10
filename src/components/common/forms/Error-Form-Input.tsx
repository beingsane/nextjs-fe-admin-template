import React from 'react';
import styled from 'styled-components';
import IStyledComponentProps from '@typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';

/**
 * @interface IProps Component's props interface.
 */
interface IProps extends IStyledComponentProps {
    isToggled: boolean;
    message: string;
}

/**
 * @function ErrorFormInput Common arbitrary error message component
 * that is used for displaying error messages under particular form field..
 */
const ErrorFormInput: React.FC<IProps> = ({ className, isToggled, message }) => {
  if (!isToggled) return null;
  return (
    <span className={className}>
      - { message }
    </span>
  );
};

export default styled(ErrorFormInput)`
    margin-top: 0.75vh;
    // margin-bottom: 3.5vh;
    font-style: italic;
`;