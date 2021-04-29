import styled from 'styled-components';
import {theme} from '../styles/theme';

export const BaseSection = styled.section`
  position: relative;
  width: 100%;
  height: ${(props) => {
    if (props.height === 'medium') {
      return '812px';
    } else if (props.height === 'short') {
      return '512px';
    } else if (props.height === 'large'){
      return '1080px';
    } else if (props.height) {
      return props.height;
    }
  }};
  overflow: hidden;
`;

export const SingleColorSection = styled(BaseSection)`
  background-color: ${({ sectionBgColor }) => sectionBgColor};
`;
