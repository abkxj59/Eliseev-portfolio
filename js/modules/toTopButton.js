const buttonNode = document.querySelector('.js-to-top');
const titleScreenNode = document.querySelector('.main-title-page');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      buttonNode.classList.remove('visible');
    } else {
      buttonNode.classList.add('visible');
    }
  });
});

const initButtonToTop = () => {
  buttonNode.addEventListener('click', () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  );

  observer.observe(titleScreenNode);
};

export { initButtonToTop };
