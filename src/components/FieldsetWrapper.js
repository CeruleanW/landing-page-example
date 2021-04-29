import React from 'react';
import { FieldsetLegend } from './FieldsetLegend';

export default function FieldsetWrapper(props) {
  const { legend, children, className } = props;

  return (
    <>
      <fieldset className={`w-full max-w-2xl ${className}`}>
        <FieldsetLegend>{legend}</FieldsetLegend>
        {children}
      </fieldset>
    </>
  );
}
