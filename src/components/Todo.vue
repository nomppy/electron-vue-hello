<template>
    <div id='todo'>
        Modal
    </div>
</template>

<script>
export default {
    name: 'Todo',
    props: [
        'todo',
    ]
}
</script>

<style scoped>
#todo{
    top: 50%;
    background-color: grey;
}
</style>