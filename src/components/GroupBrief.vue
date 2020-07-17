<template>
    <div @click="$store.dispatch('todoModal/pushTodo', {item})" class='truncate-overflow' :class="{ 'brief-complete': item.completed }">
        {{ item.brief }} 
        <!-- need to truncate text so it fits in one line -->
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
    font-size: 14px;
    margin-right: 30px;
    display: -webkit-box;
    cursor: default;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    font-family: inherit;
}

.brief-complete {
    text-decoration: line-through;
    color: grey;
}

</style>