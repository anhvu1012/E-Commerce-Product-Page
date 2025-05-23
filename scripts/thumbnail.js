// THUMBNAIL 
const images = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;

const showCurrentImg = (index) =>{
  displayedImg.src = images[index];
  displayedImg.alt = 'Product image ' + (index + 1);
};

export const initializeThumbnail = () => {
  previousBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showCurrentImg(currentIndex); 
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1 + images.length) % images.length;
    showCurrentImg(currentIndex); 
  });
};