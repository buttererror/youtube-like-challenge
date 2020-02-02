<template>
     <header class="heading">
          <div class="heading__container">
               <yotube-logo></yotube-logo>
               <input-search></input-search>
          </div>
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