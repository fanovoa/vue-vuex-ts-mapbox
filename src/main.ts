import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1IjoiZmFibm92b2EiLCJhIjoiY2xibzVyMnc4MHJmODNvbDBvODN5dWQ4cyJ9.wJ9gCyJmQflmaIlA7AzNQg';

if( !navigator.geolocation){
    throw new Error ('Tu navegador no soporta el GeoLocation')
}

createApp(App)
        .use(store)
        .use(router)
        .mount('#app')
