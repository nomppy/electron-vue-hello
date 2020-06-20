<template>
    <div>
        <div @click="showModal=true" class='brief' :class="{ 'brief-complete': item.completed }">
            {{ item.brief }} 
        </div>
        <Todo :todo="item" v-if="showModal"/>
    </div>
</template>

<script>
import Todo from '@/components/Todo.vue';


export default {
    name: 'GroupBrief',
    props: [
        'item'
    ],
    components: {
        Todo,
    },
    data() {
        return {
            showModal: false,
        }
    }
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