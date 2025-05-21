const navigation = document.getElementById('navigation');

const cartQuantity = document.getElementById('cart-quantity');
const cartContainer = document.getElementById('cart-container');

const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const productPrice = 12500;
const cart = [];
const cartBtn = document.getElementById('cart-btn');

const images = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
const displayedImg = document.getElementById('displayed-image');
let currentIndex = 0;

const minusBtn = document.getElementById('minus-btn');
const plusBtn = document.getElementById('plus-btn');
const currentQuantitySpan = document.getElementById('current-quantity');
let currentQuantity = 0;

const cartProductContainer = document.getElementById('cart-product-container');
const addToCartBtn = document.getElementById('add-to-cart-btn');

// lightbox section
const desktopLightBox = document.getElementById('desktop-lightbox');
const lightboxCloseButton = document.getElementById('lightbox-close-button');

const showCurrentImg = (index) =>{
  displayedImg.src = images[index];
  displayedImg.alt = 'Product image ' + (index + 1);
};

const toggleDesktopLightBox = () => {
  desktopLightBox.classList.toggle('hidden');
}

const updateQuantity = (quantity) => {
  if (quantity < 0) {
    currentQuantitySpan.innerText = '0';
  } else{
    currentQuantitySpan.innerText = `${quantity}`;
  }
};

const deleteCart = () => {
  // for this prj 
  cartQuantity.classList.add('hidden');
  cartQuantity.innerText = '';

  cartProductContainer.classList.add('justify-center');
  cartProductContainer.classList.remove('space-between');

  cartProductContainer.innerHTML = '<p>Your cart is empty.</p>';
};

displayedImg.addEventListener('click', () => {
  desktopLightBox.style.display = 'block';
});

lightboxCloseButton.addEventListener('click', () => {
  desktopLightBox.style.display = 'none';
});

menuBtn.addEventListener('click', () => {
  navigation.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  navigation.style.display = 'none';
});

cartBtn.addEventListener('click', () => {
  cartContainer.classList.toggle('hidden');
});

previousBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showCurrentImg(currentIndex); 
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1 + images.length) % images.length;
  showCurrentImg(currentIndex); 
});

minusBtn.addEventListener('click', () => {
  currentQuantity--;
  updateQuantity(currentQuantity);
});

plusBtn.addEventListener('click', () => {
  currentQuantity++;
  updateQuantity(currentQuantity);
});

addToCartBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (currentQuantity === 0){
    return;
  } else{
    cartQuantity.classList.remove('hidden');
    cartQuantity.innerText = currentQuantity;

    cartProductContainer.classList.remove('justify-center');
    cartProductContainer.classList.add('space-between');

    cartProductContainer.innerHTML = `<section class="flex space-between">
      <figure class="flex flex-column justify-center">
        <img
          class="cart-product-thumbnail"
          src="images/image-product-1.jpg"
          alt="Product image thumbnail"
        />
      </figure>
      <div class="flex flex-column justify-center product-info">
        <p>Fall Limited Edition Sneakers</p>
        <p>
          <span>$${(productPrice  / 100).toFixed(2)}</span> x <span>${currentQuantity}</span>
          <span class="bold">$${((productPrice * currentQuantity) / 100).toFixed(2)}</span>
        </p>
      </div>
      <div class="flex flex-column justify-center">
        <img
          class="cursor-pointer"
          id="delete-btn"
          src="images/icon-delete.svg"
          alt="Delete button icon"
          onclick="deleteCart()"
        />
      </div>
    </section>
    <button class="cursor-pointer" id="checkout-btn">Checkout</button>
    `;
  }
});