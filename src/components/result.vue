<template>
     <div class="result" v-if="item.id.kind === 'youtube#video' && videosInfo.hasOwnProperty(item.id.videoId)">
          <div class="result__img">
               <img :src="item.snippet.thumbnails.medium.url">
               <p>{{videosInfo[item.id.videoId].items[0].contentDetails.duration | formatDuration}}</p>

          </div>
          <div class="result__info">
               <h1 class="result__info__title">
                    {{item.snippet.title}}
               </h1>
               <div class="result__info__subtitle">
                    <p class="align-content">
                         {{videosInfo[item.id.videoId].items[0].snippet.channelTitle}}</p>
                    <div class="dot-separator">&#8226;</div>
                    <p class="align-content">{{videosInfo[item.id.videoId].items[0].statistics.viewCount |
                         changeCountExpression}}</p>
                    <div class="dot-separator">&#8226;</div>
                    <p class="align-content">{{videosInfo[item.id.videoId].items[0].snippet.publishedAt |
                         publishPeriod}}</p>
               </div>
               <div class="result__info__description">
                    <p>{{item.snippet.description}}</p>
               </div>
          </div>

     </div>
     <div class="result" v-else-if="item.id.kind === 'youtube#channel' && channelsInfo.hasOwnProperty(item.id.channelId)">
          <div class="result__img">
               <img :src="item.snippet.thumbnails.medium.url" width="180" height="180">
          </div>
          <div class="result__info">
               <h1 class="result__info__title">
                    {{item.snippet.title}}
               </h1>
               <div class="result__info__subtitle">
                    <p class="align-content">
                         {{channelsInfo[item.id.channelId].items[0].statistics.subscriberCount | changeCountExpression}} subscribers
                    </p>
                    <div class="dot-separator">&#8226;</div>
               </div>
               <div class="result__info__description">
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
         }else {
            this.$store.dispatch("getChannelInfo", this.item.id.channelId);
         }
      },
      computed: {
         ...mapState({
            videosInfo: state => state.videosInfo,
            channelsInfo: state => state.channelsInfo
         })
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