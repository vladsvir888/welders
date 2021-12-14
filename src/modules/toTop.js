export default () => {
  const toTopBtn = document.querySelector('.btn-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 800) {
      toTopBtn.classList.add('is-active');
    } else {
      toTopBtn.classList.remove('is-active');
    }
  });

  toTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};