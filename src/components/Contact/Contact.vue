<template>
  <div class="contact">
    <span class="contact__item">
      <a :href="`tel:${phone}`" class="contact__phone">
        <Phone :title="phone" class="contact__icon" />
      </a>
    </span>
    <span>
      <a :href="`mailto:${mail}`" class="contact__mail">
        <Email :title="mail" class="contact__icon" />
      </a>
    </span>
    <span>
      <a :href="`https://github.com/${gitHub}`" class="contact__github">
        <Github :title="gitHub" class="contact__icon" />
      </a>
    </span>
    <span>
      <a :href="`https://linkedin.com/${linkedIn}`" class="contact__linkedin">
        <Linkedin :title="linkedIn" class="contact__icon" />
      </a>
    </span>
  </div>
</template>

<script>
import Phone from "vue-material-design-icons/Phone.vue";
import Email from "vue-material-design-icons/EmailOutline.vue";
import Github from "vue-material-design-icons/Github.vue";
import Linkedin from "vue-material-design-icons/Linkedin.vue";
import { validateEmail, validatePhone } from "../../functions/validators.js";

export default {
  name: "Contact",

  components: {
    Phone,
    Email,
    Github,
    Linkedin
  },
  
  props: {
    phone: {
      type: String,
      validator: validatePhone
    },
    mail: {
      type: String,
      validator: validateEmail
    },
    gitHub: String,
    linkedIn: String
  }
};
</script>

<style lang="scss" src="./contact.scss" />
