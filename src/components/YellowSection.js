import React, { useState, useRef } from 'react';
import DemoButton from './DemoButton';
import H2 from './H2';
import { BaseSection } from './BaseSection';
import { theme } from '../styles/theme';
import styled from 'styled-components';
import { WithLayoutTopMenu } from './WithLayoutTopMenu';
import { Subtitle } from './Typography';

const sectionBgColor = theme.palette.yellow;

const YellowSectionContainer = styled(BaseSection)`
  background-color: ${sectionBgColor};
`;

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
          ? `, url('./circle.svg') ${props.x}px ${props.y}px / 200px no-repeat`
          : ';'};
`;

const ContentContainer = styled.div`
  max-width: 831px;
`;

// reveal an extra circle for the image when hover
export function YellowSection() {
  const [mousePosition, setMousePosition] = useState([0, 0]);

  const handleMouseMove = (event) => {
      setMousePosition([
        event.nativeEvent.offsetX - 100,
        event.nativeEvent.offsetY - 100
      ]);
  };

  const handleMouseOut = () => {
    setMousePosition([0, 0]);
  };

  return (
    <YellowSectionContainer id='yellow' className={'flex flex-col relative'} height='large'>
      <BgImageDiv
        className={'absolute'}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        x={mousePosition[0]}
        y={mousePosition[1]}
      />
      <WithLayoutTopMenu sectionBgColor={sectionBgColor} />
      <div className={'flex relative'}>
        <ContentContainer className='absolute top-80 right-32'>
          <H2>FRONT ROW SEATS</H2>
          <Subtitle className='mt-5'>
            Experience concerts up close and personal.
          </Subtitle>
          <div className='mt-10'>
            <DemoButton bgcolor={sectionBgColor} />
          </div>
        </ContentContainer>
      </div>
    </YellowSectionContainer>
  );
}
