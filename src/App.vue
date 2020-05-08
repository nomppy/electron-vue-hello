<template>
  <div id="app">
    <span :title="hoverMessage">
      Hover here
    </span>
    {{ message }}
    <input type="range" value="0.95" min="0.2" max="1" step="0.05" id="transparencyRange"/>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
