class ProductLoader {
  constructor({ jsonPath, containerId, productsPerPage = 20 }) {
    this.jsonPath = jsonPath;
    this.container = document.getElementById(containerId);
    this.productsPerPage = productsPerPage;
    this.allProducts = [];
    this.filteredProducts = [];
    this.currentPage = 1;
    this.totalPages = 0;
    this.paginationContainer = document.createElement('div');
    this.paginationContainer.className = 'd-flex justify-content-center mt-4';
    this.container.parentNode.appendChild(this.paginationContainer);
    this.prevButton = this.createPaginationButton('Previous', () =>
      this.loadPreviousPage()
    );
    this.nextButton = this.createPaginationButton('Next', () =>
      this.loadNextPage()
    );
    this.pageInfoSpan = document.createElement('span');
    this.pageInfoSpan.className = 'mx-3';
    this.paginationContainer.appendChild(this.prevButton);
    this.paginationContainer.appendChild(this.pageInfoSpan);
    this.paginationContainer.appendChild(this.nextButton);
    this.init();
  }

  handleWishlist(productId, buttonElement) {
    
    // Show a toast or popup feedback
    const toastContainer = document.getElementById('toast-container');
    if (toastContainer) {
      const toast = document.createElement('div');
      toast.className = 'toast align-items-center text-white bg-success border-0 show';
      toast.setAttribute('role', 'alert');
      toast.innerHTML = `
        <div class="d-flex">
          <div class="toast-body">
            Added to wishlist!
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
      `;
      toastContainer.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);
    }
  }
  

  async init() {
    try {
      const response = await fetch(this.jsonPath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.allProducts = data.filter(
        (p) =>
          p.categorie.toLowerCase() === 'party supplies - glass' ||
          p.categorie.toLowerCase() === 'party supplies - dish'
      );
      this.updatePagination(); // Initial load of party items
    } catch (error) {
      console.error('Error loading products:', error);
      this.container.innerHTML = `<div class="col-12 text-center text-danger">Failed to load products.</div>`;
    }
  }

  renderProducts() {
    this.container.innerHTML = '';
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
    const productsToDisplay = this.allProducts.slice(startIndex, endIndex);
  
    if (productsToDisplay.length === 0) {
      this.container.innerHTML = `<div class="col-12 text-center">No furniture items found.</div>`;
      this.paginationContainer.style.display = 'none';
      return;
    }
  
    productsToDisplay.forEach((product) => {
      const card = document.createElement('div');
      card.className = 'col-sm-6 col-md-4 col-lg-3 mb-4';
      card.innerHTML = `
        <div class="card h-100 shadow-sm position-relative">
          <img src="${product['image url']}" class="card-img-top" alt="${product.productname}"
               onerror="this.onerror=null;this.src='/EcoCart/frontend/assets/img/placeholder.jpg';" style="height: 200px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${product.productname}</h5>
            <p class="card-text text-muted">${product.description}</p>
            <p class="fw-bold mb-2">₹${product.price}</p>
            <span class="badge bg-success align-self-start mb-2">${product.categorie}</span>
            <button class="btn btn-outline-danger btn-sm mt-auto wishlist-btn" data-product-id="${product.id}">
              ❤️ Add to Wishlist
            </button>
          </div>
        </div>
      `;
      this.container.appendChild(card);
    });
  
    // Attach wishlist button functionality
    this.container.querySelectorAll('.wishlist-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const productId = e.currentTarget.getAttribute('data-product-id');
        this.handleWishlist(productId, e.currentTarget);
      });
    });
  
    this.paginationContainer.style.display = 'flex';
  }
  

  updatePagination() {
    this.totalPages = Math.ceil(this.allProducts.length / this.productsPerPage);
    this.renderProducts();
    this.pageInfoSpan.textContent = `Page ${this.currentPage} of ${this.totalPages}`;
    this.prevButton.disabled = this.currentPage === 1;
    this.nextButton.disabled =
      this.currentPage === this.totalPages || this.totalPages === 0;
  }

  loadPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  loadNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  createPaginationButton(text, onClick) {
    const button = document.createElement('button');
    button.className = 'btn btn-outline-secondary btn-sm mx-1';
    button.textContent = text;
    button.addEventListener('click', onClick);
    return button;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const jsonPath = '/EcoCart/frontend/data/products.json'; // Define the path once

  const allLoader = new ProductLoader({
    jsonPath: jsonPath,
    containerId: 'allProductsContainer',
    productsPerPage: 20,
  });
});
