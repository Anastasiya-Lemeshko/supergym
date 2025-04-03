import { setTabLinks } from './set-tablinks';

const price = document.querySelector('.price');
const tabLinks = price.querySelectorAll('.tabs__tablink');
const priceCards = price.querySelectorAll('.price__content-item');
const priceValues = price.querySelectorAll('.price__value');
const priceBgs = price.querySelectorAll('.price__bg');

const ALL__PRICES = {
  'one-month': {
    'price-coach': '5000',
    'price-day': '1700',
    'price-full': '2700',
  },
  'six-month': {
    'price-coach': '30000',
    'price-day': '10200',
    'price-full': '16200',
  },
  'twelve-month': {
    'price-coach': '60000',
    'price-day': '20400',
    'price-full': '32400',
  },
};

const openPriceTabs = (evt) => {
  const btnTarget = evt.currentTarget;
  const period = btnTarget.dataset.price;

  setTabLinks();

  priceCards.forEach((item) => {
    const priceValue = item.querySelector('.price__value');
    const priceBg = item.querySelector('.price__bg');

    priceValue.textContent = ALL__PRICES[period][item.id];
    priceValue.classList.add('price__value--animated');
    priceBg.textContent = priceValue.textContent;
    priceBg.classList.add('price__bg--animated');
  });
};

tabLinks.forEach((tablink) => {
  tablink.addEventListener('click', openPriceTabs);
});

priceValues.forEach((item) => {
  item.addEventListener("animationend", () => {
    item.classList.remove('price__value--animated');
  });
});

priceBgs.forEach((item) => {
  item.addEventListener("animationend", () => {
    item.classList.remove('price__bg--animated');
  });
});
