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

const juri = document.querySelector('.juri');

// const setTabIndex = () => {
//   const sliders = juri.querySelectorAll('.swiper-slide');
//   const activeSlide = juri.querySelector('.swiper-slide-active');
//   const activeIndex = Number(activeSlide.getAttribute('data-swiper-slide-index'));

//   const visibleSlides = [];

//   for (let i = activeIndex; i < activeIndex + 4; i++) {
//     visibleSlides.push(sliders[i % 8]);
//   }

//   visibleSlides.forEach((slide) => {
//     slide.setAttribute('tabindex', '0');
//   });
// };

// setTabIndex();

// const sliderButtons = juri.querySelectorAll('.slider-button');

// sliderButtons.forEach((button) => {
//   button.addEventListener('click', setTabIndex);
// });



// const setTabIndex = () => {
//   const sliders = juri.querySelectorAll('.swiper-slide');
//   const activeSlide = juri.querySelector('.swiper-slide-active');
//   const activeIndex = Number(activeSlide.getAttribute('data-swiper-slide-index'));

//   const visibleSlides = [];

//   for (let i = activeIndex; i < activeIndex + 4; i++) {
//     visibleSlides.push(sliders[i % 8]);
//   }

//   visibleSlides.forEach((slide) => {
//     slide.setAttribute('tabindex', '0');
//   });
// };

// setTabIndex();

// const sliderButtons = juri.querySelectorAll('.slider-button');

// sliderButtons.forEach((button) => {
//   button.addEventListener('click', setTabIndex);
// });
