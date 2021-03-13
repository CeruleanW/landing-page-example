import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { theme } from '../styles/theme';

export const BaseButton = styled(Button)`
  border-radius: 79px;
  opacity: 1;
  width: 284px;
  height: 79px;
  /* font */
  font: normal normal bold 23px/28px liberation-sans;
  letter-spacing: 2.3px;
`;

export const KnockoutButton = styled(BaseButton)`
  background-color: ${theme.palette.white};
  color: ${(props) => props.bgcolor};
`;