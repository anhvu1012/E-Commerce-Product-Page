const navigation = document.getElementById('navigation');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

export const initializeNavigation = () => {
  menuBtn.addEventListener('click', () => {
    navigation.style.display = 'block';
  });
  closeBtn.addEventListener('click', () => {
    navigation.style.display = 'none';
  });
};