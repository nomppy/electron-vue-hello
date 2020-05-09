<template>
  <div id="app">
    <span :title="title">
      {{ message }}
    </span>
    <span class="draggable">
      drag
    </span>
    <br/>
    <span>{{ opacity }}</span>
    <br/>
    
    <input type="text" v-model="title" id="text-input">
    <button @click="toggleClickThrough"/>
    <input type="range" @change="changeOpacity" value=0.95 v-model="opacity" min=0 max=1 step=0.05 id="transparencyRange"/>
    <router-view/>
  </div>
</template>

<script>
const { remote } = require('electron')
var win = remote.getCurrentWindow()

export default {
  name: 'App',
  components:{

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
    toggleClickThrough(){
      this.ignoreMouseEvents = !this.ignoreMouseEvents
      win.setIgnoreMouseEvents(this.ignoreMouseEvents)
    }
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
