import { Typography, Container } from '@material-ui/core';
import Head from 'next/head';
import ExpFooter from '../components/ExpFooter';
import TryItNowButton from '../components/TryItNowButton';
import ExpMenu from '../components/ExpMenu';
import Image from 'next/image';
import H2 from '../components/H2';
import styled from 'styled-components';
import { HeroSection } from '../components/HeroSection';
import { RedSection } from '../components/RedSection';
import { YellowSection } from '../components/YellowSection';
import { PerksSection } from '../components/PerksSection';
import { ReviewsSection } from './ReviewsSection';

export function SpeakerImage() {
  return <img />;
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
          <YellowSection />
          <PerksSection></PerksSection>
          <ReviewsSection></ReviewsSection>
          <CTASection></CTASection>
        </Container>
        <ExpFooter />
      </main>
    </>
  );
}
