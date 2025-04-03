const openVisibleAccordeonContent = () => {
  const accordeonVisibleContent = document.querySelectorAll('.accordeon__item--active p');

  accordeonVisibleContent.forEach((element) => {
    element.style.maxHeight = element.scrollHeight + "px";
  });
};

const setAccordeonToggles = () => {
  const accordeonList = document.querySelectorAll('.accordeon');
  const accordeonTitles = [];

  accordeonList.forEach((accordeonItem) => {
    accordeonTitles.push(...accordeonItem.querySelectorAll('.accordeon__item button'));
  });

  accordeonTitles.forEach((accordeonTitle) => {
    accordeonTitle.addEventListener('click', () => {
      const currentItem = accordeonTitle.closest('.accordeon__item');
      const currentContent = currentItem.querySelector('p');

      if (currentItem.classList.contains('accordeon__item--default-visible')) {
        currentItem.classList.remove('accordeon__item--default-visible');
      }

      currentItem.classList.toggle("accordeon__item--active");

      if (currentItem.classList.contains('accordeon__item--active')) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
      } else {
        currentContent.style.maxHeight = null;
      }
    });
  });
};

export { openVisibleAccordeonContent, setAccordeonToggles };
