<template>
  <div class="menu">
    <div class="menu__header">
      <div class="menu__image-wrapper" v-if="imgSrc && imgAlt">
        <img class="menu__image" :src="imgSrc" :alt="imgAlt" />
      </div>
      <div class="menu__title-wrapper">
        <h1 tabindex="0" class="menu__title">{{ title }}</h1>
        <h2 tabindex="0" class="menu__subtitle">{{ subTitle }}</h2>
      </div>
    </div>

    <Menu-icon
      v-if="menuHidden && windowWidth < 1080"
      @click="toggleMenu"
      @keydown.enter="toggleMenu"
      tabindex="0"
      class="menu__menu-icon icon"
    />
    <Close
      ref="close"
      v-if="!menuHidden && windowWidth < 1080"
      @click="toggleMenu"
      @keydown.enter="toggleMenu"
      tabindex="0"
      class="menu__close icon"
    />
    <ul class="menu__tab-area" :class="menuHidden ? 'menu__tab-area--hidden' : ''">
      <li
        v-for="(tab, index) in tabItems"
        :key="tab"
        tabindex="0"
        @keyup.tab="backToPage(index)"
        @click="select(tab)"
        class="menu__item"
        :class="tab === activeTab ? 'menu__item--active' : '' "
      >{{ tab }}</li>
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
      menuHidden: true,
      activeTab: "",
      windowWidth: 0
    };
  },
  methods: {
    toggleMenu() {
      if (this.windowWidth < 1080) {
        this.menuHidden = !this.menuHidden;
      }
    },
    select(value) {
      this.$emit("change", value);
      this.activeTab = value;
      if (this.windowWidth < 1080) this.menuHidden = true;
    },
    backToPage(index) {
      /*fix this to put focus on closebutton when reaching the end of the tabitems!
      instead of v-if perhaps it's better to use classes to toggle visibility
      */
      if (index !== this.tabItems.length - 1) console.log(this.$refs);
    },
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
      this.getWindowWidth();
    });
  },
  watch: {
    windowWidth: function() {
      if (this.windowWidth <= 1080) this.menuHidden = true;
      if (this.windowWidth > 1080) this.menuHidden = false;
    }
  }
};
</script>

<style lang="scss" src="./menu.scss" />
