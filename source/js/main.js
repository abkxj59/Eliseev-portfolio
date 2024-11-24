import {initMap} from './modules/map.js';
import {initializeMenu} from './modules/menu.js';
import {replacePrettyPrices} from './utils/price-prettifiy.js';
import {initPromocode} from './modules/promocode.js';
import {initCards} from './modules/cards.js';
import {initFormSubmit} from './modules/form-submit.js';
import {initModal} from './modules/modal.js';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  replacePrettyPrices();
  initializeMenu();

  ymaps.ready(initMap);
  window.addEventListener('load', () => {
    initPromocode();
    initCards();
    initFormSubmit();
    initModal();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
