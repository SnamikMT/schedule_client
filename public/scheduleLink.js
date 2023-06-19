// Получаем ссылку на элемент с классом 'schedule-link'
const scheduleLink = document.querySelector('.rasp');

// Добавляем обработчик события 'click' для ссылки
scheduleLink.addEventListener('click', (event) => {
  event.preventDefault(); // Отменяем стандартное действие перехода по ссылке

  // Выполняем переход на страницу расписания
  window.location.href = '/schedule.html';
});
