import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { BaseButton, KnockoutButton } from './Commons';
import styles from '../styles/btn.module.scss';

const ColoredButton = styled(BaseButton)`
  color: ${theme.palette.white};
  background: transparent
    linear-gradient(90deg, #1fe1e9 0%, #5e33d1 34%, #d34848 65%, #ffb33f 100%)
    0% 0% no-repeat padding-box;
`;

TryItNowButton.defaultProps = {
  type: 'white', // types: white || colored
  size: 'medium',
};

export default function TryItNowButton(props) {
  const { type, size, bgcolor } = props;

  return (
    <>
      <Link href='/pricing'>
        {type === 'colored' ? (
          <ColoredButton
            data-text='TRY IT NOW'
            className={styles['btn-mix-noborder']}
          />
        ) : (
          <KnockoutButton bgcolor={bgcolor} disableElevation>
            TRY IT NOW
          </KnockoutButton>
        )}
      </Link>
    </>
  );
}
