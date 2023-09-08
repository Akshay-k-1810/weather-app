<template>
  <div class="mt-5 text-left font-bold text-lg ml-4">
    Weather forecast for city
  </div>
  <div class="bg-gray-800 rounded shadow-md m-4 text-white flex flex-col">
    <div class="flex flex-col" v-if="forecastData">
      <div
        class="p-4 bg-gray-800 bg-opacity-90 border-b-2 flex justify-between"
      >
        <span>{{ getWeatherCondition() }}</span>
        <span>{{ formatTime(forecastData.current_weather.time) }}</span>
      </div>
      <div class="flex justify-around p-10 items-center">
        <div data-test-id="temperature" class="font-bold text-5xl">
          {{ forecastData.current_weather.temperature }}°C /
          {{ temperatureInFahrenheit() }}°F
        </div>
        <div clas="w-1/2">
          <div class="font-bold text-left">Wind</div>
          <div class="flex">
            <div class="mr-2">
              Speed: {{ forecastData.current_weather.windspeed }} m/s
            </div>
            <div>
              Direction: {{ forecastData.current_weather.winddirection }}°
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col animate-pulse" v-else>
      <div
        class="p-4 bg-gray-800 bg-opacity-90 border-b-2 flex justify-between"
      >
        <div class="h-6 bg-gray-200 rounded-md dark:bg-gray-700 w-48"></div>
        <div class="h-6 bg-gray-200 rounded-md dark:bg-gray-700 w-24"></div>
      </div>
      <div class="flex justify-around p-10 items-center">
        <div class="font-bold text-5xl flex">
          <div
            class="h-11 mr-2 rounded-md bg-gray-200 dark:bg-gray-700 w-28"
          ></div>
          <div
            class="h-11 ml-2 rounded-md bg-gray-200 dark:bg-gray-700 w-28"
          ></div>
        </div>
        <div>
          <div class="font-bold text-left">Wind</div>
          <div class="flex">
            <div
              class="h-6 mr-2 bg-gray-200 rounded-md dark:bg-gray-700 w-12"
            ></div>
            <div
              class="h-6 mr-2 bg-gray-200 rounded-md dark:bg-gray-700 w-12"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style></style>
