<template>
  <div id="app" class="bg-color-base">
    <Menu
      :imgSrc="selfie"
      imgAlt="portrait photo of Mosa"
      title="Mosa M.Sebdani"
      subTitle="Web developer"
      :tabItems="tabItems"
      v-on:change="selectTab"
      v-model="selected"
    />
    <Content-area>
      <card
        title="Design System"
        titleBackground="red"
        :list="['Vue', 'Jest', 'SCSS', 'React', 'JavaScript', 'Node']"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <card
        title="devOps"
        titleBackground="red"
        :list="['Jenkins', 'K8S', 'Docker', 'Something else']"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <card
        title="Art"
        titleBackground="red"
        :list="['Blender', 'Sculpting', 'Photography', 'Sonology']"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <card
        title="Other"
        titleBackground="red"
        :list="['Python', 'maxMSP', 'SuperCollider', 'Some more stuff']"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </Content-area>
    <Contact phone="0720479118" />
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
      selected: ''
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
