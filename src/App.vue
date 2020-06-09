<template>
  <div>

    <div id="title-bar-container">
      <div id="title-bar"></div>
      <div id="minimize-container" @click="minimizeWindow">
        <div id="minimize"></div>
      </div>
      <div id="maximize-container" @click="maximizeWindow">
        <div id="maximize"></div>
      </div>
      <div id="close-container" @click="closeWindow">
        <div id="close-1">
          <div id="close-2"></div>
        </div>
      </div>
    </div>

    <Menu id='menu-bar'></Menu>

    <div id="view">
      <router-view/>
    </div>
  </div>
</template>

<script>
const { remote } = require('electron');
let win = remote.getCurrentWindow();

import Menu from './components/Menu.vue';

export default {
  name: 'App',
  components:{
    Menu,
  },
  data() {
    return{
    }
  },
  computed: {
  },
  methods:{
    minimizeWindow() {
      win.minimize();
    },
    maximizeWindow() {
      win.isMaximized() ? win.unmaximize() : win.maximize();
    },
    closeWindow() {
      win.close();
    },
  }
}
</script>

<style>

* {
  margin: 0;
}


.tooltip-right .tooltiptext {
  transition: opacity .1s ease;
  opacity: 0;
  background-color: black;
  color: white;
  text-align: center;
  padding: 6px 7px;
  border-radius: 6px;

  position: absolute;
  z-index: 1;
  left: 105%;
}

.tooltip-right .tooltiptext::after {
  content: " ";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent black transparent transparent;
}

.tooltip-right:hover .tooltiptext {
  opacity: 1;
}

#title-bar {
  height: 18px;
  width: 100%;
  margin-top: 4px;
  background-color: #222;
  -webkit-app-region: drag;
}

#title-bar-container {
  display: flex;
  background-color: #222;
}

#minimize {
  height: 1px;
  width: 11px;
  margin: auto;
  background-color: #fff;
}

#maximize {
  height: 9px;
  width: 9px;
  margin: auto;
  border: 1px solid #fff;
}

#menu-bar {
  position: absolute;
  display: flex;
  top: 22px;
  bottom: 0;
  background-color: #30489a;
  box-shadow: 1px 0 2px 0 #000;
}

#view {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 31px;
}

#close-1 {
  height: 2px;
  width: 13px;
  margin: auto;
  background-color: #fff;
  transform: rotate(40deg);
  Z-index: 1;
}

#close-2 {
  height: 2px;
  width: 13px;
  margin: auto;
  background-color: #fff;
  transform: rotate(100deg);
  Z-index: 2;
}

#minimize-container {
  height: 22px;
  width: 24px;
  display: flex;
  cursor: pointer;
  background-color: #222;
}

#minimize-container:hover {
  background-color: #333;
}

#maximize-container {
  height: 22px;
  width: 24px;
  display: flex;
  cursor: pointer;
  background-color: #222;
}

#maximize-container:hover {
  background-color: #333;
}

#close-container {
  height: 22px;
  width: 24px;
  display: flex;
  cursor: pointer;
  background-color: #222;
}

#close-container:hover {
  background-color: rgb(200, 20, 20);
}

</style>
