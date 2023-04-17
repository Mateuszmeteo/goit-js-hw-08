// import player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');   
const player = new Vimeo.Player(iframe);
const TIME_KEY = "videoplayer-current-time";



const onPlay = function (data) {
  const strigifyData = JSON.stringify(data);
  localStorage.setItem(TIME_KEY, strigifyData);
};
player.on('timeupdate', throttle(onPlay, 1000));

function resumePlayback() {
  if (JSON.parse(localStorage.getItem(TIME_KEY)) === null) {
    return;
  }
  const paused = JSON.parse(localStorage.getItem(TIME_KEY))['seconds'];
  if (paused) {
    player
      .setCurrentTime(paused)
      .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case 'Error':
            break;
          default:
            break;
        }
      });
  }
}
resumePlayback();















// // // ............................................ //



// const onPlay = function(data) {
//     const stringData = JSON.stringify(data)
//     localStorage.setItem(timeKey, stringData)
// };

// player.on('timeupdate', throttle(onPlay, 1000));

// // // .......................................................... //



// // player.on('eventName', function(data) {
// //     // data is an object containing properties specific to that event
// // });


// // // ............................................................ //




// // "videoplayer-current-time"


// // // ............................................ //





// player.setCurrentTime(localStorage.getItem(timeKey)).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });


// // // ........................................ //


// // var throttle = require('lodash.throttle');


