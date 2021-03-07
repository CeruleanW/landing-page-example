import React from 'react';
import { Button, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Box} from '@material-ui/core';
import ExpFooter from '../components/ExpFooter';
import ExpMenu from '../components/ExpMenu';


export default function Payments() {
  const handleChange = () => {};

  return (
    <div>
      <ExpMenu color={'black'} />
      <Typography>PAYMENT</Typography>
      <FormControl component='fieldset'>
        <RadioGroup
          aria-label='gender'
          name='gender1'
          value={''}
          onChange={handleChange}
        >
          <FormControlLabel value='basic' control={<Radio />} label='BASIC' />
          <FormControlLabel value='advanced' control={<Radio />} label='ADVANCED' />
          <FormControlLabel value='pro' control={<Radio />} label='PRO' />
        </RadioGroup>
        <Box>
          <Typography></Typography>
          <TextField />
          <TextField />
          <TextField />
          <TextField />
          <TextField />
        </Box>
        <Box>
          <Typography></Typography>
          <TextField />
          <TextField />
          <TextField />
          <TextField />
          <TextField />
        </Box>
        <Typography></Typography>
        <Button type={"colored"}>Download</Button>
      </FormControl>
      <ExpFooter />
    </div>
  );
}
