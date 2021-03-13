import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { BaseButton, KnockoutButton } from './Commons';

const ColoredButton = styled(BaseButton)`
  color: ${theme.palette.white};
  background: transparent
    linear-gradient(90deg, #1fe1e9 0%, #5e33d1 34%, #d34848 65%, #ffb33f 100%)
    0% 0% no-repeat padding-box;
`;

TryItNowButton.defaultProps = {
  type: 'white',
  size: 'medium',
};

export default function TryItNowButton(props) {
  const { type, size, bgcolor } = props;

  return (
    <Link href='/pricing'>
      {type === 'colored' ? (
        <ColoredButton>TRY IT NOW</ColoredButton>
      ) : (
        <KnockoutButton bgcolor={bgcolor}>TRY IT NOW</KnockoutButton>
      )}
    </Link>
  );
}
