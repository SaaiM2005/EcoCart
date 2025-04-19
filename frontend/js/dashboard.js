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
  }, 2500); // Time adjusted to match typing animation

  // Chart setup
  const ctx = document.getElementById('greenProductUsageChart');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          label: 'Green Product Usage',
          data: [65, 59, 80, 81, 56, 55, 40, 70, 62, 78, 90, 85],
          borderColor: '#28a745',
          borderWidth: 2,
          tension: 0.3,
          fill: false,
          pointBackgroundColor: '#28a745',
          pointRadius: 4,
          pointHoverRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Monthly Green Product Usage',
          font: { size: 16 },
          color: '#333',
        },
        legend: {
          labels: { color: '#333' },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Usage Count', color: '#555' },
          ticks: { color: '#555' },
          grid: { borderDash: [2, 2], color: '#ddd' },
        },
        x: {
          ticks: { color: '#555' },
          grid: { display: false },
        },
      },
    },
  });

  // Modal form submit
  document
    .getElementById('manualProductForm')
    .addEventListener('submit', (e) => {
      e.preventDefault();

      const productName = document.getElementById('productName').value;
      const materials = document.getElementById('materials').value;
      const brandEthics = document.getElementById('brandEthics').value;

      console.log(
        'Product:',
        productName,
        'Materials:',
        materials,
        'Brand Ethics:',
        brandEthics
      );

      const modal = bootstrap.Modal.getInstance(
        document.getElementById('manualInputModal')
      );
      modal.hide();
    });
});
