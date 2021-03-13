import { Typography } from '@material-ui/core';
import TryItNowButton from './TryItNowButton';
import ExpMenu from './ExpMenu';
import Speaker from './Speaker';
import DemoButton from './DemoButton';
import H2 from './H2';
import { BaseSection } from './BaseSection';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const RedContainer = styled(BaseSection)`
  background-color: ${theme.palette.red};
`;

const Subtitle = styled.p`
  text-align: left;
  font: normal normal normal 51px/61px liberation-sans;
  letter-spacing: 5.1px;
  color: ${theme.palette.black};
  opacity: 1;
`;

export function RedSection() {
  return (
    <RedContainer id='red' className={'flex flex-col'}>
      <div className={'w-full mt-16 px-12 z-10 flex'}>
        <ExpMenu />
        <div className='flex-grow'></div>
        <TryItNowButton bgcolor={theme.palette.red} />
      </div>
      <div className={'flex flex-grow'}>
        <div className={'flex flex-col ml-36 mt-64 max-w-4xl'}>
          <H2>SUPERIOR SOUND</H2>
          <Subtitle className={'mt-6'}>
            Experience live versions of your favourite songs.
          </Subtitle>
          <div className={'mt-8'}>
            <DemoButton bgcolor={theme.palette.red} />
          </div>
        </div>
        <div className={'mr-32 flex-grow relative'}>
          <div className={'absolute top-32 left-20'}>
            <Speaker src={'./medium17.png'} />
          </div>
          <div className={'absolute bottom-40 right-12'}>
            <Speaker src={'./medium27.png'} />
          </div>
        </div>
      </div>
    </RedContainer>
  );
}
