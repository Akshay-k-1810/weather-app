import * as backendApi from '../shared/backend-api';

export interface ForecastModel {
  latitude: number,
  longitude: number,
  elevation: number,
  current_weather: {
      temperature: number,
      windspeed: number,
      winddirection: number,
      weathercode: number,
      time: Date
  }
}
export default class WeatherService {
  constructor() {}

  getWeatherForecast(lat: number, lng: number): Promise<ForecastModel> {
    return backendApi.get('weather/forecast', {lat, lng});
  }

}
