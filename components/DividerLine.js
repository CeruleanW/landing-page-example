import React from 'react';
import {theme} from '../styles/theme'

export function DividerLine(props) {
  const { headingColor } = props;
  return (
    <svg height='20' width='100'>
      <line
        x1='0'
        x2='100'
        style={{ stroke: theme.palette[headingColor] ?? 'white', strokeWidth: 4 }} />
    </svg>
  );
}
