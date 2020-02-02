<template>
     <header class="heading">
          <yotube-logo></yotube-logo>
          <input-search></input-search>
     </header>

</template>

<script>
   import YotubeLogo from "./yotube-logo";
   import InputSearch from "./input-search";
   export default {
      name: "page-header",
      components: {InputSearch, YotubeLogo}

   }
</script>

<style scoped>

</style>