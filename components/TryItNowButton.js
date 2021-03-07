import React from 'react';
import { Button } from '@material-ui/core';
import Link from 'next/link';

TryItNowButton.defaultProps = {
  type: 'white',
  size: 'medium',
};

export default function TryItNowButton(props) {
  const { type, size } = props;

  return (
    <Link href='/pricing'>
      <Button>TRY IT NOW</Button>
    </Link>
  );
}
