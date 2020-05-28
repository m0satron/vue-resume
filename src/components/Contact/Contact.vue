<template>
<div class="contact ">
  <span>
    <a :href="`tel:${phone}`" class="contact__phone">{{ phone }} </a>
  </span>
</div>
  
</template>

<script>
export default {
  name: 'Contact',
  props: {
    phone: String
  }

}
</script>

<style lang="scss" src="./contact.scss" /> 