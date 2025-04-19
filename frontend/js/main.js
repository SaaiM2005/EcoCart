// main.js

document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startShoppingBtn');
  if (startBtn) {
    startBtn.addEventListener('click', redirectToLogin);
  }
});

function redirectToLogin() {
  window.location.href = '../pages/login.html'; // Update path as needed
}

function redirectToRegister() {
  window.location.href = '../pages/register.html';
}

// Export if needed in modules
window.redirectToLogin = redirectToLogin;
window.redirectToRegister = redirectToRegister;
