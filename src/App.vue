<template>
  <HeaderWebsite />
  <div class="container container-app">
    <RouterView />
  </div>
  <FooterWebsite />

</template>

<script>
  import HeaderWebsite from '@/components/HeaderWebsite.vue'
  import FooterWebsite from '@/components/FooterWebsite.vue'

  export default {
    components: {
      HeaderWebsite,
      FooterWebsite
    }
  }
</script>

<style>
  #app{
    min-height: 100vh;
  }
  #app .container-app{
    min-height: 83.5vh;
  }
</style>
