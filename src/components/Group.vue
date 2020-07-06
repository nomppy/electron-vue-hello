<template>
    <div id='group'>
        <div id='category'>
            <h3> {{ group.name }} </h3>
        </div>
        <div id='items'>
            <ul class='list'>
                <li class='list-item' v-for="item in getTodosInGroup(group.id)" :key="item.id">
                    <!-- <Checkbox @click.native="$store.commit('todo/toggleComplete', item.id)" :completed="item.completed"/> -->
                    <v-checkbox class='checkbox indigo' :color='colors.indigo' :label='item.brief'/>
                    <!-- <GroupBrief :item="item"/> -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// import Checkbox from '@/components/Checkbox.vue';
// import GroupBrief from '@/components/GroupBrief.vue';
import { mapGetters, mapMutations } from 'vuex';                                    
import colors from 'vuetify/lib/util/colors'


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

#items {
    padding: 10px;
    border-radius: 6px;
    border: 2px solid rgba(67, 94, 233, 0.733);
}

.list {
    padding: 0;
    list-style: none;
}

.list-item {
    margin: 15px 0;
}

</style>