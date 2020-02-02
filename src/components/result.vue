<template>
     <!--videosInfo.hasOwnProperty(item.id.videoId)-->
     <div class="result" v-if="item.id.kind === 'youtube#video'">
          <div class="result__img">
               <img :src="item.snippet.thumbnails.medium.url">
               <!--<p>{{videosInfo[item.id.videoId].items[0].contentDetails.duration | formatDuration}}</p>-->
               <p>{{videoInfo.items[0].contentDetails.duration | formatDuration}}</p>

          </div>
          <div class="result__info">
               <h1 class="result__info__title">
                    {{item.snippet.title}}
               </h1>
               <div class="result__info__subtitle">
                    <p class="align-content">
                         {{videoInfo.items[0].snippet.channelTitle}}</p>
                    <div class="dot-separator">&#8226;</div>
                    <p class="align-content">{{videoInfo.items[0].statistics.viewCount |
                         changeCountExpression}}</p>
                    <div class="dot-separator">&#8226;</div>
                    <p class="align-content">{{videoInfo.items[0].snippet.publishedAt |
                         publishPeriod}}</p>
               </div>
               <div class="result__info__description">
                    <p>{{item.snippet.description}}</p>
               </div>
          </div>

     </div>
     <div class="result" v-else>
          <div class="result__img">
               <img :src="item.snippet.thumbnails.medium.url" width="180" height="180">
          </div>
          <div class="result__info">
               <h1 class="result__info__title">
                    {{item.snippet.title}}
               </h1>
               <div class="result__info__subtitle">
                    <p class="align-content">
                         3000 subscribers</p>
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
      data() {
         return {
            videoInfo: {
               "kind": "youtube#videoListResponse",
               "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/g_S_vfMCBRheR9gTFDPTJDdGQKk\"",
               "pageInfo": {
                  "totalResults": 1,
                  "resultsPerPage": 1
               },
               "items": [
                  {
                     "kind": "youtube#video",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/d9aeC33HLzqXA9S4opEr6spYfOM\"",
                     "id": "Ommz8QGztak",
                     "snippet": {
                        "publishedAt": "2020-01-16T14:00:02.000Z",
                        "channelId": "UCZTLU39XbfN04FBXVc0vD1g",
                        "title": "SpongeBob | Nickelodeon Arabia | سبونج بوب | حب الجيران",
                        "description": "ومن الذين لا يحبون جيرانهم؟\n\nاشترك الآن لمشاهدة أفضل الأحداث والمغامرات المسلية من عروضكم المفضلة مثل سبونج بوب سكوير بانتس وهنري البطل و ثاندرمان ومنزل لاود، وغيرهم الكثير! ما هي أكثر البرامج التي تودون مشاهدتها عبر القناة؟\n\nشاركونا آرائكم من خلال التعليقات ودردشوا معنا عبر صفحتنا المجتمعية، ترقبوا الجديد لدى نيكلوديون على موقعنا الإلكتروني\n\nwww.nickelodeon.com\n\nللاستمتاع بالعروض التلفزيونية الجديدة والكلاسيكية! العب بشخصياتك المفضلة من ألعاب فيديو وأجب على أسئلة الاختبار لتعرف ما إذا كنت حقًا من أكبر المعجبين بـنيكلوديون!\n\nتابعونا عبر مواقع التواصل الاجتماعي:\n\n\nInstagram: https://www.instagram.com/nickelodeon.arabia/\nFacebook: https://www.facebook.com/Nickelodeon.Arabia/",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/Ommz8QGztak/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/Ommz8QGztak/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/Ommz8QGztak/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           },
                           "standard": {
                              "url": "https://i.ytimg.com/vi/Ommz8QGztak/sddefault.jpg",
                              "width": 640,
                              "height": 480
                           },
                           "maxres": {
                              "url": "https://i.ytimg.com/vi/Ommz8QGztak/maxresdefault.jpg",
                              "width": 1280,
                              "height": 720
                           }
                        },
                        "channelTitle": "Nickelodeon Arabia",
                        "tags": [
                           "نيكلوديون",
                           "باللغة",
                           "العربية",
                           "تلفزيون الأطفال",
                           "أفلام الكرتون",
                           "كرتون نيكلوديون العروض التلفزيونية المضحكة",
                           "مسلسلات تلفزيون الأطفال",
                           "العروض الملحمية",
                           "البرامج الترفيهية للأطفال",
                           "الرسوم المتحركة",
                           "الرسوم المتحركة على نيكلوديون الموسم الأول",
                           "الحلقة 1",
                           "الحلقات الكاملة",
                           "مزعج",
                           "ضوضاء",
                           "جيران",
                           "مرح",
                           "تدمير",
                           "SB_COMP_AR"
                        ],
                        "categoryId": "24",
                        "liveBroadcastContent": "none",
                        "localized": {
                           "title": "SpongeBob | Nickelodeon Arabia | سبونج بوب | حب الجيران",
                           "description": "ومن الذين لا يحبون جيرانهم؟\n\nاشترك الآن لمشاهدة أفضل الأحداث والمغامرات المسلية من عروضكم المفضلة مثل سبونج بوب سكوير بانتس وهنري البطل و ثاندرمان ومنزل لاود، وغيرهم الكثير! ما هي أكثر البرامج التي تودون مشاهدتها عبر القناة؟\n\nشاركونا آرائكم من خلال التعليقات ودردشوا معنا عبر صفحتنا المجتمعية، ترقبوا الجديد لدى نيكلوديون على موقعنا الإلكتروني\n\nwww.nickelodeon.com\n\nللاستمتاع بالعروض التلفزيونية الجديدة والكلاسيكية! العب بشخصياتك المفضلة من ألعاب فيديو وأجب على أسئلة الاختبار لتعرف ما إذا كنت حقًا من أكبر المعجبين بـنيكلوديون!\n\nتابعونا عبر مواقع التواصل الاجتماعي:\n\n\nInstagram: https://www.instagram.com/nickelodeon.arabia/\nFacebook: https://www.facebook.com/Nickelodeon.Arabia/"
                        },
                        "defaultAudioLanguage": "en-US"
                     },
                     "contentDetails": {
                        "duration": "PT28M3S",
                        "dimension": "2d",
                        "definition": "hd",
                        "caption": "false",
                        "licensedContent": true,
                        "projection": "rectangular"
                     },
                     "statistics": {
                        "viewCount": "5071798",
                        "likeCount": "94889",
                        "dislikeCount": "7600",
                        "favoriteCount": "0",
                        "commentCount": "1"
                     }
                  }
               ]
            }


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