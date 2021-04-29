import styled from 'styled-components';
import {typographyStyles} from './Typography';


const Heading = styled.h2`
  ${typographyStyles}
  font: normal normal bold 74px/90px liberation-sans;
  letter-spacing: 7.4px;
`;

export default function H2(props) {
  const {color, className, children} = props;

  return (
    <Heading color={color ?? 'white'} className={className} >
      {children}
    </Heading>
  )
}
