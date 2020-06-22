<template>
     <div class="input-search">
          <input type="text" :class="{'input': true, 'input-is-visible': displayInput}"
                 v-model="searchQuery" @keyup.enter="search">
          <span :class="{'icon-is-visible': displayInput, 'input-search__icon': true}">
               <a href="#" @click.prevent="displayInput = false"><i class="material-icons">close</i></a>
          </span>
          <button v-if="windowWidth > 630"
                  class="button"
                  @click.prevent="search"><i class="material-icons">
               search</i>
          </button>
          <button v-else class="button-mobile" @click.prevent="displayInput = true">
               <i class="material-icons">search</i>
          </button>
     </div>
</template>

<script>
   export default {
      name: "input-search",
      data() {
         return {
            displayInput: false
         }
      },
      computed: {
         searchQuery: {
            get() {
               return this.$store.state.searchQuery;
            },
            set(q) {
               this.$store.commit("updateSearchQuery", q);
            }
         },
         windowWidth() {
            return this.$store.state.windowWidth;
         },
      },
      methods: {
         search() {
            this.$store.dispatch("search", this.searchQuery);
         }
      },
   }
</script>

<style scoped>

</style>