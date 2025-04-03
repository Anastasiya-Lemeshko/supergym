const juriSwiper = new Swiper('.juri__swiper', {
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
    },

    768: {
      slidesPerView: 2,
    },

    1366: {
      slidesPerView: 4,
    }
  }
});

const reviewSwiper = new Swiper('.reviews__swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 60,

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
