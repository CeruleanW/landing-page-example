import React from 'react';
import styled from 'styled-components';

const Img = styled.div`
  background: ${props => props.bgImg};
  box-shadow: 5px 40px 30px #9B2525;
  opacity: 1;
  width: 250px;
  height: 400px;
  display: inline-block;
  background-position: top;
`;

export default function Speaker(props) {
  const {src} = props;
  const bgImg = `transparent url('${src}') 0% 0% no-repeat padding-box`;

  return (
    <Img bgImg={bgImg}/>
  )
}
