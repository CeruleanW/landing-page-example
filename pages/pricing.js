import React from 'react';
import ExpFooter from '../components/ExpFooter';
import ExpMenu from '../components/ExpMenu';
import PerkGrid from '../components/PerkGrid';
import { Box, Typography, Container } from '@material-ui/core';
import PriceGrid from '../components/PriceGrid';

const featureList1 = [
  'Very good',
  'Amazing',
  'Perfect job',
  'Love this',
  'It’s so good',
  'Features',
];

const featureList2 = [
  'Very good',
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

export default function pricing() {
  return (
    <div>
      <section>
        <ExpMenu />
        <Typography>PRICING</Typography>
        <Typography>
          Test out our app today! Choose from three subscription Based payment
          models.
        </Typography>
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
          features={featureList2}
        ></PriceGrid>
      </section>
      <section>
        <ExpMenu />
        <Typography>PERKS</Typography>
        <PerkGrid
          headingColor={'white'}
          bodyColor={'black'}
          heading={'Subscription Payment Model'}
          body={
            'No commitment, cancel anytime. Never worry about forgetting a payment again!'
          }
        />
        <PerkGrid
          headingColor={'white'}
          bodyColor={'black'}
          heading={'No Fee Cancelation Policy'}
          body={'No commitment, cancel anytime. Never worry about forgetting a payment again!'}
        />
        <PerkGrid
          headingColor={'white'}
          bodyColor={'black'}
          heading={'No commitment, cancel anytime. Never worry about forgetting a payment again!'}
          body={'No commitment, cancel anytime. Never worry about forgetting a payment again!'}
        />
      </section>
      <ExpFooter />
    </div>
  );
}
