import util from './util';

export default () => {
  util.body.addEventListener('click', (e) => {
    if (!e.target.classList.contains('product__header-tab')) return;

    const closestWrapProduct = e.target.closest('.product__wrap');

    const prevBtnActive = closestWrapProduct.querySelector('.product__header-tab.is-active');

    prevBtnActive.classList.remove('is-active');

    e.target.classList.add('is-active');

    const productInfo = closestWrapProduct.querySelectorAll('.product__info');

    productInfo.forEach(elem => {
      if (elem.getAttribute('data-tab-content') === e.target.getAttribute('data-tab')) {
        elem.classList.add('show');
      } else {
        elem.classList.remove('show');
      }
    });
  });
};