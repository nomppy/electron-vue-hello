<template>
    <div id='main'>
        <!-- <ul id='groups'>
            <li v-for="group in groups" :key="group.name">
                <Group class='group' :data="group"/>
            </li>
        </ul> -->

        <!-- <div class='group' v-for="group in groups" :key="group.name">
            <Group :data="group"/>
        </div> -->
        <Group class='group' v-for="group in groups" :key="group.name" :data="group"/>
        <!-- <Group class='group' :data="groups[0]"/>
        <Group class='group' :data="groups[1]"/>
        <Group class='group' :data="groups[2]"/> -->
    </div>
</template>

<script>
import Group from '@/components/Group.vue';

export default {
    name: 'Main',
    components: {
        Group,
    },
    data() {
        return {
            groups: [
                {
                    name: 'template',
                    items: [
                        {
                            brief: 'brief description',
                            details: 'details',
                            completed: false
                        },
                        {
                            brief: 'dafda',
                            details: 'dafda',
                            completed: true
                        }
                    ]
                },
                {
                    name: 'hi',
                    items: [
                        {
                            brief: 'die',
                            details: 'never say goodbye',
                            completed: true
                        }
                    ]
                },
                {
                    name: 'never gonna',
                    items: [
                        {
                            brief: 'give you up',
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