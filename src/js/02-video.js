import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let currentTime = localStorage.getItem('videoplayer-current-time');

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

const throttleOptions = {
  leading: true,
  trailing: false,
};

player.on('timeupdate', throttle(onPlay, 1000, throttleOptions));

if (currentTime) {
  player.setCurrentTime(currentTime);
}