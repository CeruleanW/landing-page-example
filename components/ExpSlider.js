import React, { useRef, useState, useEffect } from "react";
import Image from 'next/image';
import { Box, Button, Typography } from '@material-ui/core';
// import { styled } from '@material-ui/core/styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Plane, useCurtains } from "react-curtains";
import gsap from "gsap";
import { vertexShader, fragmentShader } from "./shaders/shaders";
import styled from 'styled-components';

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
  //Inputs
  const autoplaySpeed = 10000;
  const itemSrcs = ['/Image 1.png', '/Image 2.png', '/Image 3.png'];
  const itemAlts = ['Slide Picture showing two singers are shaking hands with audience', 'Slide Picture', 'Slide Picture'];
  const rednerItems = itemSrcs.map( (src, index) => <SlideImage src={itemSrcs[index]} alt={itemAlts[index]} key={'slide-image-' + index} />);
  
  const bottomStyle = { bottom: '50px' };

  const settings = {
    autoPlay: true,
    interval: autoplaySpeed,
    infiniteLoop: true,
    showArrows: false,
    showStatus: false,
    showThumbs: false,
    // renderIndicator: (clickHandler, isSelected, index, label) => {
    //   <DotItem>{' '}</DotItem>;
    // },
  };

  return (
    <>
      <Carousel {...settings}>
        {rednerItems}
      </Carousel>
    </>
  );
}
