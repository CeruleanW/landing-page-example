import React, { useRef, useState, useEffect } from "react";
import Image from 'next/image';
import { Box, Button, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Plane, useCurtains } from "react-curtains";
import gsap from "gsap";
import { vertexShader, fragmentShader } from "./shaders/shaders";

const SlideImage = (props) => {
  const { src, alt } = props;
  return (
    <img
      className={``}
      src={src}
      alt={alt}
      style={{ height: '1080px', width: '1920px' }}
    />
  );
  // return (
  //   <Box height={'1080px'} width={'1920px'}>
  //     <Image src={src} alt={alt} width={1920} height={1080} />
  //   </Box>
  // );
};

const DotItem = styled(Box)({
  background: '#FFFFFF 0% 0% no-repeat padding-box',
  border: '1px solid #FFFFFF',
  opacity: 1,
  width: '17px',
  height: '17px',
});

//TODO: render dot item style, overwrite dots style to lift up
// with white dot
export default function ExpSlider(props) {
  const autoplaySpeed = 10000;
  const bottomStyle = { bottom: '50px' };

  // const handleDragStart = (e) => e.preventDefault();
  const items = [
    <SlideImage
      src={'/Image 1.png'}
      alt='Slide Picture showing two singers are shaking hands with audience'
    />,
    <SlideImage src={'/Image 2.png'} alt='Slide Picture' />,
    <SlideImage src={'/Image 3.png'} alt='Slide Picture' />,
  ];

  const settings = {
    autoPlay: true,
    interval: autoplaySpeed,
    infiniteLoop: true,
    showArrows: false,
    showStatus: false,
    showThumbs: false,
    // renderIndicator: (onClickHandler, isSelected, index, label) => {
    //   <DotItem />;
    // },
  };

  return (
    <>
      <Carousel {...settings}>
        <SlideImage
          src={'/Image 1.png'}
          alt='Slide Picture showing two singers are shaking hands with audience'
        />
        <SlideImage src={'/Image 2.png'} alt='e' />
        <SlideImage src={'/Image 3.png'} alt='e' />
      </Carousel>
    </>
  );
}
