const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const cartBtn = document.getElementById('cart-btn');

const navigation = document.getElementById('navigation');
const cartContainer = document.getElementById('cart-container');

menuBtn.addEventListener('click', () => {
  navigation.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  navigation.style.display = 'none';
});

cartBtn.addEventListener('click', () => {
  cartContainer.classList.toggle('hidden');
});