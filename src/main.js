// Root app component
import App from './App.vue'

// Import `gripVueJsApp`
import { gripVueJsApp } from '@stakeordie/griptape-vue.js'

import "~/@stakeordie/griptape-vue.js/dist/style.css"

import '@/assets/styles/index.scss'

const conf = {
  restUrl: 'https://api.holodeck.stakeordie.com'
}

// Grip your app, you are now ready to develop your application
gripVueJsApp(conf, App, (app, pinia) => {})