import styled from 'styled-components';

export const BaseSection = styled.section`
  position: relative;
  width: 100%;
  height: 1080px;
  display: flex;
  overflow: hidden;
`;

export const SingleColorSection = styled(BaseSection)`
  background-color: ${({ sectionBgColor }) => sectionBgColor};
`;
