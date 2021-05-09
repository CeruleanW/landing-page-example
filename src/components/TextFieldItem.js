import React from 'react';
import styled, {css} from 'styled-components';

const StyledInput = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 2px solid #000000;
  width: 100%;
  height: 74px;
  font-size: 32px;
  transition: all 0.2s ease-in-out 0s;
  &:focus {
    border-bottom: 8px solid blue;
  }
`;

export const labelStyles = css`
  font-size: 22px;
  line-height: 34px;
  font-weight: bold;
  letter-spacing: 2.2px;
  color: #000000;
`;

export const StyledLabel = styled.label`
  /* font: normal normal bold 22px/34px Helvetica Neue; */
  ${labelStyles}
`;

export default function TextFieldItem(props) {
  const { name, className } = props;

  return (
    <div className={`mt-5 ${className}`}>
      <StyledLabel data-shrink='false' htmlFor={name} id={`${name}-label`} className='block'>
        {name.toUpperCase()}
      </StyledLabel>
      <StyledInput
        type='text'
        aria-invalid='false'
        name={name}
        id={name}
      ></StyledInput>
    </div>
  );
}
