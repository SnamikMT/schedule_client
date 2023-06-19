const logo = document.getElementById('logo');

logo.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = '/index.html'; // Перенаправление на главную страницу
});
