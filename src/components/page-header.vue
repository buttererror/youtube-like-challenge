<template>
     <header class="heading">
          <div class="heading__container">
               <yotube-logo class="heading__logo"></yotube-logo>
               <youtube-icon class="heading__icon"></youtube-icon>
               <input-search></input-search>
          </div>
     </header>

</template>

<script>
   import YotubeLogo from "./yotube-logo";
   import InputSearch from "./input-search";
   import YoutubeIcon from "./youtube-icon";
   export default {
      name: "page-header",
      components: {YoutubeIcon, InputSearch, YotubeLogo}

   }
</script>

<style scoped>

</style>