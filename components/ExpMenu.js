import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography, Box } from '@material-ui/core';
import styled from 'styled-components';
import { theme } from '../styles/theme';
// import MenuIcon from '../styles/HamburgerMenu';
  /* fill: ${(props) =>
    props.color ? theme.palette[`${props.color}`] : theme.palette.primary.main}; */

const ExpMenuIcon = styled(MenuIcon)`
  opacity: 1;
  fill: ${(props) =>
    props.textColor ? theme.palette[`${props.textColor}`] : theme.palette.primary.main};
  width: ${56 * 1.8}px;
  height: ${34 * 1.7}px;
  display: inline flow-root;
  vertical-align: middle;
`;

const ExpMenuText = styled.p`
  text-align: left;
  font: normal normal normal 52px/68px liberation-sans;
  letter-spacing: 4.8px;
  color: ${(props) =>
    props.textColor ? theme.palette[`${props.textColor}`] : theme.palette.primary.main};
  opacity: 1;
  display: inline flow-root;
  width: 258px;
  height: 56px;
  overflow: hidden;
  white-space: nowrap;
  vertical-align: middle;
`;


ExpMenu.defaultProps = {
  color: 'white',
};

export default function ExpMenu(props) {
  const { color } = props;

  return (
    <>
      <ExpMenuIcon />
      <ExpMenuText textColor={color}>EXP|CON</ExpMenuText>
    </>
  );
}
