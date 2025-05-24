const displayedImg = document.getElementById('displayed-image');

const desktopLightBox = document.getElementById('desktop-lightbox');
const lightboxCloseButton = document.getElementById('lightbox-close-button');

const lightboxBigImage = document.querySelector ('#lightbox-big-image img');
const previousBtn = document.getElementById('lightbox-previous-btn');
const nextBtn = document.getElementById('lightbox-next-btn');

const lightboxSmallThumbnails = document.querySelectorAll('#lightbox-thumbnail-container figure');
const images = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];

const showCurrentImg = (index) =>{
  lightboxBigImage.src = images[index];
  lightboxBigImage.alt = 'Product image ' + (index + 1);
};

const removeThumbnailActiveClass = () => {
  lightboxSmallThumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('thumbnail-active');
  });
};

export const initializeLightBox = () => {
  displayedImg.addEventListener('click', () => {
    desktopLightBox.style.display = 'block';
  });

  lightboxCloseButton.addEventListener('click', () => {
    desktopLightBox.style.display = 'none';
  });

  previousBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showCurrentImg(currentIndex); 
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1 + images.length) % images.length;
    showCurrentImg(currentIndex); 
  });

  lightboxSmallThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      removeThumbnailActiveClass();
      thumbnail.classList.add('thumbnail-active');
      showCurrentImg(index);
    });
  });
};