const displayedImg = document.getElementById('displayed-image');

const desktopLightBox = document.getElementById('desktop-lightbox');
const lightboxCloseButton = document.getElementById('lightbox-close-button');

const lightboxBigImage = document.querySelector ('#lightbox-big-image img');
const previousBtn = document.getElementById('lightbox-previous-btn');
const nextBtn = document.getElementById('lightbox-next-btn');

const lightboxSmallThumbnails = document.querySelectorAll('#lightbox-thumbnail-container figure');
const lightboxSmallThumbnailImages = Array.from(document.querySelectorAll('#lightbox-thumbnail-container figure img'));

const showCurrentImg = (thumbnail, index) =>{
  lightboxBigImage.src = thumbnail.src;
  lightboxBigImage.alt = 'Product image ' + (index + 1);
};

export const initializeLightBox = () => {
  displayedImg.addEventListener('click', () => {
    desktopLightBox.style.display = 'block';
  });

  lightboxCloseButton.addEventListener('click', () => {
    desktopLightBox.style.display = 'none';
  });

  previousBtn.addEventListener('click', () => {
    console.log('previous')
  });

  nextBtn.addEventListener('click', () => {
    console.log('next')
  });

  lightboxSmallThumbnailImages.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      showCurrentImg(thumbnail, index);
    });
  });
};