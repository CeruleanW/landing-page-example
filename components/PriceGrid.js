import React from 'react';
import { Typography, Box, List, ListItem, Button } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Link from 'next/link';

export default function PriceGrid(props) {
  const {
    headingColor,
    bodyColor,
    headingUp,
    headingDown,
    price,
    features,
  } = props;

  return (
    <div>
      <Box>
        <Typography>{headingUp}</Typography>
        <Typography>{headingDown}</Typography>
        <Typography>${price}</Typography>
      </Box>
      <List aria-label='Feature list'>
        {features.map((item) => (
          <ListItem>
            <MusicNoteIcon />
            {item}
          </ListItem>
        ))}
      </List>
      <Link href='/payments'>
        <Button>SELECT</Button>
      </Link>
    </div>
  );
}
