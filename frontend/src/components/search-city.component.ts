import { Options, Vue } from "vue-class-component";
import store from "../store";

@Options({
  props: {},
  mounted() {
    this.selectedPlace = {
      lat: 54,
      lng: 53,
    };
    this.getLocation();
  },
  methods: {
    async getLocation() {
      if ("geolocation" in navigator) {
        try {
          const position = await this.getCurrentPosition();
          this.selectedPlace = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
        } catch (error) {
          console.error("Error getting geolocation:", error);
        }
      } else {
        console.error("Geolocation is not supported by your browser.");
      }

      // Dispatch the action to set selectedPlace in the Vuex store
      this.$store.dispatch("setSelectedPlace", this.selectedPlace);
    },
    getCurrentPosition() {
      return new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    },
  },
})
export default class SearchCity extends Vue {
  selectedPlace: { lat: number; lng: number } | null = null;

  placeChanged(place: any) {
    const location = place.latLng ?? place.geometry.location;
    this.selectedPlace = {
      lat: location.lat(),
      lng: location.lng(),
    };

    // Dispatch the action to set selectedPlace in the Vuex store
    store.dispatch("setSelectedPlace", this.selectedPlace);
  }
}
