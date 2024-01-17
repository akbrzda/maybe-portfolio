<script setup>
import { ref, onMounted } from 'vue';
import Skills from './components/Skills.vue';
import Works from './components/Works.vue';

const burger = ref(null);
const menu = ref(null);
const body = ref(null);

onMounted(() => {
  burger.value = document.querySelector(".burger-menu");
  menu.value = document.querySelector(".menu");
  body.value = document.querySelector(".scroll");

  burger.value.addEventListener("click", mobileMenu);

  function mobileMenu() {
    burger.value.classList.toggle("active");
    menu.value.classList.toggle("active");
    body.value.classList.toggle("hidden");
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "A" && target.closest(".menu")) {
      event.preventDefault();
      const id = target.getAttribute("href");
      const top = document.querySelector(id).offsetTop;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  });

  document.querySelectorAll(".menu__link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll(".menu__link").forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
      menu.value.classList.remove("active");
      burger.value.classList.remove("active");
      body.value.classList.remove("hidden");
    });
  });
});

</script>

<template>
     <header class="header">
        <div class="container">
          <div class="header__inner">
            <a href="/" class="logo">
              <img src="./assets/images/logo.svg" alt="akbrzda" />
            </a>
              <button class="burger-menu" @click="mobileMenu">
              <span class="burger-line"></span>
              <span class="burger-line"></span>
              <span class="burger-line"></span>
            </button>
            <ul class="menu">
              <li class="menu__item">
                <a href="#about" class="menu__link active">about me</a>
              </li>
              <li class="menu__item">
                <a href="#skills" class="menu__link">skills</a>
              </li>
              <li class="menu__item">
                <a href="#works" class="menu__link">works</a>
              </li>
              <li class="menu__item">
                <a href="#contacts" class="menu__link">contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <section class="about" id="about">
        <div class="container">
          <div class="about__info row">
            <img src="./assets/images/avatar.png" class="about__img col-sm-4" alt="" />
            <p class="about__text col-sm-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis scelerisque eleifend. Nunc gravida ultrices nulla quis lobortis. Ut
              bibendum, felis at auctor accumsan, felis justo vulputate dolor, at faucibus eros lorem sed nisl. Vestibulum elit magna, fermentum a
              hendrerit ac, aliquam lobortis lacus. Maecenas in nibh a augue consectetur feugiat.
            </p>
          </div>
          <div class="about__resume">
            <div class="about__resume-item">
              <span class="about__resume-year">2019-2023</span>
              <div class="about__resume-info">
                <p class="about__resume-company">Altai State University</p>
                <span class="about__resume-position">bachelor</span>
              </div>
            </div>
            <div class="about__resume-item">
              <span class="about__resume-year">2023-2025</span>
              <div class="about__resume-info">
                <p class="about__resume-company">Surgut State University</p>
                <span class="about__resume-position">master</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Skills />
     <Works />
      <section class="contacts" id="contacts">
        <div class="container">
          <h2 class="title">Contact me</h2>
          <div class="contacts__inner row">
            <form action="" class="contact-form col-sm-6">
              <div class="form-group">
                <input type="text" class="form-control" name="name" placeholder="name" />
              </div>
              <div class="form-group">
                <input type="email" class="form-control" name="email" placeholder="email" />
              </div>
              <div class="form-group">
                <textarea name="message" class="form-control" cols="30" rows="10" placeholder="message" res></textarea>
              </div>
              <input type="submit" value="Send" />
            </form>
            <ul class="contacts__list col-sm-5">
              <li class="contacts__list-item">
                <i class="contacts__item-icon github"></i>
                <a href="https://github.com/akbrzda" class="contacts__item-link">github@akbrzda</a>
              </li>
              <li class="contacts__list-item">
                <i class="contacts__item-icon telegram"></i>
                <a href="https://akbrzda.t.me" class="contacts__item-link">@akbrzda</a>
              </li>
              <li class="contacts__list-item">
                <i class="contacts__item-icon location"></i>
                <a href="" class="contacts__item-link">Russian Fedaration, Surgut</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer class="footer">
        <div class="container">
          <p class="designed">Designed with</p>
          <p class="copyright">Akmal Akbarzoda © 2023</p>
        </div>
      </footer>
</template>