import Vue from 'vue';
import videoInfoResponse from '../../../../src/staticData/videoInfo-response';
import channelInfoResponse from '../../../../src/staticData/channelInfo-response';
import playlistInfoResponse from '../../../../src/staticData/playlistInfo-reponse';
let isFakeResults = process.env.VUE_APP_FAKE_RESULTS;
const axios = require('axios');
const apiKey = process.env.VUE_APP_YOUTUBE_API_KEY;

export const getVideoInfo = ({state}, videoId) => {
   if(isFakeResults == 'true') {
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
   if(isFakeResults == 'true') {
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

export const getPlaylistsInfo = ({state}, {playlistId, channelId}) => {
   if(isFakeResults == 'true') {
      let data = playlistInfoResponse;
      console.log(data[channelId].items)
      console.log(playlistId)
      data[channelId].items.forEach((item) => {
         if(item.id === playlistId) {
            console.log(item)
            Vue.set(state.playlistsInfo, playlistId, item);
            console.log(state.playlistsInfo)
         }
      });
      return;
   }
   axios({
      method: "get",
      url: "https://www.googleapis.com/youtube/v3/playlists",
      params: {
         part: "snippet,contentDetails",
         id: channelId,
         key: apiKey
      }
   })
      .then((response) => {
         response.data.items.forEach((item) => {
            if(item.id === playlistId) {
               Vue.set(state.playlistsInfo, playlistId, item);
            }
         });
      }).catch((err) => {
      console.log(err);
   });
};