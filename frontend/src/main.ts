import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoogleMaps from '@fawmi/vue-google-maps';
import WeatherService from './services/weather-service.service';
import { setupAxiosInterceptors } from './shared/axios-interceptor';

setupAxiosInterceptors(() => {
    console.log('Unauthenticated');
});

const app = createApp(App)

const weatherService = new WeatherService();

app.provide('weatherService', weatherService);

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAmlmN3Spuolpvy8xtSeeYK2KgH0166I90',
        libraries: 'places,geometry',
    },
});

app.use(store).use(router)

app.mount('#app')

