import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';

export default function H1(props) {
  const theme = useTheme();
  const MyH1 = styled(Typography)`
    text-align: left;
    font: normal normal bold 65px/79px Helvetica Neue;
    letter-spacing: 6.5px;
    opacity: 1;
    display: block;
    color: ${theme.palette.primary.main};
  `;

  return <MyH1 variant='h1'>{props.children}</MyH1>;
}
