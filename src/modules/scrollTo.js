export default () => {
  const productBtns = document.querySelectorAll('.products__item-btn');

  productBtns.forEach(elem => {
    elem.addEventListener('click', (e) => {
      const target = e.currentTarget;

      const productBtnAttr = target.getAttribute('data-scroll-to');

      if (productBtnAttr === null) return;

      const scrollToSectionClass = document.querySelector(`.${productBtnAttr}`);

      if (scrollToSectionClass) {
        scrollToSectionClass.scrollIntoView({
          block: 'center',
          behavior: 'smooth',
        });
      }
    });
  });
};