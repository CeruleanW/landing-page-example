import { Box, Button, Typography, Container } from '@material-ui/core';
import Head from 'next/head';
import ExpFooter from '../components/ExpFooter';
// import styles from '../styles/Home.module.css';
import TryItNowButton from '../components/TryItNowButton';
import ExpMenu from '../components/ExpMenu';
import DemoButton from '../components/DemoButton';
import Image from 'next/image';
import PerkGrid from '../components/PerkGrid';
import Review from '../components/Review';
import H2 from '../components/H2';
import Circle from '../components/Circle';
import styled from 'styled-components';
import { HeroSection } from '../components/HeroSection';
import { RedSection } from '../components/RedSection';
import { BaseSection } from '../components/BaseSection';

function SpeakerImage() {
  return <img />;
}

const YellowSectionContainer = styled(BaseSection)`
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
        </Container>
          <ExpFooter />
      </main>
    </>
  );
}
