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
				<div class='cross' @click="closeWindow"/>
				<!-- <div id="close-1">
				<div id="close-2"></div>
				</div> -->
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

.cross {
width: 15px;
height: 15px;
position: relative;
background-size:cover ;
margin:auto;
top: 3px;
}

.cross:before, .cross:after {
	content: "";
	position: absolute;
	z-index: 2;
	background: white;
	transform: rotate(45deg);
	border-radius:15px;
}

.cross:before {
	left: 50%;
	width: 10%;
	margin-left: -10%;
	height: 100%;
}

.cross:after {
	top: 55%;
	height: 10%;
	margin-top: -10%;
	width: 100%;
}

#close-container {
	width: 22px;
	cursor: pointer;
}

#close-container:hover{
	background-color: rgb(230, 45, 45)
}
</style>