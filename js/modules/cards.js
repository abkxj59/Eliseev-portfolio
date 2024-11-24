import {prettifyPrice} from '../utils/price-prettifiy';

const items = document.querySelectorAll('.goods__item');
const template = document.querySelector('#deleted-card').content;


const pasteTemplate = (parent, title) => {
  const card = template.cloneNode(true);
  const cardTitle = card.querySelector('.card__deleted-title');
  cardTitle.textContent = title;
  const deleteButton = card.querySelector('.card__delete');
  const recoverButton = card.querySelector('.card__recover');
  const amount = parent.querySelector('.card__num-value');

  deleteButton.addEventListener('click', () => {
    parent.remove();
  });

  recoverButton.addEventListener('click', () => {
    parent.querySelector('.card--placeholder').remove();
    parent.querySelector('.card--deleted').classList.remove('card--deleted');
    amount.value = 1;
  });

  parent.appendChild(card);
};

const initPrices = (item) => {
  const pricePerOne = item.querySelector('[data-price-per-one]');
  const pricePerOneOld = item.querySelector('[data-price-per-one-old]');
  const priceTotal = item.querySelector('[data-price-total]');
  const priceTotalOld = item.querySelector('[data-price-total-old]');
  const amount = item.querySelector('.card__num-value');
  const minusButton = item.querySelector('.card__num-button--minus');
  const plusButton = item.querySelector('.card__num-button--plus');

  const calculatePrice = () => {
    priceTotal.textContent = prettifyPrice(+pricePerOne.textContent.split(' ').join('') * amount.value);
    if (pricePerOneOld && priceTotalOld) {
      priceTotalOld.textContent = prettifyPrice(+pricePerOneOld.textContent.split(' ').join('') * amount.value);
    }
  };

  minusButton.addEventListener('click', () => {
    if (amount.value < 2) {
      minusButton.disabled = true;
    }
    amount.value--;
    calculatePrice();
  });

  plusButton.addEventListener('click', () => {
    if (amount.value > 1) {
      minusButton.disabled = false;
    }
    amount.value++;
    calculatePrice();
  });
};

const initCards = () => {
  if (items) {
    items.forEach((item) => {
      const card = item.querySelector('.card');
      const cardPlaceholder = item.querySelector('.card--placeholder');
      const deleteButton = card.querySelector('.card__delete');
      const amount = item.querySelector('.card__num-value');

      deleteButton.addEventListener('click', () => {
        const cardTitle = card.querySelector('.card__title').textContent;
        card.classList.add('card--deleted');
        amount.value = 0;
        pasteTemplate(item, cardTitle);
      });

      if (cardPlaceholder) {
        const deletePlaceholderButton = cardPlaceholder.querySelector('.card__delete');
        const recoverButton = cardPlaceholder.querySelector('.card__recover');

        deletePlaceholderButton.addEventListener('click', () => {
          item.remove();
        });

        recoverButton.addEventListener('click', () => {
          card.classList.remove('card--deleted');
          cardPlaceholder.remove();
          amount.value = 1;
        });
      }

      initPrices(item);
    });
  }
};

export {initCards};
