import React from 'react';
import styled from 'styled-components';

const StyledCircle = styled.div`
  border-radius: 50%;
`;

export default function Circle(props) {
  return (
    <StyledCircle>
      {props.children}
    </StyledCircle>
  )
}
