<template>
    <div>
        <div class='details'>
            {{ item.details }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoDialog',
    props: [
        'item',
    ]
}
</script>

<style scoped>
.details {
    font-size: 16px;
    cursor: default;
    margin: 20px;
}
</style>