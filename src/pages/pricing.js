import React from 'react';
import ExpFooter from '../components/ExpFooter';
import PriceGrid from '../components/PriceGrid';
import { SingleColorSection } from '../components/BaseSection';
import { theme } from '../styles/theme';
import { WithLayoutTopMenu } from '../components/WithLayoutTopMenu';
import { Subtitle, typographyStyles } from '../components/Typography';
import styled from 'styled-components';
import { PerksSection } from '../components/PerksSection';

const featureList1 = [
  'Very good',
  'Amazing',
  'Perfect job',
  'Love this',
  'It’s so good',
  'Features',
];

const featureList2 = [
  'Very very good',
  'Even Amazing',
  'Perfect job',
  'Love this more',
  'It’s so so good',
  'More Features',
];
const featureList3 = [
  'Very very good',
  'Even more',
  'Perfect job',
  'Love this more',
  'It’s so so good',
  'More Features',
];

const sectionBgColor = theme.palette.black;


const Heading = styled.h2`
  ${typographyStyles}
`;

const StyledHeading = styled(Heading)`
  font-weight: bold;
  font-size: 74px;
  line-height: 90px;
  letter-spacing: 7.4px;
`;

export default function pricing() {
  return (
    <div>
      <SingleColorSection id='pricing' sectionBgColor={sectionBgColor}>
        <WithLayoutTopMenu noTryItNow />
        <div className='p-28'>
          <StyledHeading color='white'>PRICING</StyledHeading>
          <Subtitle textColor='white'>
            Test out our app today! Choose from three subscription Based payment
            models.
          </Subtitle>
          <div className='flex w-full justify-between mt-40'>
            <PriceGrid
              headingColor={'red'}
              headingUp='BASIC'
              headingDown='MONTHLY'
              price={9}
              features={featureList1}
            ></PriceGrid>
            <PriceGrid
              headingColor={'yellow'}
              headingUp='ADVANCED'
              headingDown='YEARLY'
              price={99}
              features={featureList2}
            ></PriceGrid>
            <PriceGrid
              headingColor={'blue'}
              headingUp='PRO'
              headingDown='YEARLY'
              price={120}
              features={featureList3}
            ></PriceGrid>
          </div>
        </div>
      </SingleColorSection>
      <PerksSection bgcolor={theme.palette.red} mainTextColor='white' secondaryTextColor='black' noTryItNow={true}/>
      <ExpFooter />
    </div>
  );
}
