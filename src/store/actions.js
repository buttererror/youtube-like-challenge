import NProgress from 'nprogress';
import searchResponse from '../staticData/search-reponse';
let isFakeResults = process.env.VUE_APP_FAKE_RESULTS;
const axios = require('axios');
const apiKey = process.env.VUE_APP_YOUTUBE_API_KEY;
export const search = ({state}, query) => {
   if(isFakeResults == 'true') {
      state.query = query;
      let data = searchResponse;
      state.items = data.items;
      state.totalResults = data.pageInfo.totalResults;
      return;
   }
   if(state.windowWidth <= 630) state.isLoading = true;
   else NProgress.start();
   state.items = [];
   axios({
      method: "get",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
         part: "snippet",
         key: apiKey,
         maxResults: 25,
         q: query
      }
   })
      .then((response) => {
         state.items = response.data.items;
         state.resultsCount = response.data.pageInfo.totalResults;
         if(state.windowWidth <= 630) state.isLoading = false;
         else NProgress.done();
      }).catch((err) => {
         console.log(err.data);
   });
};