<template>
    <div id='main'>

        <Group class='group elevation-3' v-for="group in groups" :key="group.id" :group="group"/>

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
    margin-right: 31px;
}


/* #main {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: stretch;
    align-content: space-evenly;
    max-height: 150%;
} */

.group {
    /* flex: 26%;
    max-width: 26%; */
    width: 15em;
    margin: 15px;
}

@media (max-width: 45em) {
    .group {
        flex: 34%;
        max-width: 34%;
    }
}

@media (max-width: 30em) {
    .group {
        flex: 51%;
        max-width: 51%;
    }
}

</style>