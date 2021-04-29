import React from 'react';
import EmailLink from './EmailLink';
import { SingleColorSection } from './BaseSection';
import { theme } from '../styles/theme';
import styled from 'styled-components';

const sectionBgColor = theme.palette.purple;

const PrimaryText = styled.p`
  font: normal normal normal 48px/57px liberation-sans;
  letter-spacing: 4.8px;
  color: ${theme.palette.white};
`;

const SecondaryText = styled.p`
  font: normal normal normal 24px/29px Helvetica Neue;
  letter-spacing: 2.4px;
  color: ${theme.palette.white};
`;

export default function ExpFooter() {
  return (
    <SingleColorSection sectionBgColor={sectionBgColor} height='short'>
      <EmailLink />
      <PrimaryText className={'text-center mt-32'} >EXP|CON</PrimaryText>
      <SecondaryText className={'text-center mt-10'}>
        <small>
          2019 © All Rights Reserved | Lorem ipsum dolor sit amet
        </small>
      </SecondaryText>
    </SingleColorSection>
  );
}
