import PerkGrid from './PerkGrid';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { WithLayoutTopMenu } from './WithLayoutTopMenu';
import { SingleColorSection } from './BaseSection';
import H2 from './H2';

const sectionBgColor = theme.palette.black;
const perk1 = theme.palette.red;
const perk2 = theme.palette.blue;
const perk3 = theme.palette.yellow;
const perkText = theme.palette.white;

export function PerksSection() {
  return (
    <SingleColorSection
      id='perks'
      className={'flex flex-col'}
      sectionBgColor={sectionBgColor}
    >
      <WithLayoutTopMenu buttonType='colored' />
      <div className='ml-36 mt-48'>
        <H2>PERKS</H2>
        <div className='mt-16 grid gap-40 grid-cols-3 w-11/12'>
          <PerkGrid
            headingColor={perk1}
            bodyColor={perkText}
            heading={'Subscription Payment Model'}
            body={
              'No commitment, cancel anytime. Never worry about forgetting a payment again!'
            }
          />
          <PerkGrid
            headingColor={perk2}
            bodyColor={perkText}
            heading={'No Fee Cancelation Policy'}
            body={
              'No commitment, cancel anytime. Never worry about forgetting a payment again!'
            }
          />
          <PerkGrid
            headingColor={perk3}
            bodyColor={perkText}
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
