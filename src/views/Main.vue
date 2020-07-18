<template>
    <div id='main' class='column-masonry'>

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
/* #main {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    align-content: space-around;
    margin-right: 31px;
} */

/* #main {
    display: flex;
    flex-flow: column wrap;
    min-height: 100%;
    align-content: flex-start;
    background-color: white;
} */

.column-masonry {
    line-height: 0;

   -webkit-column-count: 5;
   -webkit-column-gap:   0px;
   -moz-column-count:    5;
   -moz-column-gap:      0px;
   column-count:         5;
   column-gap:           0px;
}

/* .grid-masonry {
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 250px;
} */

.group {
    /* flex: 26%;
    max-width: 26%; */

    /* width: 15em;
    margin: 15px;
    min-width: 10em;
    max-width: 100%; 
    flex: 4 2 20%; */

    margin-top: 30px;
    width: 100%;
    height: auto;
}

/* @media (max-width: 45em) {
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
} */

</style>