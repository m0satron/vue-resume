<template>
  <div id="app">
    <Menu title="Mosa" subTitle="Web dev" />
    <Content-area />
    <Contact />
  </div>
</template>

<script>
import Menu from "./components/Menu/Menu.vue";
import ContentArea from "./components/ContentArea/ContentArea.vue";
import Contact from "./components/Contact/Contact.vue";

export default {
  name: "App",
  components: {
    Menu,
    ContentArea,
    Contact
  }
};
</script>

<style lang="scss"  src="./style/style.scss"/>