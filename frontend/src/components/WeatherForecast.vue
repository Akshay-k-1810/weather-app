<template>
  <div class="bg-white rounded shadow-md p-4 m-4" v-if="forecastData">
  <h3>Weather forecast for city</h3>
  <div class="space-y-2">
    <div>
      <p><strong>Temperature:</strong> {{ forecastData.current_weather.temperature }}°C / {{ temperatureInFahrenheit() }}°F</p>
    </div>
    <div>
      <p><strong>Wind Speed:</strong> {{ forecastData.current_weather.windspeed }} m/s</p>
      <p><strong>Wind Direction:</strong> {{ forecastData.current_weather.winddirection }}°</p>
    </div>
    <div>
      <p><strong>Weather Condition:</strong> {{ getWeatherCondition() }}</p>
    <p><strong>Time:</strong> {{ formatTime(forecastData.current_weather.time) }}</p>
    </div>
  </div>
</div>
  
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style>

</style>
