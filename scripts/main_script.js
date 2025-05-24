import { initializeNavigation } from './navigation.js';
import { initializeCart } from './cart.js';
import { initializeThumbnail } from './thumbnail.js';
// import { initializeLightBox } from './lightbox.js';

const init = () => {
  initializeCart();
  // initializeLightBox();
  initializeNavigation();
  initializeThumbnail();
}

document.addEventListener('DOMContentLoaded', init);