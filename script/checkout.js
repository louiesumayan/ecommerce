import {
  cart,
  removeItemFromCart,
  itemInCartQuantity,
  cartQuantity,
  saveToStorage,
} from '../data/Cart.js';
import { products } from '../data/products.js';

let cartItemHTML = '';

cart.forEach((cartItem) => {
  const prodId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    if (product.id === prodId) {
      matchingProduct = product;
    }
  });

  cartItemHTML += `
<div class="item-checkout item-container-${matchingProduct.id}">
  <h1 class="delv-date">Delivery date: Monday, AUG 21</h1>
  <div class="item-to-checkout-dets">
    <div class="checkout-item-dets">
      <img src="${matchingProduct.image}" alt="" width="100%" height="250px" />
    </div>
    <div class="checkout-item-dets">
      <p class="item_name">
       ${matchingProduct.product_title}
      </p>
      <p class="priceItem">$<span class="price_item">${matchingProduct.price}</span></p>
      <div>
        <p>Quantity: ${cartItem.quantity}</p>
        <button class='btn-update'>Update</button>
        <button class='btn-delete' data-product-id='${matchingProduct.id}'>Delete</button>
      </div>
    </div>
    <div class="checkout-item-dets">
      <div class="delivery-options">
        <div class="delivery-options-title">
          <h1>Choose a delivery option:</h1>
        </div>
        <div class="delivery-option">
          <input
            type="radio"
            checked
            class="delivery-option-input"
            name="delivery-option-${cartItem.productId}"
          />
          <div>
            <div class="delivery-option-date">Tuesday, June 21</div>
            <div class="delivery-option-price">FREE Shipping</div>
          </div>
        </div>
        <div class="delivery-option">
          <input
            type="radio"
            class="delivery-option-input"
            name="delivery-option-${cartItem.productId}"
          />
          <div>
            <div class="delivery-option-date">Wednesday, June 15</div>
            <div class="delivery-option-price">$4.99 - Shipping</div>
          </div>
        </div>
        <div class="delivery-option">
          <input
            type="radio"
            class="delivery-option-input"
            name="delivery-option-${cartItem.productId}"
          />
          <div>
            <div class="delivery-option-date">Monday, June 13</div>
            <div class="delivery-option-price">$9.99 - Shipping</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 `;
});

document.querySelector('.cart-item-container').innerHTML = cartItemHTML;

document.querySelectorAll('.btn-delete').forEach((btn) => {
  btn.addEventListener('click', () => {
    const productId = btn.dataset.productId;
    removeItemFromCart(productId);
    const container = document.querySelector(`.item-container-${productId}`);

    container.remove();
    saveToStorage();
  });
});

itemInCartQuantity();
cartQuantity();
