import { Typography } from '@material-ui/core';
import TryItNowButton from '../components/TryItNowButton';
import ExpMenu from '../components/ExpMenu';
import Review from '../components/Review';
import { SpeakerImage } from './index';
import { theme } from '../styles/theme';

const sectionBgColor = theme.palette.red;

export function ReviewsSection() {
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
        quote={'Love it, it’s the Best.I can’t live without it!'} />
      <Review
        rate={5}
        title={'PRODUCER'}
        quote={'Love it, it’s the Best.I can’t live without it!'} />
      <Review
        rate={5}
        title={'MUSIC FAN'}
        quote={'Love it, it’s the Best.I can’t live without it!'} />
    </section>
  );
}
