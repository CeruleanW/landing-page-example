import React from 'react';
import { Typography } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';

export default function EmailLink() {
  return (
    <div>
      <EmailIcon/>
      <Typography>support@experienceconcerts.co</Typography>
    </div>
  );
}
