import Vue from 'vue';
import NProgress from 'nprogress';
import searchResponse from '../staticData/search-reponse';
import videoInfoResponse from '../staticData/videoInfo-response';
import channelInfoResponse from '../staticData/channelInfo-response';
import env from '../env';
const axios = require('axios');
const apiKey = "AIzaSyAME272kfYP4VjfTJ4Ulwf4wEkIbnpGFvM";
export const search = ({state}, query) => {
   if(env.fake_results) {
      state.query = query;
      let data = searchResponse;
      state.items = data.items;
      state.totalResults = data.pageInfo.totalResults;
      return;
   }
   if(state.windowWidth <= 630) state.isLoading = true;
   else NProgress.start();
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

export const getVideoInfo = ({state}, videoId) => {
   if(env.fake_results) {
      let data = videoInfoResponse;
      Vue.set(state.videosInfo, videoId, data[videoId]);
      return;
   }
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

export const getChannelInfo = ({state}, channelId) => {
   if(env.fake_results) {
      let data = channelInfoResponse;
      Vue.set(state.channelsInfo, channelId, data[channelId]);
      return;
   }
   axios({
      method: "get",
      url: "https://www.googleapis.com/youtube/v3/channels",
      params: {
         part: "snippet,contentDetails,statistics",
         id: channelId,
         key: apiKey
      }
   })
      .then((response) => {
         Vue.set(state.channelsInfo, channelId, response.data);
      }).catch((err) => {
      console.log(err);
   });

};