import React from 'react';
import { Button } from '@material-ui/core';
import { ColoredButton } from '../components/Buttons';
import ExpFooter from '../components/ExpFooter';
import ExpMenu from '../components/ExpMenu';
import H2 from '../components/H2';
import { PlanInputs } from '../components/PlanInputs';
import { BillingInputs } from '../components/BillingInputs';
import CreditCardInfo from '../components/CreditCardInfo';
import Link from 'next/link';
import styled from 'styled-components';
import { legendStyles } from '../components/FieldsetLegend';

const Ol = styled.ol`
  list-style: decimal;
  & li::marker {
    ${legendStyles}
  }
`;

const P = styled.p`
  letter-spacing: 2.2px;
`;

const StyledLink = styled.span`
  color: #2f1fe9;
  &:hover {
    border-bottom: 2px solid #2f1fe9;
  }
`;

export default function Payments() {
  const handleChange = () => {};

  return (
    <div>
      <ExpMenu color={'black'} size={'small'} />
      <form className='p-12 pt-32'>
        <H2 color='black' className='mb-20'>
          PAYMENT
        </H2>

        <Ol className='mb-24'>
          <li className='mb-32 ml-16'>
            <PlanInputs
              handleChange={handleChange}
              groupTitle='Select your plan'
            ></PlanInputs>
          </li>
          <div className='flex'>
            <li className='w-full lg:w-1/2 ml-16'>
              <BillingInputs groupTitle='Billing Information' />
            </li>
            <li className='w-full lg:w-1/2 ml-16'>
              <CreditCardInfo groupTitle='Credit Card Information' />
            </li>
          </div>
        </Ol>
        <div className='ml-16 max-w-xl'>
          <P>
            By continuing, I acknowledge that I’ve read and agree to the{' '}
            <Link href='#'><StyledLink>Terms of Service</StyledLink></Link> {'& '}
            <Link href='#'><StyledLink>Privacy Policy</StyledLink></Link>.
          </P>
          <ColoredButton className='mt-8'>Download</ColoredButton>
        </div>
      </form>
      <ExpFooter />
    </div>
  );
}
