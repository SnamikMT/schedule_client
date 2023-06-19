const loginButton = document.querySelector('.navbar-wrap .callback');
const logoutButton = document.querySelector('.navbar-wrap .callback2');
const schedule = document.querySelector('.navbar-wrap .rasp');

const checkAuthStatus = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  loginButton.style.display = isAuthenticated ? 'none' : 'block';
  logoutButton.style.display = isAuthenticated ? 'block' : 'none';
  schedule.style.display = isAuthenticated ? 'block' : 'none';
};

logoutButton.addEventListener('click', () => {
  localStorage.removeItem('token');
  checkAuthStatus();
  window.location.reload();
});

window.addEventListener('load', () => {
  checkAuthStatus();
});
