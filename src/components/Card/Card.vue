<template>
  <div class="card bg-color-white">
    <div class="card__title-wrapper" :class="`bg-color-${titleBackground}`">
      <h3 class="card__title">{{ title }}</h3>
    </div>
    <div class="card__content">
      <div class="card__list-wrapper">
        <li v-for="(item, index) in list" :key="index" class="card__list">{{ item }}</li>
      </div>
      <p class="card__description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    description: String,
    list: Array,
    titleBackground: String
  }
};
</script>

<style lang="scss" src="./card.scss" />