<template>
     <main class="search-main-page">
          <page-header></page-header>
          <div class="results" v-if="items">
               <div class="results__header">
                    <div class="results__count">About 1000000 results</div>
                    <div class="results__filter">
                         <i class="material-icons">filter_list</i>
                    </div>
               </div>
               <div class="results__group">
                    <result
                              v-for="(item, index) in items"
                              :key="index"
                              :item="item"
                    ></result>
               </div>

          </div>
     </main>
</template>

<script>
   import PageHeader from "./page-header";
   import Result from "./result";
   import {mapState} from 'vuex';
   import { loadProgressBar } from 'axios-progress-bar'

   export default {
      name: "layout",
      components: {Result, PageHeader},
      mounted() {
         loadProgressBar()
      },
      computed: {
         ...mapState({
            items: state => state.items,
            totalResults: state => state.totalResults
         })
      }
   }
</script>

<style lang="scss">
</style>