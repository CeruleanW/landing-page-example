import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import styled from 'styled-components';

const EmailText = styled.p`
  text-align: left;
  font: normal normal normal 35px/41px liberation-sans;
  letter-spacing: 3.5px;
  color: #ffffff;
  margin-left: 1rem;
`;

export default function EmailLink() {
  return (
    <div className={'flex mt-36 ml-24'}>
      <EmailIcon htmlColor={'white'} fontSize={'large'}/>
      <EmailText>support@experienceconcerts.co</EmailText>
    </div>
  );
}
