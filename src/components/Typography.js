import styled, { css } from 'styled-components';
import { theme } from '../styles/theme';

const defaultFontFamily = 'liberation-sans';
const textColorCallback = (props) =>
  theme.palette[props.color] ?? theme.palette.black;

export const typographyStyles = css`
  font-family: ${defaultFontFamily};
  color: ${textColorCallback};
`;

export const BaseP = styled.p`
  ${typographyStyles}
`;

const BaseSubtitle = styled(BaseP)`
  text-align: left;
  font: normal normal normal 51px/61px ${defaultFontFamily};
  letter-spacing: 5.1px;
`;
export function Subtitle(props) {
  return (
    <BaseSubtitle color={props.textColor}>{props.children}</BaseSubtitle>
  );
}


