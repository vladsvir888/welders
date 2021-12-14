export default () => {
  const topBtn = document.querySelector('.btn-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1200) {
      topBtn.classList.add('is-active');
    } else {
      topBtn.classList.remove('is-active');
    }
  });

  topBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  
};