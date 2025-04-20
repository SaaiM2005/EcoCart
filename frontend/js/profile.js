document.addEventListener('DOMContentLoaded', () => {
  // Load saved data on page load
  const profileData = JSON.parse(localStorage.getItem('profileData'));

  if (profileData) {
    document.getElementById('profile-name').textContent = profileData.name;
    document.getElementById('profile-phone').textContent = profileData.phone;
    document.getElementById('profile-address').textContent =
      profileData.address;
    document.getElementById('profile-email').textContent = profileData.email;
    document.getElementById('profile-country').textContent =
      profileData.country;
    document.getElementById('profile-pincode').textContent =
      profileData.pincode;
  }
});

function goToEditProfile() {
  const profileData = JSON.parse(localStorage.getItem('profileData'));

  if (profileData) {
    document.getElementById('name').value = profileData.name;
    document.getElementById('phone').value = profileData.phone;
    document.getElementById('address').value = profileData.address;
    document.getElementById('email').value = profileData.email;
    document.getElementById('country').value = profileData.country;
    document.getElementById('pincode').value = profileData.pincode;
  }

  document.getElementById('profile-page').style.transform = 'translateY(-20px)';
  document.getElementById('profile-page').style.opacity = '0';
  setTimeout(() => {
    document.getElementById('profile-page').style.display = 'none';
    document.getElementById('edit-profile-page').style.display = 'flex';
    document.getElementById('edit-profile-page').style.transform =
      'translateY(0)';
    document.getElementById('edit-profile-page').style.opacity = '1';
  }, 200);
}

document
  .getElementById('edit-profile-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const profileData = {
      name: document.getElementById('name').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      address: document.getElementById('address').value.trim(),
      email: document.getElementById('email').value.trim(),
      country: document.getElementById('country').value.trim(),
      pincode: document.getElementById('pincode').value.trim(),
    };

    localStorage.setItem('profileData', JSON.stringify(profileData));

    document.getElementById('profile-name').textContent = profileData.name;
    document.getElementById('profile-phone').textContent = profileData.phone;
    document.getElementById('profile-address').textContent =
      profileData.address;
    document.getElementById('profile-email').textContent = profileData.email;
    document.getElementById('profile-country').textContent =
      profileData.country;
    document.getElementById('profile-pincode').textContent =
      profileData.pincode;

    document.getElementById('edit-profile-page').style.transform =
      'translateY(-20px)';
    document.getElementById('edit-profile-page').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('edit-profile-page').style.display = 'none';
      document.getElementById('profile-page').style.display = 'flex';
      document.getElementById('profile-page').style.transform = 'translateY(0)';
      document.getElementById('profile-page').style.opacity = '1';
    }, 200);
  });
