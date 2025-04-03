import {
  VIDEO__SRC,
  VIDEO__TITLES,
} from './constants.js';

const aboutIframeWrap = document.querySelector('.about__iframe-wrap');
const aboutPlayButton = document.querySelector('.about__video-button');

const createIframe = (iframeWrap, section) => {
  const iframe = document.createElement('iframe');
  iframe.src = VIDEO__SRC[section];
  iframe.title = VIDEO__TITLES[section];
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.allowFullscreen = true;
  iframe.frameborder = '0';
  iframe.style.border = '0';
  iframeWrap.append(iframe);
  iframeWrap.classList.remove('video__iframe-wrap--hidden');
};

aboutPlayButton.addEventListener('click', () => {
  createIframe(aboutIframeWrap, 'about');
});
