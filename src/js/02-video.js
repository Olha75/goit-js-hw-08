import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });

// player.on('play', function() {
//     console.log('played the video!');
// });


// <iframe src="https://player.vimeo.com/video/76979871?h=8272103f6e" width="640" height="360" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>

// <script src="https://player.vimeo.com/api/player.js"></script>
// <script>
//     const iframe = document.querySelector('iframe');
const iframe = document.querySelector('#vimeo-player');

    const player = new Vimeo.Player(iframe);
    const LOCALSTORAGE_KEY = 'videoplayer-current-time';

   player.on('timeupdate', throttle(handleTimeupdate, 1000));

function handleTimeupdate() {
    player
      .getCurrentTime()
      .then(currentTime => localStorage.setItem(LOCALSTORAGE_KEY, currentTime));
  }
  
  player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
  