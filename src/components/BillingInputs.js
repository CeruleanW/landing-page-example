import React from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import TextFieldItem, { StyledLabel } from './TextFieldItem';
import FieldsetWrapper from './FieldsetWrapper';
import styled from 'styled-components';

const StyledCountryDropdown = styled(CountryDropdown)`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 2px solid #000000;
  width: 100%;
  height: 74px;
  font-size: 32px;
`;

export function BillingInputs(props) {
  const handleCountrySelect = () => {};
  const { groupTitle } = props;

  return (
    <FieldsetWrapper legend={groupTitle} className='pt-3'>
      <TextFieldItem name='FULL NAME' />
      <TextFieldItem name='BILLING ADDRESS' />
      <TextFieldItem name='CITY' />
      <TextFieldItem name='COUNTRY' />
      <TextFieldItem name='POSTAL CODE' />
      <div className='mt-5'>
        <StyledLabel htmlFor='country'>COUNTRY</StyledLabel>
        <StyledCountryDropdown
          defaultOptionLabel=''
          onChange={handleCountrySelect}
          id={'country'}
        />
      </div>
    </FieldsetWrapper>
  );
}
