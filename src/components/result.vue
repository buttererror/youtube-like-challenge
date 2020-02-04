<template>
     <div class="result" v-if="item.id.kind === 'youtube#video' && videosInfo.hasOwnProperty(item.id.videoId)">
          <div class="result__img">
               <img :src="item.snippet.thumbnails.medium.url" class="result__image--video">
               <p>{{videosInfo[item.id.videoId].items[0].contentDetails.duration | formatDuration}}</p>

          </div>
          <div class="result__info">
               <h1 class="result__info__title" v-html="item.snippet.title">
               </h1>
               <div class="result__info__subtitle">
                    <p class="align-content">
                         {{videosInfo[item.id.videoId].items[0].snippet.channelTitle}}</p>
                    <div class="dot-separator" v-if="windowWidth > 630">&#8226;</div>
                    <p class="align-content">{{videosInfo[item.id.videoId].items[0].statistics.viewCount |
                         changeCountExpression}}</p>
                    <div class="dot-separator" v-if="windowWidth > 630">&#8226;</div>
                    <p class="align-content" v-if="windowWidth > 630">{{videosInfo[item.id.videoId].items[0].snippet.publishedAt |
                         publishPeriod}}</p>
               </div>
               <div class="result__info__description">
                    <p>{{item.snippet.description}}</p>
               </div>
          </div>

     </div>
     <div class="result" v-else-if="item.id.kind === 'youtube#channel' && channelsInfo.hasOwnProperty(item.id.channelId)">
          <div class="result__img">
               <img :src="item.snippet.thumbnails.medium.url" class="result__image--channel" height="180">
          </div>
          <div class="result__info">
               <h1 class="result__info__title"  v-html="item.snippet.title">
               </h1>
               <div class="result__info__subtitle">
                    <p class="align-content">
                         {{channelsInfo[item.id.channelId].items[0].statistics.subscriberCount | changeCountExpression}} subscribers
                    </p>
                    <div class="dot-separator" v-if="windowWidth > 630">&#8226;</div>
               </div>
               <div class="result__info__description" v-if="windowWidth > 630">
                    <p>{{item.snippet.description}}</p>
               </div>
          </div>
     </div>
     <div class="result" v-else-if="item.id.kind === 'youtube#playlist' && playlistsInfo.hasOwnProperty(item.id.playlistId)">
          <div class="result__img">
               <img :src="item.snippet.thumbnails.medium.url" class="result__image--playlist" height="180">
               <div class="result__image__overlay">
               </div>
               <div class="result__image__playlist-icon">
                    <span>{{playlistsInfo[item.id.playlistId].contentDetails.itemCount}}</span>
                    <span><i class="material-icons">playlist_play</i></span>
               </div>
          </div>
          <div class="result__info">
               <h1 class="result__info__title"  v-html="item.snippet.title">
               </h1>
               <div class="result__info__subtitle">
                    <p class="align-content">
                         {{playlistsInfo[item.id.playlistId].snippet.channelTitle | changeCountExpression}} subscribers
                    </p>
                    <div class="dot-separator" v-if="windowWidth > 630">&#8226;</div>
               </div>
               <div class="result__info__description" v-if="windowWidth > 630">
                    <p>{{item.snippet.description}}</p>
               </div>
          </div>
     </div>

</template>

<script>
   import {mapState} from 'vuex';

   export default {
      name: "result",
      props: {
         item: {
            required: true
         }
      },
      mounted() {
         if (this.item.id.kind === "youtube#video") {
            this.$store.dispatch("getVideoInfo", this.item.id.videoId);
         }else if(this.item.id.kind === "youtube#channel"){
            this.$store.dispatch("getChannelInfo", this.item.id.channelId);
         }else if (this.item.id.kind === "youtube#playlist") {
            this.$store.dispatch("getPlaylistsInfo", {
               channelId: this.item.snippet.channelId,
               playlistId: this.item.id.playlistId
            });
         }

      },
      computed: {
         ...mapState({
            videosInfo: state => state.videosInfo,
            channelsInfo: state => state.channelsInfo,
            playlistsInfo: state => state.playlistsInfo
         }),
         windowWidth() {
            return this.$store.state.windowWidth;
         }
      },
      filters: {
         changeCountExpression(count) {
            if (Math.floor(count / 1000000000)) {
               return Math.floor(count / 1000000000) + "B";
            }
            if (Math.floor(count / 1000000)) {
               return Math.floor(count / 1000000) + "M";
            }
            if (Math.floor(count / 1000)) {
               return Math.floor(count / 1000) + "K";
            }
            return count;
         },
         publishPeriod(publishedAt) {
            return window.moment(publishedAt).fromNow()
         },
         formatDuration(duration) {
            let hours = window.moment.duration(duration)._data.hours.toString().length < 2 ?
               "0" + window.moment.duration(duration)._data.hours :
               window.moment.duration(duration)._data.hours;
            let minutes = window.moment.duration(duration)._data.minutes.toString().length < 2 ?
               "0" + window.moment.duration(duration)._data.minutes :
               window.moment.duration(duration)._data.minutes;
            let seconds = window.moment.duration(duration)._data.seconds.toString().length < 2 ?
               "0" + window.moment.duration(duration)._data.seconds :
               window.moment.duration(duration)._data.seconds;
            return parseInt(hours) ? hours + ":" : '' + minutes + ":" + seconds;
         }
      }
   }
</script>

<style scoped>

</style>