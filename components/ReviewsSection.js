import { Typography } from '@material-ui/core';
import Review from './Review';
import { theme } from '../styles/theme';
import { SingleColorSection } from './BaseSection';
import { WithLayoutTopMenu } from './WithLayoutTopMenu';
import H2 from './H2';
import styled from 'styled-components';

const SpeakerImage = styled.div`
  background: ${(props) => `transparent url('${props.src}') 0% 0% no-repeat padding-box`};
  /* box-shadow: 10px 60px 40px #0000003E; */
  opacity: 1;
  width: 493px;
  height: 400px;
  position: absolute;
  background-position: top;
`;

const SpeakerImage1 = styled(SpeakerImage)`
  transform: matrix(0.98, 0.17, -0.17, 0.98, 0, 0);
`;

const SpeakerImage2 = styled(SpeakerImage)`
  transform: matrix(0.98, -0.21, 0.21, 0.98, 0, 0);
`;

const SpeakContainer = styled.div`
  width: 550px;
`;

const sectionBgColor = theme.palette.blue;

export function ReviewsSection() {
  return (
    <SingleColorSection id='reviews' className={'flex flex-col'} sectionBgColor={sectionBgColor} >
      <WithLayoutTopMenu sectionBgColor={sectionBgColor} />
      <div className={'flex flex-grow mt-56'}>
        <SpeakContainer className='relative ml-12 flex-shrink-0'>
          <SpeakerImage src={'/images/SmallSpeaker1-03.png'} className='-top-24'/>
          <SpeakerImage src={'/images/SmallSpeaker2-03.png'} className='top-48 left-28' />
        </SpeakContainer>
        <div className='ml-2'>
          <H2>REVIEWS</H2>
          <div className='grid gap-24 grid-cols-3 w-11/12 mt-20'>
            <Review
              rate={5}
              title={'ARTIST'}
              quote={'Love it, it’s the Best.I can’t live without it!'} />
            <Review
              rate={5}
              title={'PRODUCER'}
              quote={'Love it, it’s the Best.I can’t live without it!'} />
            <Review
              rate={5}
              title={'MUSIC FAN'}
              quote={'Love it, it’s the Best.I can’t live without it!'} />
          </div>
        </div>
      </div>
    </SingleColorSection>
  );
}
