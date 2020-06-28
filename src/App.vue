<template>
  <div>

    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">

    <TitleBar/>

    <div id='not-title-bar'>
      <Todo/>

      <Menu id='menu-bar'/>

      <div id="view">
        <router-view/>
      </div>
    </div>

  </div>
</template>

<script>
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

#not-title-bar {
  position: absolute;
  width: 100%;
  bottom: 0;
  top: 22px;
}

#menu-bar {
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  background-color: #30489a;
  box-shadow: 1px 0 2px 0 #000;
}

#view {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 31px;
}

</style>
