<template>
    <div id='group'>
        <div id='category'>
            <h3> {{ group.name }} </h3>
        </div>
        <ul class='list'>
            <li class='list-item' v-for="item in getTodosInGroup(group.id)" :key="item.id">
                <!-- <Checkbox @click.native="$store.commit('todo/toggleComplete', item.id)" :completed="item.completed"/> -->
                <v-checkbox color='indigo' :label='item.brief'/>
                <!-- <GroupBrief :item="item"/> -->
            </li>
        </ul>
    </div>
</template>

<script>
// import Checkbox from '@/components/Checkbox.vue';
// import GroupBrief from '@/components/GroupBrief.vue';
import 'vuetify/dist/vuetify.min.css'
import { mapGetters, mapMutations } from 'vuex';                                    


export default {
    name: "Group",
    components: {
        // Checkbox,
        // GroupBrief,
    },
    computed: mapGetters([
        'getTodosInGroup'
    ]),
    props: [
        'group',
    ],
    methods: {
        ...mapMutations([
            'todo/toggleComplete'
        ])
    }
}
</script>

<style scoped>
.checkbox {

}

#group {
    display: flex;
    flex-direction: column;
    list-style: none;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
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
}

</style>