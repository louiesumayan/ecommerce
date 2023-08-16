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
