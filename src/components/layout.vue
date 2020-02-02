<template>
     <main class="search-main-page">
          <page-header></page-header>
          <div class="results" v-if="items">
               <div class="results__header"></div>
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
         // this.$store.dispatch("search", "spongebob");
         loadProgressBar()
      },
      data() {
         return {
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
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/HNDGO9pxA8fvr5fMkiE1S3Nrsdg\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "RS_PTq12qQM"
                  },
                  "snippet": {
                     "publishedAt": "2020-01-31T08:00:10.000Z",
                     "channelId": "UCTJDdO9klWGpTekswnXreGQ",
                     "title": "SpongeBob SquarePants | Si Maniak 🤪| Nickelodeon Bahasa",
                     "description": "SpongeBob dengan panik mencari penjahat yang meneror Bikini Bottom (yang kebetulan sangat mirip dengan dirinya) #nickelodeon #nickelodeonbahasa ...",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/RS_PTq12qQM/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/RS_PTq12qQM/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/RS_PTq12qQM/hqdefault.jpg",
                           "width": 480,
                           "height": 360
                        }
                     },
                     "channelTitle": "Nickelodeon Bahasa",
                     "liveBroadcastContent": "none"
                  }
               },
               {
                  "kind": "youtube#searchResult",
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/ctu7lsCskAszxMpgg_MP5ZYR2Es\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "04N8-RCaLrM"
                  },
                  "snippet": {
                     "publishedAt": "2019-06-27T08:00:00.000Z",
                     "channelId": "UCTJDdO9klWGpTekswnXreGQ",
                     "title": "SpongeBob SquarePants | Cinta tetangga | Nickelodeon Bahasa",
                     "description": "Siapa yang tidak mencintai tetangganya? #nickelodeon #nickelodeonbahasa Langganan sekarang untuk melihat semua momen terbaik dan adegan lucu dari ...",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/04N8-RCaLrM/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/04N8-RCaLrM/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/04N8-RCaLrM/hqdefault.jpg",
                           "width": 480,
                           "height": 360
                        }
                     },
                     "channelTitle": "Nickelodeon Bahasa",
                     "liveBroadcastContent": "none"
                  }
               },
               {
                  "kind": "youtube#searchResult",
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/8DqgIbRWQJNkmUU0c-_x_JRoSJw\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "HVviGino7CU"
                  },
                  "snippet": {
                     "publishedAt": "2020-01-26T15:00:05.000Z",
                     "channelId": "UCx27Pkk8plpiosF14qXq-VA",
                     "title": "SpongeBob&#39;s 31 Best Alter-Egos! 🦸\u200d♂️ SpongeBob SquarePants",
                     "description": "Over the years, SpongeBob SquarePants has gone by a few names. JellyBob...The Quickster...or just impersonating Patrick! Here's 31 times SpongeBob put on ...",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/HVviGino7CU/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/HVviGino7CU/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/HVviGino7CU/hqdefault.jpg",
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
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/iqaHtb8s-LUiQZaNmBURgtMXKZE\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "0bKVpc8U2go"
                  },
                  "snippet": {
                     "publishedAt": "2019-04-11T10:00:00.000Z",
                     "channelId": "UCx27Pkk8plpiosF14qXq-VA",
                     "title": "Top 13 Krabby Patty Moments! 🍔 #TBT | SpongeBob",
                     "description": "It's the Krabby Patty in all its glory! Here's the best moments of the finest burger under the sea! Watch more of your favorite shows on Nick! ▻▻ Subscribe for ...",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/0bKVpc8U2go/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/0bKVpc8U2go/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/0bKVpc8U2go/hqdefault.jpg",
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
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/1bNEKk6uKOBY-WHofyX1QFSohQE\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "EOgxV8wKnWA"
                  },
                  "snippet": {
                     "publishedAt": "2019-05-25T00:00:00.000Z",
                     "channelId": "UC2MR8wuMwaS3hN9leOXl_Dg",
                     "title": "The SpongeBob Movie: Sponge Out of Water - SpongeBob Memorable Moments",
                     "description": "The SpongeBob Movie: Sponge Out of Water - SpongeBob Memorable Moments Don't forget to Like & Share This Video and Subscribe & comment below.",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/EOgxV8wKnWA/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/EOgxV8wKnWA/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/EOgxV8wKnWA/hqdefault.jpg",
                           "width": 480,
                           "height": 360
                        }
                     },
                     "channelTitle": "Chi Po",
                     "liveBroadcastContent": "none"
                  }
               },
               {
                  "kind": "youtube#searchResult",
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/U-tRzgtyUmFIDD0KP62E4vwJVjA\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "oKDotSYRuiI"
                  },
                  "snippet": {
                     "publishedAt": "2020-01-29T14:32:51.000Z",
                     "channelId": "UCzcRQ3vRNr6fJ1A9rqFn7QA",
                     "title": "THE SPONGEBOB MOVIE 2 Trailer # 2 (2020) Sponge on the Run, SpongeBob SquarePants Movie HD",
                     "description": "THE SPONGEBOB MOVIE 2 Trailer # 2 (2020) Sponge on the Run, SpongeBob SquarePants Movie HD © 2020 - Paramount Comedy, Kids, Family and ...",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/oKDotSYRuiI/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/oKDotSYRuiI/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/oKDotSYRuiI/hqdefault.jpg",
                           "width": 480,
                           "height": 360
                        }
                     },
                     "channelTitle": "ONE Media",
                     "liveBroadcastContent": "none"
                  }
               },
               {
                  "kind": "youtube#searchResult",
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/8kYxhXvJo981lrmgJPpe0Olx1N8\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "gjlROumz-pA"
                  },
                  "snippet": {
                     "publishedAt": "2019-01-13T01:30:01.000Z",
                     "channelId": "UCMsOhFFhhI2QAPfU-W4OrtQ",
                     "title": "Spongebob Squarepants Characters In Real Life",
                     "description": "Have you ever wondered how Spongebob Squarepants characters would look like in real life? In this video I'll show you, hope you enjoy it. Follow Me: ...",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/gjlROumz-pA/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/gjlROumz-pA/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/gjlROumz-pA/hqdefault.jpg",
                           "width": 480,
                           "height": 360
                        }
                     },
                     "channelTitle": "Paradizy",
                     "liveBroadcastContent": "none"
                  }
               },
               {
                  "kind": "youtube#searchResult",
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/MU-lbPetmcJuBA6l1qvwWLT33dU\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "fLJJS3UucQ8"
                  },
                  "snippet": {
                     "publishedAt": "2017-11-20T19:00:02.000Z",
                     "channelId": "UCz7pDh0hn6mj0amCgUNDerg",
                     "title": "Spongebob&#39;s Game Frenzy - Funny Spongebob Scrub Scrub Scrub - Nicklodeon Jr Kids Games Video",
                     "description": "Spongebob's Game Frenzy funny Moments Compilation HD Download: https://goo.gl/R38zun SpongeBob's GamePlay and collect fast and frantic minigames in ...",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/fLJJS3UucQ8/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/fLJJS3UucQ8/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/fLJJS3UucQ8/hqdefault.jpg",
                           "width": 480,
                           "height": 360
                        }
                     },
                     "channelTitle": "ToonFirst.com",
                     "liveBroadcastContent": "none"
                  }
               },
               {
                  "kind": "youtube#searchResult",
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/0a8KaOBmdIbRvVqgR81MSZDB5OQ\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "uP-Gy7vOOn4"
                  },
                  "snippet": {
                     "publishedAt": "2019-01-02T23:50:47.000Z",
                     "channelId": "UCX1HAeoE5ys5FZkYibWPYIw",
                     "title": "SpongeBob SquarePants Full Episodes 1 ❂ SpongeBob SquarePants: Plankton&#39;s Robotic Revenge - Joshua",
                     "description": "SpongeBob SquarePants Full Episodes 1 ❂ SpongeBob SquarePants: Plankton's Robotic Revenge - Joshua.",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/uP-Gy7vOOn4/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/uP-Gy7vOOn4/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/uP-Gy7vOOn4/hqdefault.jpg",
                           "width": 480,
                           "height": 360
                        }
                     },
                     "channelTitle": "Joshua",
                     "liveBroadcastContent": "none"
                  }
               },
               {
                  "kind": "youtube#searchResult",
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/CQUDhZnYFSDk37l9JQknrO6TPVo\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "E-Iveaww5WM"
                  },
                  "snippet": {
                     "publishedAt": "2020-01-25T15:00:02.000Z",
                     "channelId": "UCx27Pkk8plpiosF14qXq-VA",
                     "title": "&quot;Opposite Day&quot; with SpongeBob❓in 5 Minutes!  | SpongeBob SquarePants",
                     "description": "On \"Opposite Day\" ANYBODY can be Squidward! Well... maybe not just *anybody*. Check out the classic SpongeBob SquarePants episode \"Opposite Day\" in ...",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/E-Iveaww5WM/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/E-Iveaww5WM/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/E-Iveaww5WM/hqdefault.jpg",
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
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/xdj3i7Sagg06LbGs3edJBmUP6qY\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "cKmrStBVSNo"
                  },
                  "snippet": {
                     "publishedAt": "2020-01-29T14:14:33.000Z",
                     "channelId": "UCLRlryMfL8ffxzrtqv0_k_w",
                     "title": "THE SPONGEBOB MOVIE: Sponge on the Run Super Bowl Trailer (2020)",
                     "description": "Official The Spongebob Movie: Sponge on the Run Movie Super Bowl Spot & Trailer 2020 | Subscribe ➤ http://abo.yt/ki | Tom Kenny Movie Trailer | Release: 22 ...",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/cKmrStBVSNo/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/cKmrStBVSNo/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/cKmrStBVSNo/hqdefault.jpg",
                           "width": 480,
                           "height": 360
                        }
                     },
                     "channelTitle": "KinoCheck International",
                     "liveBroadcastContent": "none"
                  }
               },
               {
                  "kind": "youtube#searchResult",
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/S2wO7yRVAh87T5Jt0xY0ZnSYc20\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "wHiKwu9Fhew"
                  },
                  "snippet": {
                     "publishedAt": "2020-01-29T14:15:45.000Z",
                     "channelId": "UCT0hbLDa-unWsnZ6Rjzkfug",
                     "title": "THE SPONGEBOB MOVIE 2: SPONGE ON THE RUN Super Bowl Trailer (2020)",
                     "description": "Super Bowl spot for The SpongeBob Movie 2: Sponge On The Run.",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/wHiKwu9Fhew/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/wHiKwu9Fhew/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/wHiKwu9Fhew/hqdefault.jpg",
                           "width": 480,
                           "height": 360
                        }
                     },
                     "channelTitle": "FilmSelect Trailer",
                     "liveBroadcastContent": "none"
                  }
               },
               {
                  "kind": "youtube#searchResult",
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/6V0AqHDExIqFGo3n2pRCl-nbrfg\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "60reuuVTGao"
                  },
                  "snippet": {
                     "publishedAt": "2020-01-30T17:30:06.000Z",
                     "channelId": "UCTUOrR6Xtn2Q0ZomMqUtxzg",
                     "title": "1917 : The SpongeBob SquarePants Version",
                     "description": "The awesome 1917 trailer finally has its SpongeBob redux... A remix of one of the best 2019 trailers which brings a decisive answer to the question no one ever ...",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/60reuuVTGao/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/60reuuVTGao/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/60reuuVTGao/hqdefault.jpg",
                           "width": 480,
                           "height": 360
                        }
                     },
                     "channelTitle": "Carnage-Boy",
                     "liveBroadcastContent": "none"
                  }
               },
               {
                  "kind": "youtube#searchResult",
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/ctyBJeJnWvfonxAzsZ9-YsDW6Uk\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "i7OlfbkL3lo"
                  },
                  "snippet": {
                     "publishedAt": "2020-01-24T14:00:09.000Z",
                     "channelId": "UCZTLU39XbfN04FBXVc0vD1g",
                     "title": "SpongeBob | Nickelodeon Arabia | سبونج بوب | الجراح سكويربانتس",
                     "description": "يجرّب \"سبونج بوب\" مهنة جديدة بينما يحاول \"سكويدوارد\" تغيير نفسه. اشترك الآن لمشاهدة أفضل الأحداث والمغامرات...",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/i7OlfbkL3lo/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/i7OlfbkL3lo/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/i7OlfbkL3lo/hqdefault.jpg",
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
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/UcI_N_f0ekLPP_iDH1lW2gNl5TU\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "OpOKeDmHxLo"
                  },
                  "snippet": {
                     "publishedAt": "2020-01-31T14:00:07.000Z",
                     "channelId": "UCZTLU39XbfN04FBXVc0vD1g",
                     "title": "SpongeBob | Nickelodeon Arabia | سبونج بوب | سيدالأزيز",
                     "description": "يلتقيسبونجبوببشمشونخارجمتجرالملاعق،هلهذهصدفة؟ اشترك الآن لمشاهدة أفضل الأحداث والمغامرات المسلية من...",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/OpOKeDmHxLo/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/OpOKeDmHxLo/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/OpOKeDmHxLo/hqdefault.jpg",
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
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/GrFcWPAeikTeR8pImQlhc1A4HEc\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "L32Ugx_RX8w"
                  },
                  "snippet": {
                     "publishedAt": "2019-02-26T06:43:58.000Z",
                     "channelId": "UCBmf73SsYf4RRy30cNwkxfw",
                     "title": "Cara Menggambar dan Mewarnai Spongebob dan Patrick Sahabat Selamanya",
                     "description": "bagaimana cara menggambar dan mewarna spongebob dan patrick sahabat selamanya (best friend forever) untuk anak kecil.",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/L32Ugx_RX8w/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/L32Ugx_RX8w/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/L32Ugx_RX8w/hqdefault.jpg",
                           "width": 480,
                           "height": 360
                        }
                     },
                     "channelTitle": "Ali 09 Art",
                     "liveBroadcastContent": "none"
                  }
               },
               {
                  "kind": "youtube#searchResult",
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/2XEVOC5Gm3fM7qEDbxymWgcWBbg\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "ZyaN4JTWRuk"
                  },
                  "snippet": {
                     "publishedAt": "2014-11-16T03:34:08.000Z",
                     "channelId": "UC-o4cjVkzQGJMhXyE0lkVQg",
                     "title": "&quot;Spongebob in Minecraft 3&quot; - Animation",
                     "description": "Spongebob in Minecraft 3 is here! You got some bread? Watch \"Spongebob in Minecraft 2\": https://www.youtube.com/watch?v=-s_16LinZ50 Join the club and ...",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/ZyaN4JTWRuk/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/ZyaN4JTWRuk/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/ZyaN4JTWRuk/hqdefault.jpg",
                           "width": 480,
                           "height": 360
                        }
                     },
                     "channelTitle": "DenotinFilms",
                     "liveBroadcastContent": "none"
                  }
               },
               {
                  "kind": "youtube#searchResult",
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/CI0kbxH6QAQIo1OW3kxZWhRbKVw\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "CYGXbHswoCY"
                  },
                  "snippet": {
                     "publishedAt": "2020-01-29T14:40:25.000Z",
                     "channelId": "UCPPPrnT5080hPMxK1N4QSjA",
                     "title": "The SpongeBob Movie 2 - Super Bowl Trailer (2020) Sponge On The Run Movie HD",
                     "description": "THE SPONGEBOB MOVIE 2 Super Bowl Trailer (2020) Sponge On The Run Movie HD Subscribe HERE for NEW movie trailers ▻ https://goo.gl/o12wZ3 ...",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/CYGXbHswoCY/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/CYGXbHswoCY/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/CYGXbHswoCY/hqdefault.jpg",
                           "width": 480,
                           "height": 360
                        }
                     },
                     "channelTitle": "Film Trailer Zone",
                     "liveBroadcastContent": "none"
                  }
               },
               {
                  "kind": "youtube#searchResult",
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/mW85_Ux7Ki6-huWeq4ep23zNIek\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "gzOlpjTgz-I"
                  },
                  "snippet": {
                     "publishedAt": "2020-01-30T06:00:04.000Z",
                     "channelId": "UCh4nklmLAO4XwVG6YUyBo1Q",
                     "title": "Mario Party 9 MiniGames - Mario Vs Spider Man Vs Luigi Vs SpongeBob (Master Cpu)",
                     "description": "Mario Party 9 MiniGames - Mario Vs Spider Man Vs Luigi Vs SpongeBob (Master Cpu) #MarioParty9.",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/gzOlpjTgz-I/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/gzOlpjTgz-I/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/gzOlpjTgz-I/hqdefault.jpg",
                           "width": 480,
                           "height": 360
                        }
                     },
                     "channelTitle": "MarioPartyGamer",
                     "liveBroadcastContent": "none"
                  }
               },
               {
                  "kind": "youtube#searchResult",
                  "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/CZBmx-O0QHlT4FTFDNW3L_t9900\"",
                  "id": {
                     "kind": "youtube#video",
                     "videoId": "-ro_nCbKY0Q"
                  },
                  "snippet": {
                     "publishedAt": "2019-12-29T15:00:00.000Z",
                     "channelId": "UCTfMaiRjr3goFg_Iqie2I8g",
                     "title": "SpongeBob SquarePants | Dokter SquarePants | Nickelodeon Nederlands",
                     "description": "SpongeBob probeert een beroep uit terwijl Octo Tentakel zichzelf probeert te veranderen Abonneer je nu voor nog meer van je favoriete Nickelodeon-series, ...",
                     "thumbnails": {
                        "default": {
                           "url": "https://i.ytimg.com/vi/-ro_nCbKY0Q/default.jpg",
                           "width": 120,
                           "height": 90
                        },
                        "medium": {
                           "url": "https://i.ytimg.com/vi/-ro_nCbKY0Q/mqdefault.jpg",
                           "width": 320,
                           "height": 180
                        },
                        "high": {
                           "url": "https://i.ytimg.com/vi/-ro_nCbKY0Q/hqdefault.jpg",
                           "width": 480,
                           "height": 360
                        }
                     },
                     "channelTitle": "Nickelodeon Nederlands",
                     "liveBroadcastContent": "none"
                  }
               }
            ],

            data: {
               "kind": "youtube#searchListResponse",
               "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/T33fAk9NO6WRHIaQEulg583IEVE\"",
               "nextPageToken": "CBkQAA",
               "regionCode": "EG",
               "pageInfo": {
                  "totalResults": 1000000,
                  "resultsPerPage": 25
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
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/HNDGO9pxA8fvr5fMkiE1S3Nrsdg\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "RS_PTq12qQM"
                     },
                     "snippet": {
                        "publishedAt": "2020-01-31T08:00:10.000Z",
                        "channelId": "UCTJDdO9klWGpTekswnXreGQ",
                        "title": "SpongeBob SquarePants | Si Maniak 🤪| Nickelodeon Bahasa",
                        "description": "SpongeBob dengan panik mencari penjahat yang meneror Bikini Bottom (yang kebetulan sangat mirip dengan dirinya) #nickelodeon #nickelodeonbahasa ...",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/RS_PTq12qQM/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/RS_PTq12qQM/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/RS_PTq12qQM/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "Nickelodeon Bahasa",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/ctu7lsCskAszxMpgg_MP5ZYR2Es\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "04N8-RCaLrM"
                     },
                     "snippet": {
                        "publishedAt": "2019-06-27T08:00:00.000Z",
                        "channelId": "UCTJDdO9klWGpTekswnXreGQ",
                        "title": "SpongeBob SquarePants | Cinta tetangga | Nickelodeon Bahasa",
                        "description": "Siapa yang tidak mencintai tetangganya? #nickelodeon #nickelodeonbahasa Langganan sekarang untuk melihat semua momen terbaik dan adegan lucu dari ...",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/04N8-RCaLrM/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/04N8-RCaLrM/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/04N8-RCaLrM/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "Nickelodeon Bahasa",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/8DqgIbRWQJNkmUU0c-_x_JRoSJw\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "HVviGino7CU"
                     },
                     "snippet": {
                        "publishedAt": "2020-01-26T15:00:05.000Z",
                        "channelId": "UCx27Pkk8plpiosF14qXq-VA",
                        "title": "SpongeBob&#39;s 31 Best Alter-Egos! 🦸\u200d♂️ SpongeBob SquarePants",
                        "description": "Over the years, SpongeBob SquarePants has gone by a few names. JellyBob...The Quickster...or just impersonating Patrick! Here's 31 times SpongeBob put on ...",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/HVviGino7CU/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/HVviGino7CU/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/HVviGino7CU/hqdefault.jpg",
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
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/iqaHtb8s-LUiQZaNmBURgtMXKZE\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "0bKVpc8U2go"
                     },
                     "snippet": {
                        "publishedAt": "2019-04-11T10:00:00.000Z",
                        "channelId": "UCx27Pkk8plpiosF14qXq-VA",
                        "title": "Top 13 Krabby Patty Moments! 🍔 #TBT | SpongeBob",
                        "description": "It's the Krabby Patty in all its glory! Here's the best moments of the finest burger under the sea! Watch more of your favorite shows on Nick! ▻▻ Subscribe for ...",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/0bKVpc8U2go/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/0bKVpc8U2go/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/0bKVpc8U2go/hqdefault.jpg",
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
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/1bNEKk6uKOBY-WHofyX1QFSohQE\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "EOgxV8wKnWA"
                     },
                     "snippet": {
                        "publishedAt": "2019-05-25T00:00:00.000Z",
                        "channelId": "UC2MR8wuMwaS3hN9leOXl_Dg",
                        "title": "The SpongeBob Movie: Sponge Out of Water - SpongeBob Memorable Moments",
                        "description": "The SpongeBob Movie: Sponge Out of Water - SpongeBob Memorable Moments Don't forget to Like & Share This Video and Subscribe & comment below.",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/EOgxV8wKnWA/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/EOgxV8wKnWA/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/EOgxV8wKnWA/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "Chi Po",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/U-tRzgtyUmFIDD0KP62E4vwJVjA\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "oKDotSYRuiI"
                     },
                     "snippet": {
                        "publishedAt": "2020-01-29T14:32:51.000Z",
                        "channelId": "UCzcRQ3vRNr6fJ1A9rqFn7QA",
                        "title": "THE SPONGEBOB MOVIE 2 Trailer # 2 (2020) Sponge on the Run, SpongeBob SquarePants Movie HD",
                        "description": "THE SPONGEBOB MOVIE 2 Trailer # 2 (2020) Sponge on the Run, SpongeBob SquarePants Movie HD © 2020 - Paramount Comedy, Kids, Family and ...",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/oKDotSYRuiI/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/oKDotSYRuiI/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/oKDotSYRuiI/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "ONE Media",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/8kYxhXvJo981lrmgJPpe0Olx1N8\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "gjlROumz-pA"
                     },
                     "snippet": {
                        "publishedAt": "2019-01-13T01:30:01.000Z",
                        "channelId": "UCMsOhFFhhI2QAPfU-W4OrtQ",
                        "title": "Spongebob Squarepants Characters In Real Life",
                        "description": "Have you ever wondered how Spongebob Squarepants characters would look like in real life? In this video I'll show you, hope you enjoy it. Follow Me: ...",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/gjlROumz-pA/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/gjlROumz-pA/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/gjlROumz-pA/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "Paradizy",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/MU-lbPetmcJuBA6l1qvwWLT33dU\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "fLJJS3UucQ8"
                     },
                     "snippet": {
                        "publishedAt": "2017-11-20T19:00:02.000Z",
                        "channelId": "UCz7pDh0hn6mj0amCgUNDerg",
                        "title": "Spongebob&#39;s Game Frenzy - Funny Spongebob Scrub Scrub Scrub - Nicklodeon Jr Kids Games Video",
                        "description": "Spongebob's Game Frenzy funny Moments Compilation HD Download: https://goo.gl/R38zun SpongeBob's GamePlay and collect fast and frantic minigames in ...",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/fLJJS3UucQ8/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/fLJJS3UucQ8/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/fLJJS3UucQ8/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "ToonFirst.com",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/0a8KaOBmdIbRvVqgR81MSZDB5OQ\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "uP-Gy7vOOn4"
                     },
                     "snippet": {
                        "publishedAt": "2019-01-02T23:50:47.000Z",
                        "channelId": "UCX1HAeoE5ys5FZkYibWPYIw",
                        "title": "SpongeBob SquarePants Full Episodes 1 ❂ SpongeBob SquarePants: Plankton&#39;s Robotic Revenge - Joshua",
                        "description": "SpongeBob SquarePants Full Episodes 1 ❂ SpongeBob SquarePants: Plankton's Robotic Revenge - Joshua.",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/uP-Gy7vOOn4/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/uP-Gy7vOOn4/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/uP-Gy7vOOn4/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "Joshua",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/CQUDhZnYFSDk37l9JQknrO6TPVo\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "E-Iveaww5WM"
                     },
                     "snippet": {
                        "publishedAt": "2020-01-25T15:00:02.000Z",
                        "channelId": "UCx27Pkk8plpiosF14qXq-VA",
                        "title": "&quot;Opposite Day&quot; with SpongeBob❓in 5 Minutes!  | SpongeBob SquarePants",
                        "description": "On \"Opposite Day\" ANYBODY can be Squidward! Well... maybe not just *anybody*. Check out the classic SpongeBob SquarePants episode \"Opposite Day\" in ...",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/E-Iveaww5WM/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/E-Iveaww5WM/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/E-Iveaww5WM/hqdefault.jpg",
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
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/xdj3i7Sagg06LbGs3edJBmUP6qY\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "cKmrStBVSNo"
                     },
                     "snippet": {
                        "publishedAt": "2020-01-29T14:14:33.000Z",
                        "channelId": "UCLRlryMfL8ffxzrtqv0_k_w",
                        "title": "THE SPONGEBOB MOVIE: Sponge on the Run Super Bowl Trailer (2020)",
                        "description": "Official The Spongebob Movie: Sponge on the Run Movie Super Bowl Spot & Trailer 2020 | Subscribe ➤ http://abo.yt/ki | Tom Kenny Movie Trailer | Release: 22 ...",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/cKmrStBVSNo/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/cKmrStBVSNo/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/cKmrStBVSNo/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "KinoCheck International",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/S2wO7yRVAh87T5Jt0xY0ZnSYc20\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "wHiKwu9Fhew"
                     },
                     "snippet": {
                        "publishedAt": "2020-01-29T14:15:45.000Z",
                        "channelId": "UCT0hbLDa-unWsnZ6Rjzkfug",
                        "title": "THE SPONGEBOB MOVIE 2: SPONGE ON THE RUN Super Bowl Trailer (2020)",
                        "description": "Super Bowl spot for The SpongeBob Movie 2: Sponge On The Run.",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/wHiKwu9Fhew/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/wHiKwu9Fhew/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/wHiKwu9Fhew/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "FilmSelect Trailer",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/6V0AqHDExIqFGo3n2pRCl-nbrfg\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "60reuuVTGao"
                     },
                     "snippet": {
                        "publishedAt": "2020-01-30T17:30:06.000Z",
                        "channelId": "UCTUOrR6Xtn2Q0ZomMqUtxzg",
                        "title": "1917 : The SpongeBob SquarePants Version",
                        "description": "The awesome 1917 trailer finally has its SpongeBob redux... A remix of one of the best 2019 trailers which brings a decisive answer to the question no one ever ...",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/60reuuVTGao/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/60reuuVTGao/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/60reuuVTGao/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "Carnage-Boy",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/ctyBJeJnWvfonxAzsZ9-YsDW6Uk\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "i7OlfbkL3lo"
                     },
                     "snippet": {
                        "publishedAt": "2020-01-24T14:00:09.000Z",
                        "channelId": "UCZTLU39XbfN04FBXVc0vD1g",
                        "title": "SpongeBob | Nickelodeon Arabia | سبونج بوب | الجراح سكويربانتس",
                        "description": "يجرّب \"سبونج بوب\" مهنة جديدة بينما يحاول \"سكويدوارد\" تغيير نفسه. اشترك الآن لمشاهدة أفضل الأحداث والمغامرات...",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/i7OlfbkL3lo/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/i7OlfbkL3lo/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/i7OlfbkL3lo/hqdefault.jpg",
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
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/UcI_N_f0ekLPP_iDH1lW2gNl5TU\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "OpOKeDmHxLo"
                     },
                     "snippet": {
                        "publishedAt": "2020-01-31T14:00:07.000Z",
                        "channelId": "UCZTLU39XbfN04FBXVc0vD1g",
                        "title": "SpongeBob | Nickelodeon Arabia | سبونج بوب | سيدالأزيز",
                        "description": "يلتقيسبونجبوببشمشونخارجمتجرالملاعق،هلهذهصدفة؟ اشترك الآن لمشاهدة أفضل الأحداث والمغامرات المسلية من...",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/OpOKeDmHxLo/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/OpOKeDmHxLo/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/OpOKeDmHxLo/hqdefault.jpg",
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
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/GrFcWPAeikTeR8pImQlhc1A4HEc\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "L32Ugx_RX8w"
                     },
                     "snippet": {
                        "publishedAt": "2019-02-26T06:43:58.000Z",
                        "channelId": "UCBmf73SsYf4RRy30cNwkxfw",
                        "title": "Cara Menggambar dan Mewarnai Spongebob dan Patrick Sahabat Selamanya",
                        "description": "bagaimana cara menggambar dan mewarna spongebob dan patrick sahabat selamanya (best friend forever) untuk anak kecil.",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/L32Ugx_RX8w/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/L32Ugx_RX8w/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/L32Ugx_RX8w/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "Ali 09 Art",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/2XEVOC5Gm3fM7qEDbxymWgcWBbg\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "ZyaN4JTWRuk"
                     },
                     "snippet": {
                        "publishedAt": "2014-11-16T03:34:08.000Z",
                        "channelId": "UC-o4cjVkzQGJMhXyE0lkVQg",
                        "title": "&quot;Spongebob in Minecraft 3&quot; - Animation",
                        "description": "Spongebob in Minecraft 3 is here! You got some bread? Watch \"Spongebob in Minecraft 2\": https://www.youtube.com/watch?v=-s_16LinZ50 Join the club and ...",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/ZyaN4JTWRuk/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/ZyaN4JTWRuk/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/ZyaN4JTWRuk/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "DenotinFilms",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/CI0kbxH6QAQIo1OW3kxZWhRbKVw\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "CYGXbHswoCY"
                     },
                     "snippet": {
                        "publishedAt": "2020-01-29T14:40:25.000Z",
                        "channelId": "UCPPPrnT5080hPMxK1N4QSjA",
                        "title": "The SpongeBob Movie 2 - Super Bowl Trailer (2020) Sponge On The Run Movie HD",
                        "description": "THE SPONGEBOB MOVIE 2 Super Bowl Trailer (2020) Sponge On The Run Movie HD Subscribe HERE for NEW movie trailers ▻ https://goo.gl/o12wZ3 ...",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/CYGXbHswoCY/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/CYGXbHswoCY/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/CYGXbHswoCY/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "Film Trailer Zone",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/mW85_Ux7Ki6-huWeq4ep23zNIek\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "gzOlpjTgz-I"
                     },
                     "snippet": {
                        "publishedAt": "2020-01-30T06:00:04.000Z",
                        "channelId": "UCh4nklmLAO4XwVG6YUyBo1Q",
                        "title": "Mario Party 9 MiniGames - Mario Vs Spider Man Vs Luigi Vs SpongeBob (Master Cpu)",
                        "description": "Mario Party 9 MiniGames - Mario Vs Spider Man Vs Luigi Vs SpongeBob (Master Cpu) #MarioParty9.",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/gzOlpjTgz-I/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/gzOlpjTgz-I/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/gzOlpjTgz-I/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "MarioPartyGamer",
                        "liveBroadcastContent": "none"
                     }
                  },
                  {
                     "kind": "youtube#searchResult",
                     "etag": "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/CZBmx-O0QHlT4FTFDNW3L_t9900\"",
                     "id": {
                        "kind": "youtube#video",
                        "videoId": "-ro_nCbKY0Q"
                     },
                     "snippet": {
                        "publishedAt": "2019-12-29T15:00:00.000Z",
                        "channelId": "UCTfMaiRjr3goFg_Iqie2I8g",
                        "title": "SpongeBob SquarePants | Dokter SquarePants | Nickelodeon Nederlands",
                        "description": "SpongeBob probeert een beroep uit terwijl Octo Tentakel zichzelf probeert te veranderen Abonneer je nu voor nog meer van je favoriete Nickelodeon-series, ...",
                        "thumbnails": {
                           "default": {
                              "url": "https://i.ytimg.com/vi/-ro_nCbKY0Q/default.jpg",
                              "width": 120,
                              "height": 90
                           },
                           "medium": {
                              "url": "https://i.ytimg.com/vi/-ro_nCbKY0Q/mqdefault.jpg",
                              "width": 320,
                              "height": 180
                           },
                           "high": {
                              "url": "https://i.ytimg.com/vi/-ro_nCbKY0Q/hqdefault.jpg",
                              "width": 480,
                              "height": 360
                           }
                        },
                        "channelTitle": "Nickelodeon Nederlands",
                        "liveBroadcastContent": "none"
                     }
                  }
               ]
            }

         }
      },
      computed: {
         ...mapState({
            items: state => state.items
         })
      }
   }
</script>

<style lang="scss">
</style>