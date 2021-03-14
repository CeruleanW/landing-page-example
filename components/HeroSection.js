import { Box, Typography } from '@material-ui/core';
import TryItNowButton from './TryItNowButton';
import ExpSlider from './ExpSlider';
import ExpMenu from './ExpMenu';
import H1 from './H1';
import { theme } from '../styles/theme';
import { BaseSection } from "./BaseSection";
import styled from 'styled-components';
import { useCurtains } from "react-curtains";
import gsap from "gsap";
import CurtainSlider from './CurtainSlider';

const Text = styled(Typography)`
  text-align: center;
  font: normal normal normal 32px/44px liberation-sans;
  letter-spacing: 3.2px;
  color: ${theme.palette.primary.main};
  opacity: 1;
  max-width: 50%;
`;

export function HeroSection() {

  useCurtains((curtains) => {
    // use gsap ticker to render our curtains scene
    gsap.ticker.add(curtains.render.bind(curtains));
  });

  return (
    <>
      {/* <div style={{height: '100vh'}} onClick={() => console.log('test')}>
      <CurtainSlider/>
      </div> */}
      <BaseSection id='hero'>
        <div className='w-full z-0 absolute' style={{height: '100%'}}>
          {/* <ExpSlider /> */}
          <CurtainSlider/>
        </div>
        <Box className='w-full h-full z-10 absolute flex flex-col'>
          <div className={'w-max mt-10 ml-10'}>
            <ExpMenu className='z-10' />
          </div>
          <Box className='w-full z-10 content-center pt-96'>
            <H1>INTERACTIVE CONCERT EXPERIENCE</H1>
            <div className='flex justify-center mt-5'>
              <Text className={''}>
                Experience your favourite artists like never before and from the
                comfort of your own home.
              </Text>
            </div>
            <div className={'flex justify-center mt-5'}>
              <TryItNowButton type={'colored'} />
            </div>
          </Box>
        </Box>
      </BaseSection>
    </>
  );
}
