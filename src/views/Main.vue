<template>
    <div id='main'>

        <Group class='group' v-for="group in groups" :key="group.id" :group="group"/>

    </div>
</template>

<script>
import Group from '@/components/Group.vue';
import { mapState } from 'vuex'

export default {
    name: 'Main',
    components: {
        Group,
    },
    methods: {
    },
    computed: mapState('group', {
        groups: 'groups'
    }),
}
</script>

<style scoped>
#main {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    align-content: space-around;
}

.group {
    flex: 0 0 26%;
    max-width: 26%;
}

@media (max-width: 800px) {
    .group {
        flex: 34%;
        max-width: 34%;
    }
}

@media (max-width: 530px) {
    .group {
        flex: 51%;
        max-width: 51%;
    }
}

</style>