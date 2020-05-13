<template>
  <div id="app">
    <div id="title-bar-container">
      <div id="title-bar"></div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
  },
  data() {
    return{
    }
  },
  methods:{
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
  background-color: #333333;
  -webkit-app-region: drag;
}

#title-bar-container {
  display: flex;
  background-color: #333333;
}

</style>
