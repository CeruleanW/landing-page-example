import styled, {css} from 'styled-components';
import { typographyStyles } from './Typography';

export const legendStyles = css`
  font-size: 45px;
  line-height: 71px;
  letter-spacing: 4.5px;
  color: #000000;
`;

export const FieldsetLegend = styled.legend`
  ${typographyStyles}
  ${legendStyles}
`;
