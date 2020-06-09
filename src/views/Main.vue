<template>
    <div id='main'>

        <Group @mark-complete="(group, item) => markComplete(group, item)" class='group' v-for="group in groups" :key="group.name" :group="group"/>

    </div>
</template>

<script>
import Group from '@/components/Group.vue';

export default {
    name: 'Main',
    components: {
        Group,
    },
    methods: {
        markComplete(group, item) {
            this.groups[group].items[item].completed = !this.groups[group].items[item].completed;
        }
    },
    data() {
        return {
            groups: [
                {
                    name: 'template',
                    id: 0,
                    items: [
                        {
                            id: 0,
                            brief: 'brief description',
                            details: 'details',
                            completed: false
                        },
                        {
                            id: 1,
                            brief: 'dafda',
                            details: 'dafda',
                            completed: true
                        }
                    ]
                },
                {
                    name: 'hi',
                    id: 1,
                    items: [
                        {
                            id: 0,
                            brief: 'die',
                            details: 'never say goodbye',
                            completed: true
                        }
                    ]
                },
                {
                    name: 'never gonna',
                    id: 2,
                    items: [
                        {
                            id: 0,
                            brief: 'long ass description for no apparent reason fdjafkdlajfkla fjal fklda jf',
                            details: 'never gonna',
                            completed: false
                        }
                    ]
                }
            ]
        }
    }    
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