import util from './util';

export default () => {
  const popupBtns = document.querySelectorAll('[data-popup]');

  popupBtns.forEach(popupBtn => {
    popupBtn.addEventListener('click', (e) => {
      const attrPopupBtn = e.currentTarget.getAttribute('data-popup');

      if (attrPopupBtn === null) return;

      const popup = document.querySelector(`.${attrPopupBtn}`);

      if (popup) {
        popup.classList.add('is-active');

        util.toggleScroll();
      }
    });
  });

  const popupOverlays = document.querySelectorAll('.popup');

  popupOverlays.forEach(popupOverlay => {
    popupOverlay.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup')) {
        util.closePopup();
        util.toggleScroll();
      }
    });
  });

  const popupCloseBtns = document.querySelectorAll('.popup__btn-close');

  popupCloseBtns.forEach(popupCloseBtn => {
    popupCloseBtn.addEventListener('click', (e) => {
      if (e.currentTarget.classList.contains('popup__btn-close')) {
        util.closePopup();
        util.toggleScroll();
      }
    });
  });

  util.body.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;

    util.closePopup();
    util.toggleScroll();
  });
};