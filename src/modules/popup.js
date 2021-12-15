import util from './util';

export default () => {
  let openPopupBtns = document.querySelectorAll('[data-popup]');

  for (let i = 0; i < openPopupBtns.length; i++) {
    openPopupBtns[i].addEventListener('click', (e) => {
      const target = e.target;

      const popupClass = util.closestAttr(target, 'data-popup');

      if (popupClass === null) return;

      e.preventDefault();

      const popup = document.querySelector(`.${popupClass}`);

      if (popup) {
        popup.classList.add('is-active');

        util.toggleScroll();
      }

      const popupOverlays = document.querySelectorAll('.popup');

      for (let i = 0; i < popupOverlays.length; i++) {
        popupOverlays[i].addEventListener('click', (e) => {
          const target = e.target;

          if (target.classList.contains('popup')) {
            const popup = document.querySelector('.popup.is-active');

            if (popup) {
              popup.classList.remove('is-active');

              util.toggleScroll();
            }
          }
        });
      }

      const closePopupBtns = document.querySelectorAll('.popup__btn-close');

      for (let i = 0; i < closePopupBtns.length; i++) {
        closePopupBtns[i].addEventListener('click', (e) => {
          const target = e.target;

          const closeBtn = util.closestItemByClass(target, 'popup__btn-close');

          if (closeBtn === null) return;

          if (closeBtn.classList.contains('popup__btn-close')) {
            const popup = document.querySelector('.popup.is-active');

            if (popup) {
              popup.classList.remove('is-active');

              util.toggleScroll();
            }
          }
        });
      }

      util.body.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') {
          return;
        }

        const popup = document.querySelector('.popup.is-active');

        if (popup) {
          popup.classList.remove('is-active');

          util.toggleScroll();
        }
      });
    });
  }
}
