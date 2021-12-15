import util from './util';

export default () => {
  const productContainers = document.querySelectorAll('.product__container');

  productContainers.forEach(container => {
    container.addEventListener('click', (e) => {
      const btn = util.closestItemByClass(e.target, 'product__header-tab');

      if (btn === null) return;

      container.querySelector('.product__header-tab.is-active').classList.remove('is-active');

      btn.classList.add('is-active');

      const productCards = container.querySelectorAll('.product__info');

      productCards.forEach(card => {
        if (card.getAttribute('data-tab-content') === btn.getAttribute('data-tab')) {
          card.classList.add('show');
        } else {
          card.classList.remove('show');
        }
      });
    });
  });
};