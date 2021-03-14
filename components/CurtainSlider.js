import React, { useRef, useState, useEffect } from 'react';
import { Plane, useCurtains } from 'react-curtains';
import gsap from 'gsap';
import { vertexShader, fragmentShader } from './shaders/shaders';
import styled from 'styled-components';

const StyledPlane = styled(Plane)`
  width: 100%;
  height: 100%;
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
const itemSrcs = ['/Image 1.png', '/Image 2.png', '/Image 3.png'];
const itemAlts = [
  'Slide Picture showing two singers are shaking hands with audience',
  'Slide Picture',
  'Slide Picture',
];
const rednerItems = itemSrcs.map((src, index) => (
  <SlideImage src={src} alt={itemAlts[index]} key={'slide-image-' + index} />
));

export default function CurtainSlider() {
  const [plane, setPlane] = useState(null);
  const [activeTexture, setActiveTexture] = useState(1);

  const maxTextures = itemSrcs.length;

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

        setTimeout(playNextSlide, autoplaySpeed);
      }
    },
    [plane]
  );

  // update the current slide and next slide
  const handleTransitionComplete = (nextTextureIndex) => {
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
        onComplete: handleTransitionComplete,
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

  return (
    <StyledPlane
      className='Slideshow'
      // plane init parameters
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
      // plane events
      onLoading={onLoading}
      onReady={onReady}
    >
        {/* <p className={'absolute z-20 text-white'} >test</p> */}
      <div ref={slideshowInner}>
        <img
          src='./displacement.jpg'
          data-sampler='displacement'
          alt='Displacement for transition'
        />
        {rednerItems}
      </div>
    </StyledPlane>
  );
}
