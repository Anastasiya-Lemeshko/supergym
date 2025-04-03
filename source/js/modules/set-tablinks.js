const tabLinks = document.querySelectorAll('.tabs__tablink');

const setTabLinks = () => {
  tabLinks.forEach((item) => {
    const classArray = [...item.classList].filter((item) => item.includes('__tablink--active'));
    item.classList.remove(...classArray);
  });
};

export { setTabLinks };
