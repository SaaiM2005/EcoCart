document.addEventListener('DOMContentLoaded', function () {
  // Sample product data (replace with actual API call)
  const products = {
    all: [
      {
        id: 1,
        name: 'Organic Cotton T-Shirt',
        description: '100% organic cotton, fair trade certified',
        price: '₹ 899',
        image: '/EcoCart/frontend/assets/products/clothing1.jpg',
      },
      {
        id: 2,
        name: 'Bamboo Fiber Socks',
        description: 'Breathable and antimicrobial',
        price: '₹ 499',
        image: '/EcoCart/frontend/assets/products/clothing2.jpg',
      },
      // Add more products...
    ],
    men: [
      // Men's products...
    ],
    women: [
      // Women's products...
    ],
    kids: [
      // Kids products...
    ],
  };

  // Function to render products
  function renderProducts(category) {
    const container = document.querySelector(`#${category} .product-grid`);
    container.innerHTML = '';

    products[category].forEach((product) => {
      const productCard = document.createElement('div');
      productCard.className = 'col';
      productCard.innerHTML = `
          <div class="card product-card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="price">${product.price}</p>
              <a href="#" class="btn btn-success">Add to Cart</a>
            </div>
          </div>
        `;
      container.appendChild(productCard);
    });
  }

  // Initialize with all products
  renderProducts('all');

  // Tab click handlers
  document.querySelectorAll('.nav-link').forEach((tab) => {
    tab.addEventListener('click', function () {
      const target = this.getAttribute('data-bs-target').replace('#', '');
      if (target !== 'all') {
        // In a real app, you would fetch category-specific products here
        renderProducts(target);
      } else {
        renderProducts('all');
      }
    });
  });

  // Search functionality
  const searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      // Implement search logic
      console.log('Search for:', this.value);
    }
  });
});
