import { products } from './products.js';
export let cart = [
  {
    productId: '172fdvjk1321kjvasdv123',
    quantity: 2,
  },
  {
    productId: '132fdvjk1321kjvasdv123',
    quantity: 1,
  },
  {
    productId: '152fdvjk1321kjvasdv123',
    quantity: 5,
  },
];

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
}

export function removeItemFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
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
}
