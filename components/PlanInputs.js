import React from 'react';
import { RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';
import FieldsetWrapper from './FieldsetWrapper';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 37px;
  line-height: 45px;
  font-weight: bold;
  letter-spacing: 3.7px;
  color: ${(props) => props.color};
`;

const RadioInput = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 3px solid #000000;
  width: 29px;
  height: 28px;
  &:checked {
  }
`;

const Radio = ({ input, color }) => {
  return (
    <div className='mr-8'>
      <RadioInput
        type='radio'
        id={input}
        name={'plan'}
        value={input}
        className={'mr-2'}
        color={color}
      />
      <Label htmlFor={input} color={color}>
        {input.toUpperCase()}
      </Label>
    </div>
  );
};

Radio.defaultProps = {
  input: '',
};

export function PlanInputs(props) {
  const { groupTitle } = props;

  return (
    <FieldsetWrapper legend={groupTitle} className='w-48'>
      <div className='flex'>
        <Radio input='basic' color='#d24848' />
        <Radio input='advanced' color='#FFB33F' />
        <Radio input='pro' color='#1FE1E9' />
      </div>
    </FieldsetWrapper>
  );
}
