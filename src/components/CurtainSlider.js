import React, { useRef, useState, useEffect } from 'react';
import { Plane, useCurtains } from 'react-curtains';
import gsap from 'gsap';
import { vertexShader, fragmentShader } from './shaders/shaders';
import styled from 'styled-components';

const StyledPlane = styled(Plane)`
  width: 100%;
  height: 100%;
`;

const DotItem = styled.button`
  background: #ffffff 0% 0% no-repeat padding-box;
  background-color: ${(props) => (props.active ? '#000' : '#FFFFFF')};
  border: 1px solid #ffffff;
  opacity: 1;
  width: 17px;
  height: 17px;
  display: inline-block;
  margin: 7px;
  border-radius: 50%;
`;

const SlideImage = (props) => {
  const { src, alt } = props;
  return (
    <img
      src={src}
      alt={alt}
      style={{ height: '1080px', width: '1920px', display: 'none' }}
    />
  );
};

//Inputs
const autoplaySpeed = 4000;
const itemSrcs = [
  '/images/Image 1.png',
  '/images/Image 2.png',
  '/images/Image 3.png',
];
const itemAlts = [
  'Slide Picture showing two singers are shaking hands with audience',
  'Slide Picture',
  'Slide Picture',
];
const renderItems = itemSrcs.map((src, index) => (
  <SlideImage src={src} alt={itemAlts[index]} key={'slide-image-' + index} />
));

//TODO: 1. change active dot color; 2.disable active dot click
export default function CurtainSlider() {
  const maxTextures = itemSrcs.length;
  const [plane, setPlane] = useState(null);
  const [activeTexture, setActiveTexture] = useState(1);

  const slideshowInner = useRef(null);
  const isChanging = useRef(false);
  const tween = useRef(null);
  const activeTex = useRef(null);
  const nextTex = useRef(null);
  const autoplayTimer = useRef(null);

  const uniforms = {
    transitionTimer: {
      name: 'uTransitionTimer',
      type: '1f',
      value: 0,
    },
  };

  //called once the curtains WebGL context has been created and each time one of the dependencies changed after that
  useCurtains(
    (curtains) => {
      if (plane) {
        // first we set our very first image as the active texture
        activeTex.current = plane.createTexture({
          sampler: 'activeTex',
          fromTexture: plane.textures[activeTexture],
        });
        // next we set the second image as next texture but this is not mandatory
        // as we will reset the next texture on slide change
        nextTex.current = plane.createTexture({
          sampler: 'nextTex',
          fromTexture: plane.textures[activeTexture + 1],
        });

        autoplayTimer.current = setTimeout(playNextSlide, autoplaySpeed);
      }
    },
    [plane]
  );

  // update the current slide and next slide
  const handleTransitionComplete = (activeTexture) => {
    isChanging.current = false;
    tween.current = null;

    plane.uniforms.transitionTimer.value = 0;

    // set next texture to the active texture
    const activeTextureIndex = getNextTextureIndex(activeTexture, maxTextures);
    activeTex.current.setSource(plane.images[activeTextureIndex]);
    setActiveTexture(activeTextureIndex);
  };

  const transitionDuration = 1.75;

  // get index for the next image
  function getNextTextureIndex(activeTexture, maxTextures) {
    let nextTextureIndex;
    if (activeTexture < maxTextures) {
      nextTextureIndex = activeTexture + 1;
    } else {
      nextTextureIndex = 1;
    }
    return nextTextureIndex;
  }

  const playNextSlide = () => {
    if (!isChanging.current && plane) {
      isChanging.current = true;
      const nextTextureIndex = getNextTextureIndex(activeTexture, maxTextures);
      const nextImg = plane.images[nextTextureIndex];
      nextTex.current.setSource(nextImg);

      tween.current = gsap.to(plane.uniforms.transitionTimer, {
        duration: transitionDuration,
        value: 90,
        ease: 'power2.inOut',
        onComplete: () => handleTransitionComplete(activeTexture),
      });
    }
  };

  const jumpToSlide = (index) => {
    if (!isChanging.current && plane) {
      isChanging.current = true;
      const nextTextureIndex = getNextTextureIndex(index, maxTextures);
      const nextImg = plane.images[nextTextureIndex];
      nextTex.current.setSource(nextImg);

      tween.current = gsap.to(plane.uniforms.transitionTimer, {
        duration: transitionDuration,
        value: 90,
        ease: 'power2.inOut',
        onComplete: () => handleTransitionComplete(index),
      });
    }
  };

  useEffect(() => {
    let currentTween = tween.current;
    return () => {
      if (currentTween) {
        currentTween.kill();
      }
    };
  }, []);

  useEffect(() => {
    autoplayTimer.current = setTimeout(playNextSlide, autoplaySpeed);
  }, [activeTexture]);

  // improve texture rendering on small screens with LINEAR_MIPMAP_NEAREST minFilter
  const onLoading = (plane, texture) => {
    texture.setMinFilter(texture.gl.LINEAR_MIPMAP_NEAREST);
  };

  const onReady = (plane) => {
    setPlane(plane);
  };

  const handleIndicatorClick = (imgIndex) => {
    console.log('dot is clicked');
    isChanging.current = false;
    clearTimeout(autoplayTimer.current);
    jumpToSlide(imgIndex);
  };

  return (
    <>
      <StyledPlane
        className='Slideshow absolute'
        // plane init parameters
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        // plane events
        onLoading={onLoading}
        onReady={onReady}
      >
        <div ref={slideshowInner}>
          <img
            src='./displacement.jpg'
            data-sampler='displacement'
            alt='Displacement for transition'
          />
          {renderItems}
        </div>
      </StyledPlane>
      <div className={'absolute z-20 bottom-3 w-full flex justify-center'}>
        {itemSrcs.map((item, index) => (
          <DotItem
            key={'dot-' + index}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </>
  );
}
