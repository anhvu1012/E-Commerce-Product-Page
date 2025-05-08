const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const navigation = document.getElementById('navigation');

menuBtn.addEventListener('click', () => {
  navigation.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  navigation.style.display = 'none';
});