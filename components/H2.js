import styled from 'styled-components';
import { theme } from '../styles/theme';

const Heading = styled.h2`
  text-align: left;
  font: normal normal bold 74px/90px liberation-sans;
  letter-spacing: 7.4px;
  color: ${props => props.color ? theme.palette[props.color] : theme.palette.white};
  opacity: 1;
`;

export default function H2(props) {
  return (
    <Heading color={props.color}>
      {props.children}
    </Heading>
  )
}
