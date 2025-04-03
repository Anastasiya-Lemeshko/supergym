const promoButton = document.querySelector('.promo__button');
const priceContainer = document.querySelector('.price');

const scrollToElement = (button, element) => {
  button.addEventListener('click', () => {
    element.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  });
};

scrollToElement(promoButton, priceContainer);
