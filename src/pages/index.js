import { Container } from '@material-ui/core';
import Head from 'next/head';
import ExpFooter from '../components/ExpFooter';
import { HeroSection } from '../components/HeroSection';
import { RedSection } from '../components/RedSection';
import { YellowSection } from '../components/YellowSection';
import { PerksSection } from '../components/PerksSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { CTASection } from '../components/CTASection';

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
          <PerksSection/>
          <ReviewsSection></ReviewsSection>
          <CTASection></CTASection>
          <ExpFooter />
        </Container>
      </main>
    </>
  );
}
