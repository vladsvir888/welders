// export default () => {
//   document.body.addEventListener('click', (e) => {
//     if (!e.target.classList.contains('product__header-tab')) return;

//     const closestWrapTabs = e.target.closest('.product__wrap');

//     const tabsContent = closestWrapTabs.querySelectorAll('.product__info');

//     tabsContent.forEach((elem) => {
//       console.log(elem);
//     });
//   })
// };

export default () => {
  const tabsWrap = document.querySelectorAll('.product__wrap');

  tabsWrap.forEach( (elem) => {

    const tabs = elem.querySelectorAll('.product__header-tab');
    const tabsContent = elem.querySelectorAll('.product__info');

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', (e) => {
        const activeTabAttr = e.target.getAttribute('data-tab');

        for (let j = 0; j < tabs.length; j++) {
          const contentAttr = tabsContent[j].getAttribute('data-tab-content');

          if (activeTabAttr === contentAttr) {
            tabs[j].classList.add('is-active');
            tabsContent[j].classList.add('show');
          } else {
            tabs[j].classList.remove('is-active');
            tabsContent[j].classList.remove('show');
          }
        }
      });
    }
  });
};