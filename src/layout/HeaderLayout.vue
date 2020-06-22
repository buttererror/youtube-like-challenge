<template>
     <header class="l-header">
          <div class="megaBar">
               <yotube-logo></yotube-logo>
               <youtube-icon></youtube-icon>
               <input-search></input-search>
          </div>
     </header>

</template>

<script>
   import YotubeLogo from "./components/yotube-logo";
   import InputSearch from "./components/input-search";
   import YoutubeIcon from "./components/youtube-icon";
   export default {
      name: "HeaderLayout",
      components: {YoutubeIcon, InputSearch, YotubeLogo}

   }
</script>

<style scoped>

</style>