# youtube-like-challenge

### You should know: 

* This is only a one-day-long work, why? A) I am concurrently working on two freelance projects as I mentioned to Ms. Fayza
* This challenge happened that I worked on before but there has been major differences like implementing `SMACSS`.
* The naming convention I used in the app is as follows `moduleName-submodule__Element` for states `module-is-state`, please refer to Mr. Jonathan Snook naming convention for his presentation on Pluralsight which is slightly different from the book.
* If you would give me a time to complete the task taking into account my current overload work which will be done overloading "roughly speaking" by the end of this month, else I did what I could in no time.  

### App current features :
 
 * the Adaptive app to desktop and mobile screens.
 * This app is built to be scalable.

### Some of I've planned ahead: (and due to my limited time I listed below)

* Play the video by using this package https://github.com/anteriovieira/vue-youtube#readme
* Load more in desktop view by using this package https://vuejsexamples.com/a-scroll-loading-component-for-vue-js/
  

## Project setup
```
npm install
```
* copy .env.example to .env
* .env `VUE_APP_FAKE_RESULTS` key to use static data or not, the key has a `true` or `false` values to switch between. 
* .env `VUE_APP_YOUTUBE_API_KEY` value attached to the e-mail, please look it up.  


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Notes

* `FAKE_RESULTS` has been used due to limited api requests
* `YouTube API key` attached to the e-mail  