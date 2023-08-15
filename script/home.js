import { products } from '../data/products.js';
import { cart, addToCart } from '../data/Cart.js';
let productHTML = '';

products.forEach((item) => {
  productHTML += `
  <div class="card" data-product-id='${item.id}'>
          <div>
            <img src="${item.image}" alt="${item.product_title}" width="250px" height="250px" />
          </div>
          <div class="image-details">
            <p class="name">${item.product_title}.</p>
            <p>price: <span class="price">$${item.price}</span></p>
            <button class="addToCart" data-product-id='${item.id}'>Add to cart</button>
          </div>
        </div>
  `;
});
document.querySelector('.card-item-container').innerHTML = productHTML;

function cartQuantity() {
  let cartQuantity = 0;

  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });
  document.querySelector('.cart-quantity').textContent = cartQuantity;
}

document.querySelectorAll('.addToCart').forEach((btnCartItem) => {
  btnCartItem.addEventListener('click', () => {
    const productId = btnCartItem.dataset.productId;

    addToCart(productId);
    cartQuantity();

    console.log(cart);
  });
});
