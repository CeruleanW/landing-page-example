import styled from 'styled-components';
// import { Button } from '@material-ui/core';
import { theme } from '../styles/theme';

const handleSize = (props) => {
  const size = props.size;
  if (size === 'small') {
    return { width: '200px', height: '48px' };
  } else if (size === 'large') {
    return { width: '320px', height: '108px', fontSize: '29px/35px' };
  } else {
    return { width: '284px', height: '79px', fontSize: '23px/28px' };
  }
};

export const BaseButton = styled.button.attrs(handleSize)`
  border-radius: 79px;
  opacity: 1;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  /* font */
  font: normal normal bold ${(props) => props.fontSize} liberation-sans;
  letter-spacing: 2.3px;
  background-color: ${props => theme.palette[props.bgcolor] ?? theme.palette.white};
  color: ${props => theme.palette[props.textColor] ?? theme.palette.black};
`;

export const ColoredButton = styled(BaseButton)`
  color: ${theme.palette.white};
  background: transparent
    linear-gradient(90deg, #1fe1e9 0%, #5e33d1 34%, #d34848 65%, #ffb33f 100%)
    0% 0% no-repeat padding-box;
`;

export const KnockoutButton = styled(BaseButton)`
  background-color: ${theme.palette.white};
  color: ${(props) => props.bgcolor};
`;
