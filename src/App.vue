<template>
  <div id="app" class="bg-color-base">
    <Menu
      :imgSrc="selfie"
      imgAlt="me"
      title="Mosa"
      subTitle="Web dev"
      :tabItems="tabItems"
      v-on:change="selectTab"
      v-model="selected"
    />
    <Content-area>
      <card
        title="Design System"
        titleBackground="red"
        :list="['Vue', 'Jest', 'SCSS', 'React']"
        description="I used to work with this n that and then I achieved a lot. "
      />
      <card
        title="Design System"
        titleBackground="red"
        :list="['Vue', 'Jest', 'SCSS', 'React']"
        description="I used to work with this n that and then I achieved a lot. "
      />
      <card
        title="Design System"
        titleBackground="red"
        :list="['Vue', 'Jest', 'SCSS', 'React']"
        description="I used to work with this n that and then I achieved a lot. "
      />
      <card
        title="Design System"
        titleBackground="red"
        :list="['Vue', 'Jest', 'SCSS', 'React']"
        description="I used to work with this n that and then I achieved a lot. "
      />
    </Content-area>
    <Contact />
  </div>
</template>

<script>
import Menu from "./components/Menu/Menu.vue";
import ContentArea from "./components/ContentArea/ContentArea.vue";
import Card from "./components/Card/Card.vue";
import Contact from "./components/Contact/Contact.vue";
import selfie from "@/assets/selfie.jpg";

export default {
  name: "App",
  components: {
    Menu,
    ContentArea,
    Card,
    Contact
  },
  data() {
    return {
      selfie,
      tabItems: ["About", "Homes", "Whatever"],
      selected: "hej"
    };
  },
  methods: {
    selectTab(clicked) {
      this.selected = clicked;
    }
  }
};
</script>

<style lang="scss" src="./style/style.scss" />
