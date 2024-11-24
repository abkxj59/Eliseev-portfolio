const promocodeInput = document.querySelector('.total__promocode-input');
const promocodeMessage = document.querySelector('.total__promocode-message');
const applyPromocode = document.querySelector('.total__promocode-button');

const promocodeHandler = () => {
  promocodeInput.classList.remove('total__promocode-input--invalid');
  promocodeInput.classList.remove('total__promocode-input--valid');
  // console.log(promocodeInput.value.length);
  if (promocodeInput.value.length === 5) {
    promocodeInput.classList.add('total__promocode-input--valid');
    promocodeMessage.textContent = `${promocodeInput.value} - купон применен`;
  } else {
    promocodeInput.classList.add('total__promocode-input--invalid');
    promocodeMessage.textContent = `${promocodeInput.value} - купон не найден`;
  }

  promocodeInput.value = '';
};

const initPromocode = () => {
  if (promocodeInput && applyPromocode) {
    applyPromocode.addEventListener('click', promocodeHandler);
    promocodeInput.addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter') {
        promocodeHandler();
      }
    });
  }
};

export {initPromocode};
