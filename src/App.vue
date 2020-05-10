<template>
  <div id="app">
    <p> hello app </p>
    <Settings/>
    <router-view/>
  </div>
</template>

<script>
const { remote } = require('electron')
var win = remote.getCurrentWindow()
import Settings from "@/views/Settings.vue"

export default {
  name: 'App',
  components:{
    Settings
  },
  data() {
    return{
      title: 'hello',
      message: 'hello',
      opacity: 1,
      ignoreMouseEvents: false,
    }
  },
  methods:{
    changeOpacity(){
      win.setOpacity(Number(this.opacity))
    },
  }
}
</script>

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

.draggable{
  background-color: blue;
  color: white;
  -webkit-app-region: drag;
}
</style>
