import { Typography } from '@material-ui/core';
import DemoButton from './DemoButton';
import H2 from './H2';
import Circle from './Circle';
import { BaseSection } from './BaseSection';
import { theme } from '../styles/theme';
import styled from 'styled-components';
import { WithLayoutTopMenu } from './WithLayoutTopMenu';

const sectionBgColor = theme.palette.yellow;

const YellowSectionContainer = styled(BaseSection)`
  background-color: ${sectionBgColor};
`;

const BgDiv = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("./images/Image 4.png");
  background-size: cover;
  z-index: 0;
  mask: url("./circle.svg") 30% 24% / 400px no-repeat,
        url("./circle.svg") 6% 80% / 590px no-repeat,
        url("./circle.svg") 110% 130% / 480px no-repeat;
`;

const Subtitle = styled.p`
  text-align: left;
  font: normal normal normal 51px/61px liberation-sans;
  letter-spacing: 5.1px;
  color: #191919;
  opacity: 1;
`;

const ContentContainer = styled.div`
  max-width: 831px;
`;

// reveal an extra circle for the image when hover
export function YellowSection() {
  return (
    <YellowSectionContainer id='yellow' className={'flex flex-col relative'}>
      <BgDiv className={'absolute'}></BgDiv>
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
