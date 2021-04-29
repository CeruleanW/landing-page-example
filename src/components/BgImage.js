import React, { useState } from 'react';
import styled from 'styled-components';

const BgImageDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('./images/Image 4.png');
  background-size: cover;
  z-index: 0;
  mask: url('./circle.svg') 30% 29% / 360px no-repeat,
    url('./circle.svg') 6% 80% / 590px no-repeat,
    url('./circle.svg') 110% 130% / 480px no-repeat
      ${(props) =>
        props.x && props.y
          ? `, url('./circle.svg') ${props.x}px ${props.y}px / 240px no-repeat`
          : ';'};
`;

export function BgImage(props) {
  const { x, y } = props;

  return <BgImageDiv className={'absolute'} x={x} y={y} />;
}
