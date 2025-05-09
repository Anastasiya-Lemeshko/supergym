import Swiper from './../vendor/swiper.js';

const initJuriSwiper = () => {
  new Swiper('.juri__swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,

    navigation: {
      nextEl: '.juri__button--next',
      prevEl: '.juri__button--prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
      },

      590: {
        slidesPerView: 2,
        allowTouchMove: true,
      },

      768: {
        slidesPerView: 2,
        allowTouchMove: false,
      },

      1068: {
        slidesPerView: 3,
        allowTouchMove: false,
      },

      1366: {
        slidesPerView: 4,
        allowTouchMove: false,
      }
    }
  });
};

export { initJuriSwiper };
