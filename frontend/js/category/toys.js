document.addEventListener('DOMContentLoaded', () => {
  const jsonPath = '/EcoCart/frontend/data/products.json';

  const allLoader = new ProductLoader({
    jsonPath,
    containerId: 'toysContainer', // Match the container ID in HTML
    productsPerPage: 20,
  });
});
