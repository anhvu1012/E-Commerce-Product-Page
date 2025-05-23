const productPrice = 12500;
const cart = [];

// CART 
const cartBtn = document.getElementById('cart-btn');
const cartQuantity = document.getElementById('cart-quantity');
const cartContainer = document.getElementById('cart-container');
const cartProductContainer = document.getElementById('cart-product-container');

// ADD TO CART SECTION
const minusBtn = document.getElementById('minus-btn');
const plusBtn = document.getElementById('plus-btn');
const currentQuantitySpan = document.getElementById('current-quantity');
let currentQuantity = 0;

const addToCartBtn = document.getElementById('add-to-cart-btn');

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

const addToCart = () => {
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
};

export const initializeCart = () => {
  cartBtn.addEventListener('click', () => {
    cartContainer.classList.toggle('hidden');
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
    addToCart();
  });
};