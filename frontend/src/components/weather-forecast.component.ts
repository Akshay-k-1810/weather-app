import WeatherService, {ForecastModel} from '@/services/weather-service.service';
import { Options, Vue } from 'vue-class-component';
import { Inject, Watch } from 'vue-property-decorator';
import { mapState } from 'vuex'
@Options({
  props: {
    // forecastData
  },
  computed: {
    ...mapState(['selectedPlace']),
  },
})

export default class WeatherForecast extends Vue {

  @Inject('weatherService')
  public weatherService!: WeatherService;
  forecastData: ForecastModel | null = null;
  error: string | null = null;

  // Watch for changes in the selectedPlace prop
  @Watch('selectedPlace')
  onSelectedPlaceChanged(newPlace: { lat: number; lng: number } | null) {
    console.log(newPlace);
    
    if (newPlace) {
      this.fetchWeatherData(newPlace.lat, newPlace.lng);
    } else {
      this.error = 'Location not found';
    }
  }
  getWeatherCondition() {
    // You can map weather codes to human-readable conditions here
    const weatherCode = this.forecastData?.current_weather.weathercode;
    switch (weatherCode) {
      case 0:
        return 'Clear sky';
      case 1:
      case 2:
      case 3:
        return 'Mainly clear, partly cloudy, and overcast';
      case 45:
      case 48:
        return 'Fog and depositing rime fog';
      case 51:
      case 53:
      case 55:
        return 'Drizzle: Light, moderate, and dense intensity';
      case 56:
      case 57:
        return 'Freezing Drizzle: Light and dense intensity';
      case 61:
      case 63:
      case 65:
        return 'Rain: Slight, moderate and heavy intensity';
      case 66:
      case 67:
        return 'Freezing Rain: Light and heavy intensity';
      case 71:
      case 73:
      case 75:
        return 'Snow fall: Slight, moderate, and heavy intensity';
      case 77:
        return 'Snow grains';
      case 80:
      case 81:
      case 82:
        return 'Rain showers: Slight, moderate, and violent';
      case 85:
      case 86:
        return 'Snow showers slight and heavy';
      case 95:
        return 'Thunderstorm: Slight or moderate';
      case 96:
      case 99:
        return 'Thunderstorm with slight and heavy hail';
      default:
        return 'Unknown';
    }
  }
  formatTime(isoTime:Date) {
    const date = new Date(isoTime);
    return date.toLocaleTimeString(); // Use toLocaleTimeString for a human-readable time format
  }
  temperatureInFahrenheit() {
    // Convert Celsius to Fahrenheit
    let celsius = 0
    let fahrenheit = 0;
    if(this.forecastData)
    celsius = this.forecastData.current_weather.temperature;
    fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit.toFixed(2); // Limit to two decimal places
  }
  async fetchWeatherData(latitude: number, longitude: number) {
    try {
      // Call the weather service to get weather forecast data
      this.forecastData = await this.weatherService.getWeatherForecast(latitude, longitude);
      
    } catch (error) {
      // TODO - Error handling: If the API call fails, display an error message
      console.error('Error fetching weather data:', error);
      this.error = 'Error fetching weather data. Please try again later.';
    }
  }

}


