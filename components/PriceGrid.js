import React from 'react';
import { Box, List, ListItem, Button } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Link from 'next/link';
import { DividerLine } from './DividerLine';
import {BaseP, typographyStyles} from './Typography';
import styled from 'styled-components';
import {BaseButton } from './Buttons';

const HeadingUp = styled(BaseP)`
  font-size: 42px;
  line-height: 51px;
  letter-spacing: 4.2px;
  font-weight: bold;
`;

const HeadingDown = styled(BaseP)`
  font-size: 47px;
  line-height: 57px;
  letter-spacing: 4.7px;
  font-weight: bold;
`;

const P = styled(BaseP)`
  font-size: 134px;
  line-height: 164px;
  letter-spacing: 13.4px;
  font-weight: bold;
`;

const MyListItem = styled(ListItem)`${typographyStyles}`;

const StyledListItem = styled(MyListItem)`
  font-size: 47px;
  line-height: 64px;
  letter-spacing: 4.7px;
`;

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
      <div>
        <HeadingUp color={headingColor} className='mb-2'>{headingUp}</HeadingUp>
        <DividerLine headingColor={headingColor} />
        <HeadingDown color={headingColor}>{headingDown}</HeadingDown>
        <P color={headingColor}>${price}</P>
      </div>
      <List aria-label='Feature list'>
        {features.map((item) => (
          <StyledListItem key={item} color='white'>
            <MusicNoteIcon />
            {item}
          </StyledListItem>
        ))}
      </List>
      <Link href='/payments'>
        <BaseButton textColor='white' bgcolor={headingColor}>SELECT</BaseButton>
      </Link>
    </div>
  );
}
