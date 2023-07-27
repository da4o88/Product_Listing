let apiUrlAllProducts = "https://fakestoreapi.com/products"


async function fetchProducts(url) {
    try {
      const response = await fetch(url); // Replace the URL with your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      // console.log(data);
      displayProducts(data);
      return 
    } catch (error) {
      console.error(error);
      return [];
    }

    
  }

// Display products on the grid

function displayProducts(products) {
  const productGrid = document.querySelector('#products-grid');
  productGrid.innerHTML = ''; // Remove all the items from the grid

  // Display up to 8 products initially
  const displayedProducts = Math.min(products.length, 8);
  for (let i = 0; i < displayedProducts; i++) {
    const product = products[i];
    const productTile = document.createElement('div');
    productTile.classList.add('col-lg-4');
    productTile.classList.add('column-3');
    productTile.classList.add('card');
   
    // Create the product tile content (image, name, description, price, rating etc.)
    productTile.innerHTML = `
    
      <img class="card-img-top img-product" src="${product.image}" alt="${product.title}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <p>Rating: ${product.rating.rate} stars.</p>
        <p>Price: <span>${product.price} $</span></p> 
        <div class="position-absolute  bottom-right">
          <button class="btn btn-success">Add to Cart</button>
        </div>
      </div>
    `;

    productGrid.appendChild(productTile);
  }
}

fetchProducts(apiUrlAllProducts);
