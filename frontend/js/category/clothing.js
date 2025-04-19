document.addEventListener('DOMContentLoaded', () => {
    const jsonPath = '/EcoCart/frontend/data/products.json';
  
    const allLoader = new ProductLoader({
      jsonPath,
      containerId: 'allProductsContainer',
      productsPerPage: 20,
      initialCategory: 'all'
    });
  
    const shirtLoader = new ProductLoader({
      jsonPath,
      containerId: 'shirtProductsContainer',
      productsPerPage: 20,
      initialCategory: 'shirt'
    });
  
    const pantLoader = new ProductLoader({
      jsonPath,
      containerId: 'pantProductsContainer',
      productsPerPage: 20,
      initialCategory: 'pant'
    });
  
    const allTab = document.getElementById('all-tab');
    const shirtTab = document.getElementById('shirt-tab');
    const pantTab = document.getElementById('pant-tab');
  
    if (allTab) {
      allTab.addEventListener('shown.bs.tab', () => {
        allLoader.filterProducts('all');
      });
    }
  
    if (shirtTab) {
      shirtTab.addEventListener('shown.bs.tab', () => {
        shirtLoader.filterProducts('shirt');
      });
    }
  
    if (pantTab) {
      pantTab.addEventListener('shown.bs.tab', () => {
        pantLoader.filterProducts('pant');
      });
    }
  });
  