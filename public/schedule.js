const editButton = document.getElementById('edit-button');
const saveButton = document.getElementById('save-button');
const table = document.getElementById('schedule-table');

function enableEditMode() {
  document.body.classList.add('edit-mode');
  const cells = table.querySelectorAll('tbody td');
  cells.forEach(function(cell) {
    cell.contentEditable = true;
  });
  saveButton.disabled = false;
}

function saveChanges() {
  const cells = table.querySelectorAll('tbody td');
  const rowData = [];
  let rowCells = [];
  cells.forEach((cell) => {
    rowCells.push({ value: cell.textContent });
    if (rowCells.length === 28) {
      rowData.push(rowCells);
      rowCells = [];
    }
  });
  saveDataToServer(rowData)
    .then((response) => {
      console.log(response.message);
      fetchDataFromDatabase();
    })
    .catch((error) => {
      console.error('Произошла ошибка:', error);
    });
}

function fetchDataFromDatabase() {
  fetch('http://localhost:5000/api/schedule-data')
    .then(response => response.json())
    .then(data => {
      updateUIWithData(data);
    })
    .catch(error => {
      console.error('Ошибка при получении данных:', error);
    });
}

function updateUIWithData(response) {
    const tbody = table.querySelector('tbody');
    if (!tbody) {
      console.error('Таблица не найдена');
      return;
    }
  
    const data = response.data;
  
    // Обновляем данные в существующих ячейках таблицы
    const cells = tbody.querySelectorAll('td');
    cells.forEach((cell, index) => {
      cell.textContent = data.flat()[index].value;
    });
  }

function saveDataToServer(data) {
  return fetch('http://localhost:5000/api/save-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data })
  })
    .then(response => response.json());
}

editButton.addEventListener('click', enableEditMode);
saveButton.addEventListener('click', saveChanges);

fetchDataFromDatabase();
