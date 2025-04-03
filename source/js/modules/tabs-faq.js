import { setTabLinks } from './set-tablinks';

const faq = document.querySelector('.faq');
const tabLinks = faq.querySelectorAll('.tabs__tablink');
const tabContents = faq.querySelectorAll('.tabs__tabcontent');

const openFaqTabs = (evt) => {
  const btnTarget = evt.currentTarget;
  const question = btnTarget.dataset.question;

  setTabLinks(tabLinks, btnTarget);

  tabContents.forEach((item) => {
    item.classList.remove('tabs__tabcontent--active');
  });

  faq.querySelector(`#${question}`).classList.add('tabs__tabcontent--active');
};

tabLinks.forEach((tablink) => {
  tablink.addEventListener('click', openFaqTabs);
});
