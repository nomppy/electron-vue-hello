<template>
    <div id='group'>
        <div id='category' class='noselect'>
            <h3> {{ group.name }} </h3>
        </div>
        <ul class='list'>
            <li class='list-item' v-for="item in getTodosInGroup(group.id)" :key="item.id">
                <!-- <v-row align='center'> -->
                     <!-- not sure why this works, thought the only way to change data was through mutations -->
                <div class='item-container'>
                    <v-checkbox v-model="item.completed" class='checkbox' color='#6ec4d3'/> 

                    <GroupBrief class='brief' :item="item"/>
                </div>
                <!-- </v-row> -->
            </li>
        </ul>
    </div>
</template>

<script>
import GroupBrief from '@/components/GroupBrief.vue';
import 'vuetify/dist/vuetify.min.css'
import { mapGetters, mapMutations, mapActions, mapState } from 'vuex';                                    


export default {
    name: "Group",
    components: {
        GroupBrief,
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
.item-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center; 
}

.brief {
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
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
    margin-left: 20px;
}

.list-item {
    margin: 15px 0;
}

</style>