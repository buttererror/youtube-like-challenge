<template>
     <div class="heading__input-container">
          <input type="text" class="heading__input" v-model="searchQuery" @keyup.enter="search">
          <button class="heading__input__button" @click.prevent="search"><i class="material-icons">
               search</i>
          </button>
     </div>
</template>

<script>
   export default {
      name: "input-search",
      computed: {
         searchQuery: {
            get() {
               return this.$store.state.searchQuery;
            },
            set(q) {
               this.$store.commit("updateSearchQuery", q);
            }

         }
      },
      methods: {
         search() {
            this.$store.dispatch("search", this.searchQuery);
         }
      }
   }
</script>

<style scoped>

</style>