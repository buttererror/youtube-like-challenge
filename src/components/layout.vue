<template>
     <main class="search-main-page">
          <page-header></page-header>
          <div class="results">
               <div class="results__header"></div>
               <div class="results__group">
                    <div class="result">
                         <div class="result__img">
                              <img :src="data.items[0].snippet.thumbnails.medium.url">
                              <p>{{videoInfo.items[0].contentDetails.duration | formatDuration}}</p>
                         </div>
                         <div class="result__info">
                              <h1 class="result__info__title">
                                   {{data.items[0].snippet.title}}
                              </h1>
                              <div class="video">
                                   <p class="align-content video__channel-title">{{videoInfo.items[0].snippet.channelTitle}}</p>
                                   <div class="dot-separator">&#8226;</div>
                                   <p class="align-content video__views">{{videoInfo.items[0].statistics.viewCount |
                                        changeCountExpression}}</p>
                                   <div class="dot-separator">&#8226;</div>
                                   <p class="align-content video__publish">{{videoInfo.items[0].snippet.publishedAt | publishPeriod}}</p>
                              </div>
                              <div class="result__info__description">
                                   <p>{{data.items[0].snippet.description}}</p>
                              </div>
                         </div>

                    </div>
               </div>

          </div>
     </main>
</template>

<script>
   import PageHeader from "./page-header";

   export default {
      name: "layout",
      components: {PageHeader},
      data() {
         return {
            data: {
               "kind": "youtube#searchListResponse",
               "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/SKfPIQX9fD1Hm8zabvb1dUroutg\"",
               "nextPageToken": "CAUQAA",
               "regionCode": "EG",
               "pageInfo": {
                  "totalResults": 1000000,
                  "resultsPerPage": 5
               },
               "items": [
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/Q2EFVWRpYqUC0fmFyoz2P_EEvWw\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "Ommz8QGztak"
                     },
                     "snippet": {
                        "publishedAt": "2020-01-16T14:00:02.000Z",
                        "channelId": "UCZTLU39XbfN04FBXVc0vD1g",
                        "title": "SpongeBob | Nickelodeon Arabia | سبونج بوب | حب الجيران",
                        "description": "ومن الذين لا يحبون جيرانهم؟ اشترك الآن لمشاهدة أفضل الأحداث والمغامرات المسلية من عروضكم المفضلة مثل سبونج...",
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
                           }
                        },
                        "channelTitle": "Nickelodeon Arabia",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/iH7h9nGS03sVL0WLSs3FfuAgogY\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "J3gOVvWjOmY"
                     },
                     "snippet": {
                        "publishedAt": "2020-02-01T15:00:03.000Z",
                        "channelId": "UCx27Pkk8plpiosF14qXq-VA",
                        "title": "Band Geeks&#39; ft. &quot;Sweet Victory&quot; 🥁 in 5 Minutes! | SpongeBob SquarePants",
                        "description": "It's Super Bowl season, and there's no better way to celebrate than with a little Sweet Victory! Watch the iconic episode \"Band Geeks\" in just 5 minutes!",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/J3gOVvWjOmY/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/J3gOVvWjOmY/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/J3gOVvWjOmY/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "SpongeBob SquarePants Official",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/fLLGwTzIm_Bf29wEYjD7ziYzN9Y\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "qp4_kSAb1Tk"
                     },
                     "snippet": {
                        "publishedAt": "2020-01-31T15:00:19.000Z",
                        "channelId": "UCx27Pkk8plpiosF14qXq-VA",
                        "title": "Top 21 Weirdest Scenes! 👻 SpongeBob SquarePants",
                        "description": "SpongeBob is obviously very funny, but ever had a moment where you just went \"HUH?\" Yeah, things can get a little odd in Bikini Bottom! Here are our top 21 ...",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/qp4_kSAb1Tk/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/qp4_kSAb1Tk/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/qp4_kSAb1Tk/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "SpongeBob SquarePants Official",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/D1ND6W3097Loepip_DICZKCXUmc\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "GgtMz6ZVFE0"
                     },
                     "snippet": {
                        "publishedAt": "2020-01-30T15:00:04.000Z",
                        "channelId": "UCx27Pkk8plpiosF14qXq-VA",
                        "title": "50 Times Someone BROKE THE LAW in Bikini Bottom! 🚨 SpongeBob SquarePants",
                        "description": "Sometimes it's \"borrowed\", sometimes it's Free Balloon Day, and sometimes it's just a straight up crime! Here are 50 times someone in Bikini Bottom committed a ...",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/GgtMz6ZVFE0/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/GgtMz6ZVFE0/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/GgtMz6ZVFE0/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "SpongeBob SquarePants Official",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/Eh7XZf63QByAtXGK3hdz4k48XjM\"",
                     "id": {
                        "kind": "youtube#channel",
                        "channelId": "UCx27Pkk8plpiosF14qXq-VA"
                     },
                     "snippet": {
                        "publishedAt": "2019-01-15T23:58:20.000Z",
                        "channelId": "UCx27Pkk8plpiosF14qXq-VA",
                        "title": "SpongeBob SquarePants Official",
                        "description": "The SpongeBob Official Channel is the best place to see Nickelodeon's SpongeBob SquarePants on YouTube! Come follow the adventures of the world's most ...",
                        "thumbnails": {
                           "default": {
                              "url": "https://yt3.ggpht.com/-pSKmnh7ulHU/AAAAAAAAAAI/AAAAAAAAAAA/gZGYOqsSgOY/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
                           },
                           "medium": {
                              "url": "https://yt3.ggpht.com/-pSKmnh7ulHU/AAAAAAAAAAI/AAAAAAAAAAA/gZGYOqsSgOY/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
                           },
                           "high": {
                              "url": "https://yt3.ggpht.com/-pSKmnh7ulHU/AAAAAAAAAAI/AAAAAAAAAAA/gZGYOqsSgOY/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
                           }
                        },
                        "channelTitle": "SpongeBob SquarePants Official",
                        "liveBroadcastContent": "upcoming"
                     }
                  }
               ]
            },
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
      filters: {
         changeCountExpression(count) {
            if(Math.floor(count / 1000000000)) {
               return Math.floor(count / 1000000000) + "B";
            }
            if(Math.floor(count / 1000000)) {
               return Math.floor(count / 1000000) + "M";
            }
            if(Math.floor(count / 1000)) {
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
            return parseInt(hours) ? hours + ":" : ''  + minutes + ":" + seconds;
         }
      }
   }
</script>

<style lang="scss">
</style>