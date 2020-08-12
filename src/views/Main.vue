<template>
    <div id='main' class='grid-masonry'>
        {{ groups }}
        <Group class='grid-item' v-for="group in groups" :key="group.id" :group="group"/>
        <AddGroup class='grid-item'/>
        
    </div>
</template>

<script>
import Group from '../components/Group.vue';
import AddGroup from '../components/AddGroup.vue';
import { mapState } from 'vuex'

export default {
    name: 'Main',
    components: {
        Group,
        AddGroup
    },
    computed: mapState('group', {
        groups: 'groups'
    })
}
</script>

<style scoped>

.grid-masonry {
    display: grid;
    margin-top: 30px;
    margin-left: 19px;
    margin-right: 50px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 0.6em;
    grid-auto-flow: row;
    grid-gap: 1em 4em;
}

</style>