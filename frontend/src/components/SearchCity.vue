<template>
  <div>
    <h3>Type a city name to search</h3>
    <GMapAutocomplete @place_changed="placeChanged" class="gmap-autocompolete"/>

    <div>You can also click a location on the map to view the weather forecast</div>
    <!-- TODO add click event -->
    <GMapMap
      v-if="selectedPlace"
      class="gmap-class"
      :center="selectedPlace"
      :zoom="7"
      map-type-id="roadmap"
      ref="gmap"
    >
    </GMapMap>
  </div>
</template>

<script lang="ts" src="./search-city.component.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.gmap-class {
  height: 500px;
  width: 100%;
}
.gmap-autocompolete {
  width: 250px;
  margin: 10px auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.vue-map-container {
  height: 500px;
  width: 100%;
}

.pac-logo:after {
  display: none;
}

.hdpi.pac-logo:after {
  background-image: none;
}

.pac-item {
  cursor: default;
  padding: 0 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 40px;
  text-align: left;
  border-top: 1px solid #e6e6e6;
  font-size: 11px;
  color: #515151;
}
@tailwind components;
@layer components {
  .pac-target-input {
    @apply w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary-100 focus:border-primary-300;
  }
}
</style>
