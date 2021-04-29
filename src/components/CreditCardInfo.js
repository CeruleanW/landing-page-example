import React from 'react';
import FieldsetWrapper from './FieldsetWrapper';
import TextFieldItem from './TextFieldItem';

export default function CreditCardInfo(props) {
  const {groupTitle} = props;
  return (
    <FieldsetWrapper legend={groupTitle} className='pt-3'>
      <TextFieldItem name='CARDHOLDER’S NAME' />
      <TextFieldItem name='CARD NUMBER' />
      <TextFieldItem name='EXPIRY MONTH' />
      <TextFieldItem name='EXPIRY YEAR' />
      <TextFieldItem name='CVV' />
    </FieldsetWrapper>
  );
}
