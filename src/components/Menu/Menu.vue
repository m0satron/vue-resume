<template>
  <div class="menu">

      <div class="menu__image-wrapper" v-if="imgSrc && imgAlt">
        <img class="menu__image" :src="imgSrc" :alt="imgAlt" />
      </div>
      <div class="menu__title-wrapper">
        <h1 tabindex="0" class="menu__title">{{ title }}</h1>
        <h2 tabindex="0" class="menu__subtitle">{{ subTitle }}</h2>
      </div>

    <menu-icon v-if="menuHidden" @click="toggleMenu" class="menu__menu-icon icon" />
    <close class="menu__close icon" v-if="!menuHidden" @click="toggleMenu" />
    <ul class="menu__tab-area" :class="menuHidden ? 'menu__tab-area--hidden' : ''">
      <li v-for="tab in tabItems" :key="tab" @click="select(tab)" class="menu__item">{{ tab }}</li>
    </ul>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import Close from "vue-material-design-icons/Close.vue";
export default {
  name: "Menu",
  components: {
    MenuIcon,
    Close
  },
  props: {
    imgSrc: String,
    imgAlt: String,
    title: String,
    subTitle: String,
    tabItems: Array
  },
  data() {
    return {
      menuHidden: true
    };
  },
  methods: {
    toggleMenu() {
      this.menuHidden = !this.menuHidden;
    },
    select(value) {
      this.$emit("change", value);
      this.menuHidden = true;
    }
  }
};
</script>

<style lang="scss" src="./menu.scss" />
