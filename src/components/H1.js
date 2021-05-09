import styled from 'styled-components';
import {theme} from '../styles/theme';

const MyH1 = styled.h1`
  font: normal normal bold 65px/79px liberation-sans;
  letter-spacing: 6.5px;
  display: block;
  color: ${theme.palette.primary.main};
`;

export default function H1(props) {
  return <MyH1 variant='h1' className={'text-center'}>{props.children}</MyH1>;
}
