import SwipeCarousel from './swipe-carousel.js';


/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */


// function createCarousel(slidesCount = 5) {
//   // ваш код здесь
// }

// createCarousel(4);

const carousel = new SwipeCarousel({
  containerID: '#myCarousel',
    // slideID: '.item', 
    interval: 1000, 
    // isPlaying: false
});
// const carousel = new Carousel(1000);

carousel.init();
