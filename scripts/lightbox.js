const desktopLightBox = document.getElementById('desktop-lightbox');
const lightboxCloseButton = document.getElementById('lightbox-close-button');
const displayedImg = document.getElementById('displayed-image');

export const initializeLightBox = () => {
  displayedImg.addEventListener('click', () => {
    desktopLightBox.style.display = 'block';
  });

  lightboxCloseButton.addEventListener('click', () => {
    desktopLightBox.style.display = 'none';
  });
};