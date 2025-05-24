import { initializeNavigation } from './navigation.js';
import { initializeCart } from './cart.js';
import { initializeThumbnail } from './thumbnail.js';

const init = () => {
  initializeCart();
  initializeNavigation();
  initializeThumbnail();
}

document.addEventListener('DOMContentLoaded', init);