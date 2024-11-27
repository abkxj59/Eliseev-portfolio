import { cachePictures } from './modules/cachePictures.js';
import { initButtonToTop } from './modules/toTopButton.js';
import { initPicSwitches } from './modules/picSwitches.js';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    cachePictures();
    initButtonToTop();
  });
});
