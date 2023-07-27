let apiUrl = "https://fakestoreapi.com/products"


async function fetchProducts(url) {
    try {
      const response = await fetch(url); // Replace the URL with your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }

    
  }

fetchProducts(apiUrl);

// Display products on the grid

function displayProducts(products) {
  const productGrid = document.querySelector('#products-grid');
  productGrid.innerHTML = ''; // Remove all the items from the grid

  // Display up to 9 products initially
  const displayedProducts = Math.min(products.length, 9);
  for (let i = 0; i < displayedProducts; i++) {
    const product = products[i];
    const productTile = document.createElement('div');
    productTile.classList.add('col');
    productTile.classList.add('column-3');
    productTile.classList.add('card');
    // productTile.classList.add('h-100');
    productTile.style.cssText += 'width: 20rem;';
   
    // Create the product tile content (image, name, description, price, rating etc.)
    
  
// </div>
    productTile.innerHTML = `
    
      <img class="card-img-top img-product" src="${product.image}" alt="${product.title}">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <p>Rating: ${product.rating.rate} stars.</p>
        <p>Price: <span>${product.price} $</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="add-to-cart-btn">Add to Cart</button>
        </p>
      </div>
    
    `;

    productGrid.appendChild(productTile);
  }
}






const dataJson = [{"id":1,
                  "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                  "price":109.95,
                  "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                  "category":"men's clothing",
                  "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                  "rating":{"rate":3.9,"count":120}},
{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},
{"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}},
]

console.log(dataJson);
displayProducts(dataJson);