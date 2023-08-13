import { products } from '../data/products.js';

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
