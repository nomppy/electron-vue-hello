<template>
    <div @click="$store.dispatch('todoModal/pushTodo', {item})" class='brief' :class="{ 'brief-complete': item.completed }">
        {{ item.brief }} 
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'GroupBrief',
    props: [
        'item'
    ],
    methods: mapActions([
       'todoModal/pushTodo'
    ]),
}
</script>

<style scoped>

.brief {
    left: 15px;
    position: relative;
    font-size: 18px;
    margin-right: 30px;
    cursor: pointer;
    display: inline;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}

.brief-complete {
    text-decoration: line-through;
    color: grey;
}

.brief:hover {
    color: rgba(236, 193, 48, 0.815);
}
</style>