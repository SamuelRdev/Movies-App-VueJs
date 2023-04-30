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
</style>
