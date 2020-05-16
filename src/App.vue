<template>
  <div id="app">

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

    <div id='menu-bar' :style="{ width: menuBarWidth }" @mouseenter="menuExtend=true" @mouseleave="menuExtend=false">
      <!-- <div title="Menu" id="hamburbur-container">
        <img id="hamburbur" src="@/assets/hamburbur.png" alt="Menu"/>
      </div> -->
      <Menu :show="menuExtend"></Menu>
    </div>

    <div id="main-window">
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
      menuExtend: false,
    }
  },
  computed: {
    menuBarWidth() {
      return this.menuExtend ? '15%' : '35px';
    } 
  },
  methods:{
    nav() {
      this.menuExtend = false;
    },
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
  top: 22px;
  bottom: 0;
  background-color: #30489a;
  transition: width .5s ease;
  Z-index: 2;
  box-shadow: 1px 0 2px 0 #000;
}

#main-window {
  /* display: inline-block; */
  /* float: left; */
  position: absolute;
  Z-index: 1;
  left: 40px;
}

/* #hamburbur {
  height: 25px;
  width: 25px;
  position: absolute;
  left: 5px;
  top: 5px;
} */

/* #hamburbur-container {
  position: absolute;
  margin: 5px 0 0 5px;
  cursor: pointer;
} */

.slide-over {
  position: relative;
}

.slide-bar {
  position: absolute;
  top: 0;
  height: 3px;
  width: 0;
  transition: width 0.5s ease;
  background-color: #40b8e8;
}

.slide-over:hover .slide-bar {
  width: 100%;
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
