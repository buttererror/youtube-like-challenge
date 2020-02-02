<template>
     <div class="heading__input-container">
          <input type="text" class="heading__input" @keyup.enter="search">
          <button class="heading__input__button"><i class="material-icons">
               search</i>
          </button>
     </div>
</template>

<script>
   export default {
      name: "input-search",
      methods: {
         search() {

         }
      }
   }
</script>

<style scoped>

</style>