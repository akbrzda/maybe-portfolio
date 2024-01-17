<script setup>

const works = [
  { type: 'layout', link: 'https://akbrzda.ru/', photoPath: 'src/assets/images/placeholder.png' },
  { type: 'wordpress', link: 'https://akbrzda.ru/', photoPath: 'src/assets/images/placeholder.png' },
  { type: 'wordpress', link: 'https://akbrzda.ru/', photoPath: 'src/assets/images/placeholder.png' },
  { type: 'wordpress', link: 'https://akbrzda.ru/', photoPath: 'src/assets/images/placeholder.png' },
  { type: 'opencart', link: 'https://akbrzda.ru/', photoPath: 'src/assets/images/placeholder.png' },
  { type: 'opencart', link: 'https://akbrzda.ru/', photoPath: 'src/assets/images/placeholder.png' }

];
// Функция для отображения всех работ
function showAllWorks(event) {
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
</script>

<template>
  <section class="works" id="works">
          <div class="container">
            <h2 class="title">Works</h2>
            <div class="works__tab-list">
              <a class="works__tab-btn active" @click="($event) => showAllWorks($event)">All</a>
              <a class="works__tab-btn" @click="($event) => showWorksByType($event, 'layout')">Layout</a>
              <a class="works__tab-btn" @click="($event) => showWorksByType($event, 'opencart')">Opencart</a>
              <a class="works__tab-btn" @click="($event) => showWorksByType($event, 'wordpress')">WordPress</a>
            </div>
            <ul class="works__list row">
              <li class="works__list-item col-sm-3" v-for="(work) in works" :data-type="work.type">
                <img :src="work.photoPath" alt="" class="works__item-img" />
                <a :href="work.link" class="works__item-link">
                  <span><i class="link"></i> view project</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
</template>
