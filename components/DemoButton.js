import React from 'react';
import { KnockoutButton } from './Commons';

//no link currently
export default function DemoButton(props) {
  const { size, bgcolor } = props;
  return <KnockoutButton bgcolor={bgcolor}>SEE DEMO</KnockoutButton>;
}
