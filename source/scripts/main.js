import { addIframe } from './modules/video-loading.js';
import { setPriceTabs } from './modules/tabs-price.js';
import { initJuriSwiper } from './modules/slider-juri.js';
import { setFaqTabs } from './modules/tabs-faq.js';
import { openVisibleAccordeonContent, setAccordeonToggles } from './modules/accordeon.js';
import { initReviewSwiper } from './modules/slider-reviews.js';
import { setFormValidate, formatName, formatPhone } from './modules/trial-form-validate.js';

document.addEventListener('DOMContentLoaded', () => {
  addIframe();
  setPriceTabs();
  initJuriSwiper();
  setFaqTabs();
  openVisibleAccordeonContent();
  setAccordeonToggles();
  initReviewSwiper();
  setFormValidate();
  formatName();
  formatPhone();
});
