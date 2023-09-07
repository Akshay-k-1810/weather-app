import { Options, Vue } from 'vue-class-component';
import store from "../store"
@Options({
  props: {
  }
})
export default class SearchCity extends Vue {
  selectedPlace: { lat: number; lng: number } | null = null;
  placeChanged(place: any) {
     const location = place.latLng ?? place.geometry.location ;
      this.selectedPlace = {
        lat: location.lat(),
        lng: location.lng(),
      };
    // Dispatch the action to set selectedPlace in the Vuex store
    store.dispatch('setSelectedPlace', this.selectedPlace)
  }

}