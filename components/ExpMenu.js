import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography, Box } from '@material-ui/core';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const ExpMenuIcon = styled(MenuIcon)`
  opacity: 1;
  /* color: ${theme.palette.primary.main}; */
  color: '#FFF';
  width: 56px;
  height: 34px;
`;

const ExpMenuText = styled(Typography)`
  text-align: 'left';
  font: 'normal normal normal 48px/57px Helvetica Neue';
  letter-spacing: '4.8px';
  color: ${theme.palette.primary.main};
  opacity: 1;
  display: 'inline-box';
  width: 235px;
  height: 56px;
`;

ExpMenu.defaultProps = {
  color: 'white',
};

export default function ExpMenu(props) {
  const { color } = props;

  return (
    <Box>
      <ExpMenuIcon color={color} />
      <ExpMenuText color={color}>EXP|CON</ExpMenuText>
    </Box>
  );
}
