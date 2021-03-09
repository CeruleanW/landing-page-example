import { Box, Button, Typography, Container } from '@material-ui/core';
import Head from 'next/head';
import ExpFooter from '../components/ExpFooter';
// import styles from '../styles/Home.module.css';
import TryItNowButton from '../components/TryItNowButton';
import ExpSlider from '../components/ExpSlider';
import ExpMenu from '../components/ExpMenu';
import Speaker from '../components/Speaker';
import DemoButton from '../components/DemoButton';
import Image from 'next/image';
import PerkGrid from '../components/PerkGrid';
import Review from '../components/Review';
import H1 from '../components/H1';
import H2 from '../components/H2';
import Circle from '../components/Circle';

import styled from 'styled-components';

const MySection = styled.section`
  position: relative;
  width: 100%;
  height: 1080px;
  display: flex;
`;

function SpeakerImage() {
  return <img />;
}

function HeroSection() {
  return (
    <MySection id='hero'>
      <div className='w-full z-0 absolute'>
        <ExpSlider />
      </div>
      <Box className='w-full z-10 absolute'>
        <ExpMenu className='mt-1 ml-1 z-10'/>
        <Box className='w-full z-10'>
          <H1>INTERACTIVE CONCERT EXPERIENCE</H1>
          <Typography className={'text-primary'}>
            Experience your favourite artists like never before and from the
            comfort of your own home.
          </Typography>
          <TryItNowButton type={'colored'} />
        </Box>
      </Box>
    </MySection>
  );
}

function RedSection() {
  return (
    <MySection id='red'>
      <ExpMenu />
      <TryItNowButton />
      <H2>SUPERIOR SOUND</H2>
      <Typography variant={'subtitle1'}>
        Experience live versions of your favourite songs.
      </Typography>
      <Speaker direction={'right'} />
      <Speaker direction={'left'} />
      <DemoButton />
    </MySection>
  );
}

const YellowSectionContainer = styled(MySection)`
  background-image: ${'url(/Image 4.png)'};
`;

// reveal an extra circle for the image when hover
function YellowSection() {

  return (
    <YellowSectionContainer id='yellow' className={''}>
      <Box className={'bg color yellow'}>
        <ExpMenu />
        <TryItNowButton />
        <H2>FRONT ROW SEATS</H2>
        <Typography variant={'subtitle1'}>
          Experience concerts up close and personal.
        </Typography>
        <DemoButton />
        <Circle />
        <Circle />
        <Circle />
      </Box>
    </YellowSectionContainer>
  );
}

function PerksSection() {
  return (
    <section id='perks'>
      <ExpMenu />
      <TryItNowButton type={'colored'} />
      <Typography>PERKS</Typography>
      <PerkGrid
        headingColor={'red'}
        bodyColor={'white'}
        heading={'Subscription Payment Model'}
        body={
          'No commitment, cancel anytime. Never worry about forgetting a payment again!'
        }
      />
      <PerkGrid
        headingColor={'blue'}
        bodyColor={'white'}
        heading={'No Fee Cancelation Policy'}
        body={
          'No commitment, cancel anytime. Never worry about forgetting a payment again!'
        }
      />
      <PerkGrid
        headingColor={'yellow'}
        bodyColor={'white'}
        heading={'Subscription Payment Model'}
        body={
          'No commitment, cancel anytime. Never worry about forgetting a payment again!'
        }
      />
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id='reviews'>
      <ExpMenu />
      <TryItNowButton />
      <SpeakerImage src={''} />
      <SpeakerImage src={''} />
      <Typography>REVIEWS</Typography>
      <Review
        rate={5}
        title={'ARTIST'}
        quote={'Love it, it’s the Best.I can’t live without it!'}
      />
      <Review
        rate={5}
        title={'PRODUCER'}
        quote={'Love it, it’s the Best.I can’t live without it!'}
      />
      <Review
        rate={5}
        title={'MUSIC FAN'}
        quote={'Love it, it’s the Best.I can’t live without it!'}
      />
    </section>
  );
}

function CTASection() {
  return (
    <section id='Get EXP|CON now'>
      <ExpMenu />
      <H2 color='red'>GET EXP|CON NOW</H2>
      <Typography>Purchase and download the app.</Typography>
      <TryItNowButton type={'colored'} />
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Main Landing Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Container maxWidth={'xl'}>
          <HeroSection />
          <RedSection />
          <YellowSection></YellowSection>
          <PerksSection></PerksSection>
          <ReviewsSection></ReviewsSection>
          <CTASection></CTASection>
          <ExpFooter />
        </Container>
      </main>
    </>
  );
}
