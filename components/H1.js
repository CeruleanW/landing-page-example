import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import {theme} from '../styles/theme';

const MyH1 = styled(Typography)`
  text-align: left;
  font: normal normal bold 65px/79px Helvetica Neue;
  letter-spacing: 6.5px;
  opacity: 1;
  display: block;
  color: ${theme.palette.primary.main};
`;

export default function H1(props) {
  return <MyH1 variant='h1'>{props.children}</MyH1>;
}
