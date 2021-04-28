import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { theme } from '../styles/theme';

const handleSzie = (props) => {
  const size = props.size;
  if (size === 'small') {
    return { width: '200px', height: '48px' };
  } else if (size === 'large') {
    return { width: '320px', height: '108px', fontSize: '29px/35px' };
  } else {
    return { width: '284px', height: '79px', fontSize: '23px/28px' };
  }
};

export const BaseButton = styled.button.attrs(handleSzie)`
  border-radius: 79px;
  opacity: 1;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  /* font */
  font: normal normal bold ${(props) => props.fontSize} liberation-sans;
  letter-spacing: 2.3px;
`;

export const KnockoutButton = styled(BaseButton)`
  background-color: ${theme.palette.white};
  color: ${(props) => props.bgcolor};
`;
