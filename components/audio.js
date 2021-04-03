import {Howl, Howler} from 'howler';

const MusicSrcs = ['./assets/BeeGees-StayAlive.mp3'];

const music = new Howl({
  src: MusicSrcs,
  loop: true,
});

export default music;