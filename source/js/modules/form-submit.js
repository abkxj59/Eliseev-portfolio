import {openModal} from './modal';

const buyButton = document.querySelector('.total__buy');
const orderForm = document.querySelector('.page__order-form');

const initFormSubmit = () => {
  if (buyButton) {
    orderForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const disabledInputs = document.querySelectorAll('input[disabled]');
      disabledInputs.forEach((input) => {
        input.disabled = false;
      });
      const data = new FormData(orderForm);
      for (let [key, value] of data) {
        console.log(`${key} - ${value}`);
      }
      disabledInputs.forEach((input) => {
        input.disabled = true;
      });
      openModal();
    });
  }
};

export {initFormSubmit};
