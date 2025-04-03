const tabLinks = document.querySelectorAll('.tabs__tablink');
const tabContents = document.querySelectorAll('.tabs__tabcontent');

const openTabs = (evt) => {
  const btnTarget = evt.currentTarget;
  const question = btnTarget.dataset.question;

  tabLinks.forEach((item) => {
    const classArray = [...item.classList].filter((item) => item.includes('__tablink--active'));
    item.classList.remove(...classArray);
  });

  tabContents.forEach((item) => {
    item.classList.remove('tabs__tabcontent--active');
  });

  const newClassArray = [...btnTarget.classList].map((classItem) => classItem + '--active');
  btnTarget.classList.add(...newClassArray);

  document.querySelector(`#${question}`).classList.add('tabs__tabcontent--active');
};

tabLinks.forEach((tablink) => {
  tablink.addEventListener('click', openTabs);
});


