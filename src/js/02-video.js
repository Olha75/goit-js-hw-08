import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

    const player = new Player(iframe);
   
   player.on('timeupdate', throttle((e) =>{
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(e.seconds));
}, 1000));

const storedTime = localStorage.getItem(LOCALSTORAGE_KEY);
if (storedTime) {
  player.setCurrentTime(parseFloat(storedTime));
}

  