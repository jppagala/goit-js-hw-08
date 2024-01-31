// ###############################################################
// Variable Declarations and Assignments
// ###############################################################

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const _ = require('lodash');

// ###############################################################
// Initialization
// ###############################################################
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(`RangeError in setCurrentTime()`);
        break;

      default:
        console.log(`Other Error in setCurrentTime()`);
        break;
    }
  });

player.on(
  'timeupdate',
  _.throttle(function (data) {
    console.log(`timeupdate: `, data);
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

// ###############################################################
// Functions
// ###############################################################
