
import PerkGrid from './PerkGrid';
import { theme } from '../styles/theme';
import { WithLayoutTopMenu } from './WithLayoutTopMenu';
import { SingleColorSection } from './BaseSection';
import H2 from './H2';

const perk1 = 'red';
const perk2 = 'blue';
const perk3 = 'yellow';

PerksSection.defaultProps = {
  secondaryTextColor: 'white',
}

export function PerksSection(props) {
  const {bgcolor, mainTextColor, secondaryTextColor, noTryItNow} = props;

  return (
    <SingleColorSection
      id='perks'
      className={'flex flex-col'}
      sectionBgColor={bgcolor ?? theme.palette.black}
    >
      <WithLayoutTopMenu buttonType='colored' noTryItNow={noTryItNow ?? false} sectionBgColor={bgcolor ?? theme.palette.black} />
      <div className='ml-36 mt-48 mb-32'>
        <H2 color={mainTextColor} >PERKS</H2>
        <div className='mt-16 grid gap-40 grid-cols-3 w-11/12'>
          <PerkGrid
            headingColor={mainTextColor ?? perk1}
            bodyColor={secondaryTextColor}
            heading={'Subscription Payment Model'}
            body={
              'No commitment, cancel anytime. Never worry about forgetting a payment again!'
            }
          />
          <PerkGrid
            headingColor={mainTextColor ?? perk2}
            bodyColor={secondaryTextColor}
            heading={'No Fee Cancelation Policy'}
            body={
              'No commitment, cancel anytime. Never worry about forgetting a payment again!'
            }
          />
          <PerkGrid
            headingColor={mainTextColor ?? perk3}
            bodyColor={secondaryTextColor}
            heading={'Subscription Payment Model'}
            body={
              'No commitment, cancel anytime. Never worry about forgetting a payment again!'
            }
          />
        </div>
      </div>
    </SingleColorSection>
  );
}
