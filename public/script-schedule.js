const logoutButton = document.querySelector('.navbar-wrap .callback2');

const checkAuthStatus = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  logoutButton.style.display = isAuthenticated ? 'block' : 'none';
};

logoutButton.addEventListener('click', () => {
  localStorage.removeItem('token');
  checkAuthStatus();
  window.location.reload();
});

window.addEventListener('load', () => {
  checkAuthStatus();
});
