import util from './util';

export default () => {
  util.hamburger.addEventListener('click', () => {
    util.menu.classList.toggle('is-active');
    util.hamburger.classList.toggle('is-active');
  });
};