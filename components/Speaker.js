import React from 'react';
import styled from 'styled-components';
import music from './audio';

const Img = styled.div`
  background: ${(props) => props.bgImg};
  box-shadow: 5px 40px 30px #9b2525;
  opacity: 1;
  width: 250px;
  height: 400px;
  display: inline-block;
  background-position: top;
  cursor: pointer;
`;

export default function Speaker(props) {
  const { src } = props;
  const bgImg = `transparent url('${src}') 0% 0% no-repeat padding-box`;

  const handleClick = () => {
    console.log('music player clicked');
    if (music.playing()) {
      music.pause();
    } else {
      music.play();
    }
  };

  return (
    <>
      <Img bgImg={bgImg} onClick={handleClick} />
    </>
  );
}
