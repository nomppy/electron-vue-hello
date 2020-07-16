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
    </div>
</template>

<script>
const { remote } = require('electron');
let win = remote.getCurrentWindow();

export default {
    name: 'TitleBar',
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

<style scoped>

#title-bar {
  height: 22px;
  width: 100%;
  right: 0;
  /* margin-top: 4px; */
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