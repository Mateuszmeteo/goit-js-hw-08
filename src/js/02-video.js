// import player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    
const player = new Vimeo.Player(iframe);


// player.on('timeupdate', throttle(onPlay, 1000));

// function onPlay({ seconds }) {
//   localStorage.setItem('videoplayer-current-time', seconds);
// }

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));


// // // ............................................ //



// // const onPlay = function(data) {
// //     // data is an object containing properties specific to that event
// // };

// // player.on('play', onPlay);

// // // .......................................................... //



// // player.on('eventName', function(data) {
// //     // data is an object containing properties specific to that event
// // });


// // // ............................................................ //




// // "videoplayer-current-time"


// // // ............................................ //





// // player.setCurrentTime(30.456).then(function(seconds) {
// //     // seconds = the actual time that the player seeked to
// // }).catch(function(error) {
// //     switch (error.name) {
// //         case 'RangeError':
// //             // the time was less than 0 or greater than the video’s duration
// //             break;

// //         default:
// //             // some other error occurred
// //             break;
// //     }
// // });


// // // ........................................ //


// // var throttle = require('lodash.throttle');


