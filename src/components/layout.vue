<template>
     <main class="main">
          <header class="heading">
               <yotube-logo></yotube-logo>
               <input-search></input-search>
          </header>
     </main>
</template>

<script>
   import YotubeLogo from "./yotube-logo";
   import InputSearch from "./input-search";
   export default {
      name: "layout",
      components: {InputSearch, YotubeLogo}
   }
</script>

<style lang="scss">
</style>