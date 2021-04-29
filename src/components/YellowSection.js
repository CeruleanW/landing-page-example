import React, { useState, useRef } from 'react';
import DemoButton from './DemoButton';
import H2 from './H2';
import { BaseSection } from './BaseSection';
import { theme } from '../styles/theme';
import styled from 'styled-components';
import { WithLayoutTopMenu } from './WithLayoutTopMenu';
import { Subtitle } from './Typography';
import { BgImage } from './BgImage';

const sectionBgColor = theme.palette.yellow;

const YellowSectionContainer = styled(BaseSection)`
  background-color: ${sectionBgColor};
`;

const ContentContainer = styled.div`
  max-width: 831px;
`;

// reveal an extra circle for the image when hover
export function YellowSection() {
  const [mousePosition, setMousePosition] = useState([0, 0]);
  const sectionRef = useRef(null);

  const handleMouseMove = (event) => {
    const rect = sectionRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - 120; //x position within the element.
    const y = event.clientY - rect.top - 120;  //y position within the element.
    setMousePosition([x, y])
  };

  const handleMouseOut = (event) => {
    // if (event.currentTarget !== sectionRef.current) {
    //   return;
    // }
    setMousePosition([0, 0]);
  };

  return (
    <YellowSectionContainer
      id='yellow'
      className={'flex flex-col relative'}
      height='large'
      onMouseLeave={handleMouseOut}
      onMouseMove={handleMouseMove}
      ref={sectionRef}
    >
      <BgImage x={mousePosition[0]} y={mousePosition[1]} />
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