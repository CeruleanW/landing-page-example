import { Button, Typography } from '@material-ui/core';
import Head from 'next/head';
import ExpFooter from '../components/ExpFooter';
import styles from '../styles/Home.module.css';
import TryItNowButton from '../components/TryItNowButton';
import ExpSlider from '../components/ExpSlider';


function SpeakerImage() {
  return (<img />);
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Main Landing Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <section id='hero'>
          <ExpSlider>
            <ExpMenu />
            <Typography></Typography>
            <Typography></Typography>
            <TryItNowButton type={'colored'} />
          </ExpSlider>
        </section>
        <section id='red'>
          <ExpMenu />
          <TryItNowButton />
          <Typography></Typography>
          <Typography></Typography>
          <Speaker direction={'right'} />
          <Speaker direction={'left'} />
          <DemoButton />
        </section>
        <section id='yellow'>
          <ExpMenu />
          <TryItNowButton />
          <Box>
            <Image></Image>
            <Image></Image>
          </Box>
          <Typography></Typography>
          <Typography></Typography>
          <DemoButton />
          <Image></Image>
        </section>
        <section id='perks'>
          <ExpMenu />
          <TryItNowButton type={'colored'} />
          <Typography>PERKS</Typography>
          <PerkGrid headingColor={"red"} heading={""} body={""}/>
          <PerkGrid headingColor={"blue"} heading={""} body={""}/>
          <PerkGrid headingColor={"yellow"} heading={""} body={""}/>
        </section>
        <section id='reviews'>
          <ExpMenu />
          <TryItNowButton />
          <SpeakerImage/>
          <SpeakerImage/>
          <Typography>REVIEWS</Typography>
          <Review rate={5} title={""} quote={""} />
          <Review rate={5} title={""} quote={""} />
          <Review rate={5} title={""} quote={""} />
        </section>
        <section id='Get EXP|CON now'>
          <ExpMenu />
          <Typography>GET EXP|CON NOW</Typography>
          <Typography></Typography>
          <TryItNowButton type={'colored'} />
        </section>
      </main>
      <ExpFooter/>
    </div>
  );
}
