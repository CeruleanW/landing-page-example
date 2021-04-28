import styled from 'styled-components';
import { theme } from '../styles/theme';

export const BaseSubtitle = styled.p`
  text-align: left;
  font: normal normal normal 51px/61px liberation-sans;
  letter-spacing: 5.1px;
  color: ${props => props.textColor};
  opacity: 1;
`;

export function Subtitle(props) {
  const textColor = theme.palette[props.color] ?? theme.palette.black;
  return (<BaseSubtitle textColor={textColor} >{props.children}</BaseSubtitle>);
}