export default {
  body: document.querySelector('body'),

  toggleScroll() {
      this.body.classList.toggle('no-scroll');
  },

  closestAttr(item, attr) {
      let node = item;

      while (node) {
          const attrValue = node.getAttribute(attr);

          if (attrValue) {
              return attrValue;
          }

          node = node.parentElement;
      }

      return null;
  },

  closestItemByClass(item, className) {
      let node = item;

      while (node) {
        if (node.classList.contains(className)) {
          return node;
        }

        node = node.parentElement;
      }

      return null;
  },

  closePopup() {
    document.querySelector('.popup.is-active').classList.remove('is-active');
  },

  hamburger: document.querySelector('.hamburger'),

  menu: document.querySelector('.menu__list'),
};