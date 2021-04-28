import styled from 'styled-components';

export const BaseSection = styled.section`
  position: relative;
  width: 100%;
  height: ${(props) => {
    if (props.height === 'medium') {
      return '812px';
    } else if (props.height === 'short') {
      return '512px';
    } else {
      return '1080px';
    }
  }};
  overflow: hidden;
`;

export const SingleColorSection = styled(BaseSection)`
  background-color: ${({ sectionBgColor }) => sectionBgColor};
`;
