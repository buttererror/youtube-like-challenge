<template>
     <div class="heading__input-container">
          <input type="text" :class="{'heading__input': true, 'heading__input--show': displayInput}"
                 v-model="searchQuery" @keyup.enter="search">
          <span :class="{'heading__input--show': displayInput, 'close': true}">
               <a href="#" @click.prevent="displayInput = false"><i class="material-icons">close</i></a>
          </span>
          <button v-if="windowWidth > 630"
                  class="heading__input__button--desktop"
                  @click.prevent="search"><i class="material-icons">
               search</i>
          </button>
          <button v-else class="heading__input__button--mobile" @click.prevent="displayInput = true">
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