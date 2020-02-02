import Vue from 'vue';
const axios = require('axios');
const apiKey = "AIzaSyD8g_2lrXYicgw9C9wGYKpzD0_Ab077aHo";
export const search = ({state}, query) => {
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
      }).catch((err) => {
         console.log(err.data);
   });
};

export const getVideoInfo = ({state}, videoId) => {
   console.log(videoId)
   axios({
      method: "get",
      url: "https://www.googleapis.com/youtube/v3/videos",
      params: {
         part: "snippet,contentDetails,statistics",
         id: videoId,
         key: apiKey
      }
   })
      .then((response) => {
         Vue.set(state.videosInfo, videoId, response.data);
      }).catch((err) => {
         console.log(err);
   });
};