// Функция для отображения всех работ
function showAllWorks(event) {
  event.preventDefault();
  const tabButtons = document.querySelectorAll(".works__tab-btn");
  tabButtons.forEach((button) => button.classList.remove("active"));
  event.target.classList.add("active");
  const workItems = document.querySelectorAll("#works .works__list-item");
  workItems.forEach((item) => {
    item.style.display = "block";
  });
}

// Функция для отображения работ определенного типа
function showWorksByType(event, type) {
  event.preventDefault();
  const tabButtons = document.querySelectorAll(".works__tab-btn");
  tabButtons.forEach((button) => button.classList.remove("active"));
  event.target.classList.add("active");
  const workItems = document.querySelectorAll("#works .works__list-item");
  workItems.forEach((item) => {
    if (item.dataset.type === type || type === "All") {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
