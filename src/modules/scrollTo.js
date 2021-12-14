import util from './util';

export default () => {
  const productBtns = document.querySelectorAll('.products__item-btn');

  productBtns.forEach(elem => {
    elem.addEventListener('click', () => {
      const productBtnAttr = util.closestAttr(elem, 'data-scroll-to');

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