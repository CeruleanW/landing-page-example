import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';

const Heading = styled.h2`
  text-align: left;
  font: normal normal bold 74px/90px liberation-sans;
  letter-spacing: 7.4px;
  color: #FFFFFF;
  opacity: 1;
`;

export default function H2(props) {
  return (
    <Heading>
      {props.children}
    </Heading>
  )
}
