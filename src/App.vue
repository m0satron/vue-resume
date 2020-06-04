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
      <Card
        v-for="(item, index) in pageContent[selected]" :key="index"
        titleBackground="red"
        :title="item.title"
        :list="item.list"
        :description="item.description"
      />
    </Content-area>
    <Contact phone="0720479118" mail="abcd@gmail.com" gitHub="m0satron" />
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
      tabItems: "",
      selected: "",
      pageContent: {
        skills: [
         {
            title: "Design System",
            list: [
              "JavaScript",
              "Node",
              "Vue",
              "React",
              "SCSS",
              "CSS",
              "HTML"
            ],
            description:
              "The main tools we've used for developing the Design System. We worked with tdd and used Storybook for documentation"
          },
          {
            title: "devOps",
            list: ["Jest", "CI/CD", "Docker", "K8S"],
            description: "To maintain a healthy agile development lifecycle for our Design System, which is used by all frontend, teams, it has been important to put a lot of love into the delivery process"
          }
        ],
        education: [
          {
            title: "Sonology / ArtScience",
            list: [
              "Royal Academy of Art, Den Haag",
              "Royal Conservatory, Den Haag",
              "2014-2017"
            ],
            description: "A combined fine art and music education at the Interfaculty"

          },
          {
            title: "Visual Arts",
            list: ["Oslo National Academy of the Arts", "2013-2014"],
            description: "Visual Arts & Crafts with focus on ceramic art in Oslo"
          }
        ],
        jobs: [
          {
            title: "Telia",
            description: "At Telia I used to work as one of the core team members for developing their swedish Design System"
          }
        ]

        
      }
    };
  },
  methods: {
    selectTab(clicked) {
      this.selected = clicked;
    },
    getTabs() {
      this.tabItems = Object.keys(this.pageContent)

    }
  },
  beforeMount() {
    this.getTabs();
  }
};
</script>

<style lang="scss" src="./style/style.scss" />
