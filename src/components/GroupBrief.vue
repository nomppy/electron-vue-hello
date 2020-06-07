<template>
    <span class='brief'> {{ brief }} </span>
</template>

<script>
export default {
    name: 'GroupBrief',
    props: ['brief'],
}
</script>

<style scoped>
.brief {
    font-size: 14px;
    cursor: pointer;
}

.brief:hover {
    color: rgba(236, 193, 48, 0.815);
}
</style>