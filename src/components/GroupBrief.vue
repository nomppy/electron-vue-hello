<template>
    <div>
        <div @click="$store.dispatch('todoModal/pushTodo', {item})" class='brief' :class="{ 'brief-complete': item.completed }">
            {{ item.brief }} 
        </div>
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
    left: 30px;
    position: relative;
    font-size: 14px;
    cursor: pointer;
    margin-right: 30px;
}

.brief-complete {
    text-decoration: line-through;
    color: grey;
}

.brief:hover {
    color: rgba(236, 193, 48, 0.815);
}
</style>