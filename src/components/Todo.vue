<template>
    <div class='item-container hvr-grow-shadow'>
    <!-- @click="$emit('flip-card')" -->
    <!-- @hover="$emit('push-todo', item)" -->
    
        <v-checkbox @click.capture.stop v-model="item.completed" class='checkbox' color='#6ec4d3'/> 

        <GroupBrief class='brief' :item="item"/>

    </div>  
</template>

<script>
import GroupBrief from '../components/GroupBrief.vue';
export default {
    name: 'Todo',
    components: {
        GroupBrief,
    },
    props: [
        'item',
    ],
    methods: {
    }
}
</script>

<style scoped>

.checkbox {
    transform: scale(0.7) translateY(-2px);
}

.item-container {
    display: flex;
    width: 100%;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center; 
    height: 2.4em;
    /* overflow: hidden; */
    padding-left: 30px;
    line-height: 1.2em;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}

.hvr-grow-shadow {
  /* display: inline-block; */
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
}

.hvr-grow-shadow:hover, .hvr-grow-shadow:focus, .hvr-grow-shadow:active {
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
  
</style>
