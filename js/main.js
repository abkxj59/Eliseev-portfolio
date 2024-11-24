import { cachePictures } from './modules/cachePictures.js';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    cachePictures();
  });
});
