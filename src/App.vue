<template>
  <div>

    <Todo/>
	
    <TitleBar/>

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
import Todo from './components/TodoModal.vue';
import TitleBar from './components/TitleBar.vue';

export default {
	name: 'App',
	components:{
    TitleBar,
    Menu,
    Todo,
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


.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
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

</style>
