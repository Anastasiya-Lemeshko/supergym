import './modules/constants.js';
import './modules/scroll.js';
import './modules/video-loading.js';
import { initJuriSwiper } from './modules/slider-juri.js';
import { initReviewSwiper } from './modules/slider-reviews.js';
import { openVisibleAccordeonContent, setAccordeonToggles } from './modules/accordeon.js';
import './modules/tabs-faq.js';
import './modules/tabs-price.js';
import './modules/trial-form-validate.js';

initJuriSwiper();
initReviewSwiper();
openVisibleAccordeonContent();
setAccordeonToggles();
