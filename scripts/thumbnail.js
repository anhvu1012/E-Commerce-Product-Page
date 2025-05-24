const thumbnailiBigImage = document.getElementById('displayed-image');

const images = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
let currentThumbnailIndex = 0;

const productSmallThumbnails = Array.from(document.querySelectorAll('#thumbnail-container figure'));

// LIGHTBOX
const desktopLightBox = document.getElementById('desktop-lightbox');
const lightboxCloseButton = document.getElementById('lightbox-close-button');

const lightboxBigImage = document.querySelector ('#lightbox-big-image img');
const lightboxPreviousBtn = document.getElementById('lightbox-previous-btn');
const lightboxNextBtn = document.getElementById('lightbox-next-btn');
let currentLightboxIndex = 0;

const lightboxSmallThumbnails = document.querySelectorAll('#lightbox-thumbnail-container figure');

const showCurrentImg = (imageLocation, index) =>{
  imageLocation.src = images[index];
  imageLocation.alt = 'Product image ' + (index + 1);
};

const removeThumbnailActiveClass = ( location ) => {
  location.forEach((thumbnail) => {
    thumbnail.classList.remove('thumbnail-active');
  });
};

export const initializeThumbnail = () => {
  showCurrentImg(thumbnailiBigImage, currentThumbnailIndex); 
  showCurrentImg(lightboxBigImage, currentLightboxIndex); 

  previousBtn.addEventListener('click', () => {
    currentThumbnailIndex = (currentThumbnailIndex - 1 + images.length) % images.length;
    showCurrentImg(thumbnailiBigImage, currentThumbnailIndex); 
    console.log(currentThumbnailIndex)
  });

  nextBtn.addEventListener('click', () => {
    currentThumbnailIndex = (currentThumbnailIndex + 1 + images.length) % images.length;
    showCurrentImg(thumbnailiBigImage, currentThumbnailIndex); 
    console.log(currentThumbnailIndex)

  });

  productSmallThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      removeThumbnailActiveClass(productSmallThumbnails);
      thumbnail.classList.add('thumbnail-active');
      showCurrentImg(thumbnailiBigImage, index);
      currentThumbnailIndex = index;
      currentLightboxIndex = currentThumbnailIndex;
    console.log(currentThumbnailIndex)

    });
  });

  // LIGHTBOX
  thumbnailiBigImage.addEventListener('click', () => {
    showCurrentImg(lightboxBigImage, currentThumbnailIndex);
    removeThumbnailActiveClass(lightboxSmallThumbnails);
    lightboxSmallThumbnails[currentThumbnailIndex].classList.add('thumbnail-active');
    desktopLightBox.style.display = 'block';
  });

  lightboxCloseButton.addEventListener('click', () => {
    desktopLightBox.style.display = 'none';
  });

  lightboxPreviousBtn.addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + images.length) % images.length;
    showCurrentImg(lightboxBigImage, currentLightboxIndex);
    removeThumbnailActiveClass(lightboxSmallThumbnails);
    lightboxSmallThumbnails[currentLightboxIndex].classList.add('thumbnail-active');
  });

  lightboxNextBtn.addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex + 1 + images.length) % images.length;
    showCurrentImg(lightboxBigImage, currentLightboxIndex);
    removeThumbnailActiveClass(lightboxSmallThumbnails);
    lightboxSmallThumbnails[currentLightboxIndex].classList.add('thumbnail-active');
  });

  lightboxSmallThumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      removeThumbnailActiveClass(lightboxSmallThumbnails);
      thumbnail.classList.add('thumbnail-active');
      showCurrentImg(lightboxBigImage, index);
      currentLightboxIndex = index;
    });
  });
};