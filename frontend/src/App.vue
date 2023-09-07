<template>
  <div class="bg-blue-400 w-full h-full">
    <nav class="p-2 font-bold">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
