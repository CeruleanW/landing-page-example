import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Title = styled.p`
  text-align: left;
  font: normal normal bold 35px/43px liberation-sans;
  letter-spacing: 3.5px;
  color: ${theme.palette.white};
  opacity: 1;
`;

const Quote = styled.q`
  text-align: left;
  font: normal normal normal 35px/41px liberation-sans;
  letter-spacing: 3.5px;
  color: ${theme.palette.black};
  opacity: 1;
  /* quotes: "“" "”"; */
`;

const Star = styled.span`
  font-size: 48px;
`;

export default function Review(props) {
  const {rate, title, quote} = props;

  return (
    <div>
      <Star>{'★'.repeat(rate)}</Star>
      <Title className=''>{title}</Title>
      <Quote className='mt-5'>{quote}</Quote>
    </div>
  )
}
