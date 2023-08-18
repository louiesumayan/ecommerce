import { products } from './products.js';
export let cart = JSON.parse(localStorage.getItem('cartItem'));

if (!cart) {
  cart = [];
}

export function addToCart(productId) {
  let matchingItem;
  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }

  saveToStorage();
}

export function removeItemFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();
}

export function cartQuantity() {
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });
  document.querySelector('.cart-quantity').textContent = cartQuantity;
}

export function itemInCartQuantity() {
  let cartQuantity = 0;
  let price = 0;

  cart.forEach((item) => {
    const prodId = item.productId;

    let matchingProduct;
    products.forEach((item) => {
      if (item.id === prodId) {
        matchingProduct = item;
      }
    });

    cartQuantity += item.quantity;
    price += matchingProduct.price;
  });
  document.querySelector('.itemInCart').textContent = cartQuantity;
  document.querySelector('.price').textContent = price;
  saveToStorage();
}

export function saveToStorage() {
  localStorage.setItem('cartItem', JSON.stringify(cart));
}

// fix the cart quantity not reflicting when clicking the delete function, also the same with item(4) in order and price

//fix the pricprice not calculated properly
