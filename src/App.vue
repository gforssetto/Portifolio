<template>
  <div>
    <HeaderSection />
    <FooterSection />
  </div>
</template>

<script>
import FooterSection from './components/Footer.vue'
import HeaderSection from './components/Header.vue'


export default {
  name: 'App',
  components:{
    HeaderSection,
    FooterSection
  }

}
</script>

<style>
@import url('./css/style.css');
</style>
