document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('hello-overlay');
  const dashboard = document.getElementById('dashboard-content');
  const typingText = document.getElementById('typing-text');

  // Typing animation manually starts
  typingText.textContent = 'Hello User...';

  setTimeout(() => {
    overlay.style.backdropFilter = 'blur(0px)';
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
      dashboard.style.opacity = '1';
    }, 1000);
  }, 2500);

  // Dynamically load categories (if needed)
  const categories = [
    { name: 'Clothing', icon: '👗' },
    { name: 'Footwear', icon: '👟' },
    { name: 'Accessories', icon: '👜' },
    { name: 'Beauty', icon: '💄' },
    { name: 'Home', icon: '🏡' },
    { name: 'Electronics', icon: '📱' },
  ];

  const categoryContainer = document.getElementById('categoryContainer');

  categories.forEach((category) => {
    const catDiv = document.createElement('div');
    catDiv.className = 'category-circle';
    catDiv.innerHTML = `<span class="icon">${category.icon}</span><p>${category.name}</p>`;
    categoryContainer.appendChild(catDiv);
  });

  // Dynamically populate the slider with top selling biodegradable products
  const productSlider = document.getElementById('topProductsSlider');

  const topProducts = [
    {
      name: 'Bamboo Toothbrush',
      image: '/EcoCart/assets/products/bamboo_brush.jpg',
    },
    {
      name: 'Reusable Cotton Bag',
      image: '/EcoCart/assets/products/cotton_bag.jpg',
    },
    {
      name: 'Compostable Plates',
      image: '/EcoCart/assets/products/compost_plates.jpg',
    },
    { name: 'Eco Soap Bars', image: '/EcoCart/assets/products/soap_bars.jpg' },
  ];

  topProducts.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h6>${product.name}</h6>
      `;
    productSlider.appendChild(card);
  });
});
