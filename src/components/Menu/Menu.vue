<template>
  <div class="menu">
    <h1 tabindex="0" class="menu__title">{{ title }}</h1>
    <h2 tabindex="0" class="menu__subtitle">{{ subTitle }}</h2>
    <menu-icon class="menu__icon" />
    <ul class="menu__tab-area"></ul>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
export default {
  name: "Menu",
  components: {
    MenuIcon
  },
  props: {
    title: String,
    subTitle: String
  }
};
</script>

<style lang="scss" src="./menu.scss" />
