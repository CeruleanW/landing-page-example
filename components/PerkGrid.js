import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';

const Heading = styled(Typography)`
  color: ${props => props.headingColor};
`;

const Body = styled(Typography)`
  color: ${props => props.bodyColor};
`;

export default function PerkGrid(props) {
  const { headingColor, bodyColor, heading, body } = props;
  return (
    <div>
      <Heading>{heading}</Heading>
      <Body>{body}</Body>
    </div>
  );
}

/* <Line /> */
