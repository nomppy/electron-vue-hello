<template>
    <div id='group'>
        <div id='category' class='noselect'>
            <h3> {{ group.name }} </h3>
        </div>
        <ul class='list'>
            <li class='list-item' v-for="item in getTodosInGroup(group.id)" :key="item.id">
                <!-- <v-row align='center'> -->
                     <!-- not sure why this works, thought the only way to change data was through mutations -->
                <div class='item-container hvr-grow-shadow'>
                    <v-checkbox v-model="item.completed" class='checkbox' color='#6ec4d3'/> 

                    <GroupBrief class='brief' :item="item"/>

                </div>

                <TodoDialog :item='item' class='dialog'/>
                <!-- </v-row> -->
            </li>
        </ul>
    </div>
</template>

<script>
import GroupBrief from '@/components/GroupBrief.vue';
import TodoDialog from '@/components/TodoDialog.vue';
import 'vuetify/dist/vuetify.min.css'
import { mapGetters, mapMutations, mapActions, mapState } from 'vuex';                                    


export default {
    name: "Group",
    components: {
        GroupBrief,
        TodoDialog,
    },
    computed: {
        ...mapGetters([
        'getTodosInGroup'
        ]),
        ...mapState('todo', [
            'items',
        ])
    },
    props: [
        'group',
    ],
    methods: {
        ...mapMutations([
            'todo/toggleComplete'
        ]),
        ...mapActions([
            'todoModal/pushTodo'
        ])
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

.dialog {
    opacity: 0;
    display: inline-block;
    position: absolute;
    font-size: 14px;
    width: 50%;
    transition: opacity 0.3s ease;
    align-self: flex-start;
    left: 100%;
    background-color: red;
    /* z-index: -1; */
}

.item-container:hover ~ .dialog {
    opacity: 0.7;
}

#group {
    display: flex;
    flex-direction: column;
    list-style: none;
}

#category {
    text-align: center;
    font-size: 20px;
    margin: 10px;
}

.list {
    padding: 0;
    list-style: none;
}

.list-item {
    margin: 15px 0;
    display: flex;
    position: relative;
    flex-flow: row nowrap;
    height: 2.4em;
    width: 100%;
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