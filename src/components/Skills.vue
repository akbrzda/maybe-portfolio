<script setup>
import { ref } from 'vue'

const skills = [
  { name: 'html', iconPath: 'src/assets/images/icons/html.svg' },
  { name: 'wordpress', iconPath: 'src/assets/images/icons/wordpress.svg' },
  { name: 'css', iconPath: 'src/assets/images/icons/css.svg' },
  { name: 'opencart', iconPath: 'src/assets/images/icons/opencart.svg' },
  { name: 'javascript', iconPath: 'src/assets/images/icons/javascript.svg' },
  { name: 'figma', iconPath: 'src/assets/images/icons/figma.svg' },
  { name: 'git', iconPath: 'src/assets/images/icons/git.svg' }
];
</script>

<template>
  <section class="skills" id="skills">
          <div class="container">
            <h2 class="title">Skills</h2>
            <ul class="skills__list row">
              <li class="skills__item col-sm-6" v-for="(skill) in skills">
                <img :src="skill.iconPath" alt="" class="skills__icon" />
                <span class="skills__name">{{ skill.name }}</span>
              </li>

            </ul>
          </div>
        </section>
</template>
