
import axios from 'axios'
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

export async function getWeatherForecast(lat: number, lng: number): Promise<ForecastModel> {
    try {
      const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`);
  
      if (response.data) {
        return response.data;
      } else {
        throw new Error('Invalid weather data received.'); // Throw an error for invalid data
      }
    } catch (error) {
      throw new Error('Error fetching weather data. Please try again later.'); // Throw an error for network or other errors
    }
  }