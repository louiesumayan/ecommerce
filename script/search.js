import { products } from '../data/products.js';

let searcInput = document.getElementById('search_input');
let searchOutput = document.querySelector('.card-item-container');

const displayProd = (filterProd) => {
  searchOutput.innerHTML = filterProd
    .map(
      (item) =>
        `
   <div class="card" data-product-id='${item.id}'>
          <div>
            <img src="${item.image}" alt="${item.product_title}" width="250px" height="250px" />
          </div>
          <div class="image-details">
            <p class="name">${item.product_title}</p>
            <p>price: <span class="price">$${item.price}</span></p>
            <button class="addToCart" data-product-id='${item.id}'>Add to cart</button>
          </div>
        </div>
  `
    )
    .join('');
};

searcInput.addEventListener('keyup', (e) => {
  const searcValue = e.target.value.toLowerCase();

  if (searcValue) {
    displayProd(
      products.filter(
        (item) => item.product_title.toLowerCase().indexOf(searcValue) !== -1
      )
    );
  } else {
    displayProd(products);
  }
});
