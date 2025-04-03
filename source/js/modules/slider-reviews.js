const reviewSwiper = new Swiper('.reviews__swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 60,
  autoHeight: true,

  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 1,
    },

    1366: {
      slidesPerView: 1,
    }
  }
});
