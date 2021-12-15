import util from './util';

export default () => {
  const productBtns = document.querySelectorAll('.products__item-btn');

  productBtns.forEach(button => {
    button.addEventListener('click', (e) => {
      const productBtnAttr = util.closestAttr(e.target, 'data-scroll-to');

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