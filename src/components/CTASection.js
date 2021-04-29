import TryItNowButton from './TryItNowButton';
import H2 from './H2';
import { WithLayoutTopMenu } from './WithLayoutTopMenu';
import { SingleColorSection } from './BaseSection';
import { theme } from '../styles/theme';
import { Subtitle } from './Typography';

const sectionBgColor = theme.palette.black;

export function CTASection() {
  return (
    <SingleColorSection
      id='Get EXP|CON now'
      className={'flex flex-col'}
      sectionBgColor={sectionBgColor}
      height='medium'
    >
      <WithLayoutTopMenu noTryItNow={true} sectionBgColor={sectionBgColor}/>
      <div className={'flex mt-48 items-center justify-center'}>
          <div>
            <H2 color='red'>GET EXP|CON NOW</H2>
            <Subtitle textColor='white'>Purchase and download the app.</Subtitle>
          </div>
          <div className='ml-96'>
            <TryItNowButton type={'colored'} size={'large'}/>
          </div>
      </div>
    </SingleColorSection>
  );
}
