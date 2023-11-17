import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');


    const player = new Vimeo.Player(iframe);
    const LOCALSTORAGE_KEY = 'videoplayer-current-time';

   player.on('timeupdate', throttle(playOn, 1000));

function playOn(el) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(el.seconds));
}

const time = localStorage.getItem(LOCAL_KEY);
if (time) {
  player.setCurrentTime(time);
}

  