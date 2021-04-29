import React from 'react';
import styled from 'styled-components';
import { DividerLine } from './DividerLine';
import {BaseP} from './Typography';

const Heading = styled(BaseP)`
  text-align: left;
  font: normal normal bold 51px/62px liberation-sans;
  letter-spacing: 5.1px;
`;

const Body = styled(BaseP)`
  text-align: left;
  font: normal normal normal 35px/41px liberation-sans;
  letter-spacing: 3.5px;
`;



export default function PerkGrid(props) {
  const { headingColor, bodyColor, heading, body } = props;
  return (
    <div className='p-2'>
      <DividerLine headingColor={headingColor}/>
      <Heading color={headingColor}>{heading}</Heading>
      <Body className='mt-4' color={bodyColor}>
        {body}
      </Body>
    </div>
  );
}

