import React from 'react';
import styled from 'styled-components';

const Heading = styled.p`
  color: ${(props) => props.headingColor};
  text-align: left;
  font: normal normal bold 51px/62px liberation-sans;
  letter-spacing: 5.1px;
`;

const Body = styled.p`
  color: ${(props) => props.bodyColor};
  text-align: left;
  font: normal normal normal 35px/41px liberation-sans;
  letter-spacing: 3.5px;
`;

export default function PerkGrid(props) {
  const { headingColor, bodyColor, heading, body } = props;
  return (
    <div className='p-2'>
      <svg height='20' width='100'>
        <line
          x1='0'
          x2='100'
          style={{stroke:headingColor, strokeWidth: 4}}
        />
      </svg>
      <Heading headingColor={headingColor}>{heading}</Heading>
      <Body className='mt-4' bodyColor={bodyColor}>{body}</Body>
    </div>
  );
}

/* <Line /> */
