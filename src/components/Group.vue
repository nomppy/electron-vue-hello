<template>
    <div 
    @mouseleave="brief=''; details=''; flip=false"
    @click="add=false"
    class='group' :style="{ 'grid-row': 'span ' + (4+2*group.items.length+(add ? 4 : 0)) }">
        <div class='flip-card-inner elevation-3' :class="{ 'flip': flip }">
            <div class='flip-card-front'>
                <div id='category' class='noselect'>
                    <h3> {{ group.name }} </h3>
                </div>
                <ul class='list'>
                    <Todo 
                    class='todo'
                    @click.native="flip = true"
                    @mouseenter.native="updateTodo(item)"
                    :flip="flip"
                    v-for="item in getTodosInGroup(group.id)" :key="item.id" :item="item"/>
                </ul>
                <AddTodo 
                :add="add"
                @click.native.stop
                @show-add-menu.capture="add=true"
                @close-add-menu.capture="add=false"
                class='add-todo'/>
            </div>
            <div @click="flip=false" class='flip-card-back'>
                <TodoDialog :item="{ brief, details }"/>
            </div>
        </div>
    </div>
</template>

<script>
import Todo from '../components/Todo.vue';
import TodoDialog from '../components/TodoDialog.vue';
import AddTodo from '../components/AddTodo.vue';
import 'vuetify/dist/vuetify.min.css'
import { mapGetters, mapMutations, mapState } from 'vuex';                                    


export default {
    name: "Group",
    components: {
        Todo,
        TodoDialog,
        AddTodo,
    },
    data() {
        return {
            flip: false,
            brief: '',
            details: '',
            add: false,
        }
    },
    computed: {
        ...mapGetters([
        'getTodosInGroup',
        'todo/getById'
        ]),
        ...mapState('todo', [
            'items',
        ]),
    },
    props: [
        'group',
    ],
    methods: {
        ...mapMutations([
            'todo/toggleComplete'
        ]),
        updateTodo(item){
            if (!this.flip) {
                this.brief = item.brief;
                this.details = item.details;
            }
        }
    }
}
</script>

<style scoped>

.list {
    padding: 0;
    list-style: none;
}

.todo {
    margin: 15px 0;
    display: flex;
    position: relative;
    flex-flow: row nowrap;
    height: 2.4em;
    width: 100%;
}

.group {
    display: flex;
    flex-direction: column;
    list-style: none;
}

#category {
    text-align: center;
    font-size: 20px;
    margin: 10px;
    z-index: 1
}

.flip-card {
  background-color: transparent;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
} */

/* Position the front and back side */
.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
}

.flip-card-back {
    cursor: default;
    transform: rotateY(180deg);
    background-color: rgb(73, 73, 73);
}

.flip-card-back.flip {
    opacity: 0.5;
    z-index: 3;
}

.flip {
    transform: rotateY(180deg);
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(50%, 0, 0);
  }

  to {
    opacity: 0.7;
    z-index: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-50%, 0, 0);
  }

  to {
    opacity: 0.7;
    z-index: 1;
    transform: translate3d(0, 0, 0);
  }
}

</style>