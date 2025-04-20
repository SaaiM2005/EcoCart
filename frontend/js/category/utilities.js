document.addEventListener('DOMContentLoaded', () => {
  const jsonPath = '/EcoCart/frontend/data/products.json';

  const allLoader = new ProductLoader({
    jsonPath,
    containerId: 'utilitiesContainer', // Match the container ID in HTML
    productsPerPage: 20,
  });
});
