import { cachePictures } from './modules/cachePictures.js';
import { initButtonToTop } from './modules/toTopButton.js';
import { initPicSwitches } from './modules/picSwitches.js';
// ---------------------------------

cachePictures();
initPicSwitches();
window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initButtonToTop();
  });
});
