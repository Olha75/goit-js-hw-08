import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const LOCALSTORAGE_KEY = 'videoplayer-current-time'; 
const player = new Player(iframe);

const storedTime = localStorage.getItem(LOCALSTORAGE_KEY);
if (storedTime) {
  player.setCurrentTime(parseFloat(storedTime));
}
player.on('timeupdate', throttle((event) => {
  const currentTime = event.seconds;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTime));
}, 1000));

player.play();