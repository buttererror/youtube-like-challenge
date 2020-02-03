import Vue from 'vue';
import searchResponse from '../staticData/search-reponse';
import videoInfoResponse from '../staticData/videoInfo-response';
import channelInfoResponse from '../staticData/channelInfo-response';
// const axios = require('axios');
// const apiKey = "AIzaSyAME272kfYP4VjfTJ4Ulwf4wEkIbnpGFvM";
export const search = ({state}, query) => {
   state.query = query;
   let data = searchResponse;
   state.items = data.items;
   state.totalResults = data.pageInfo.totalResults;
   // axios({
   //    method: "get",
   //    url: "https://www.googleapis.com/youtube/v3/search",
   //    params: {
   //       part: "snippet",
   //       key: apiKey,
   //       maxResults: 25,
   //       q: query
   //    }
   // })
   //    .then((response) => {
   //       state.items = response.data.items;
   //       state.resultsCount = response.data.pageInfo.totalResults
   //    }).catch((err) => {
   //       console.log(err.data);
   // });
};

export const getVideoInfo = ({state}, videoId) => {
   let data = videoInfoResponse;
   Vue.set(state.videosInfo, videoId, data[videoId]);
   // axios({
   //    method: "get",
   //    url: "https://www.googleapis.com/youtube/v3/videos",
   //    params: {
   //       part: "snippet,contentDetails,statistics",
   //       id: videoId,
   //       key: apiKey
   //    }
   // })
   //    .then((response) => {
   //       Vue.set(state.videosInfo, videoId, response.data);
   //    }).catch((err) => {
   //       console.log(err);
   // });
};

export const getChannelInfo = ({state}, channelId) => {
   let data = channelInfoResponse;
   Vue.set(state.channelsInfo, channelId, data[channelId]);

   // axios({
   //    method: "get",
   //    url: "https://www.googleapis.com/youtube/v3/channels",
   //    params: {
   //       part: "snippet,contentDetails,statistics",
   //       id: channelId,
   //       key: apiKey
   //    }
   // })
   //    .then((response) => {
   //       Vue.set(state.channelsInfo, channelId, response.data);
   //    }).catch((err) => {
   //    console.log(err);
   // });

};