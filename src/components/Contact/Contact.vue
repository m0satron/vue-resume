<template>
<div class="contact ">
  <span>
    <a :href="`tel:${phone}`" class="contact__phone">{{ phone }} </a>
  </span>
  <span>
    <a :href="`mailto:${mail}`" class="contact__mail">{{ mail }} </a>
  </span>
  <span>
    <a :href="`https://github.com/${gitHub}`" class="contact__github">{{gitHub }} </a>
  </span>
  <span>
    <a :href="`https://linkedin.com/${linkedIn}`" class="contact__linkedin">{{linkedIn }} </a>
  </span>
</div>
  
</template>

<script>
export default {
  name: 'Contact',
  props: {
    phone: String,
    mail: String,
    gitHub: String,
    linkedIn: String
  }

}
</script>

<style lang="scss" src="./contact.scss" /> 