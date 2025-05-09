const setTabLinks = (links, currentLink) => {
  links.forEach((link) => {
    const classArray = [...link.classList].filter((item) => item.includes('__tablink--active'));
    link.classList.remove(...classArray);
  });

  const newClassArray = [...currentLink.classList].map((classItem) => `${classItem }--active`);
  currentLink.classList.add(...newClassArray);
};

export { setTabLinks };
