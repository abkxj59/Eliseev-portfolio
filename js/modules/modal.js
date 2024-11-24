const modal = document.querySelector('.modal');
const closeButton = modal.querySelector('.modal__close');
const overlay = document.querySelector('.modal__overlay');

const closeModal = () => {
  modal.classList.remove('modal--opened');
};

const openModal = () => {
  modal.classList.add('modal--opened');
};

const initModal = () => {
  if (modal) {
    closeButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    modal.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closeModal();
      }
    });
  }
};

export {initModal, openModal};
