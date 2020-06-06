<template>
    <div id='main'>
        Main
    </div>
</template>

<script>
export default {
    name: 'Main',
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