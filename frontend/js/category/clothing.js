document.addEventListener('DOMContentLoaded', () => {
  const jsonPath = '/EcoCart/frontend/data/products.json';

  const allLoader = new ProductLoader({
    jsonPath,
    containerId: 'allProductsContainer',
    productsPerPage: 20,
  });
});
