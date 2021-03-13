import React from 'react';
import EmailLink from './EmailLink';
import { Box, Button, Typography } from '@material-ui/core';

export default function ExpFooter() {
  return (
    <footer>
      <EmailLink />
      <Typography>EXP|CON</Typography>
      <Typography><small>2019 © All Rights Reserved | Speer Technologies Incorporated</small></Typography>
    </footer>
  );
}
