import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';

export default function PerkGrid(props) {
  const {headingColor, bodyColor, heading, body} = props;
  const Heading = styled(Typography)`
    color: ${headingColor};
  `;

  const Body = styled(Typography)`
    color: ${bodyColor}
  `;

  return (
    <div>
      <Heading>{heading}</Heading>
      <Body>{body}</Body>
    </div>
  )
}

/* <Line /> */