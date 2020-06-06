<template>
    <div id='main'>
        <Group :data="groups[0]"/>
        <Group :data="groups[1]"/>
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
                }
            ]
        }
    }    
}
</script>

<style scoped>

</style>