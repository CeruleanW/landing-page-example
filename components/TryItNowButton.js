import React from 'react';
import { Button } from '@material-ui/core';

TryItNowButton.defaultProps = {
  type: "white",
  size: "medium",
};

export default function TryItNowButton(props) {
  const {type, size} = props;
  
  return (
    <Button>
      TRY IT NOW
    </Button>
  )
}
