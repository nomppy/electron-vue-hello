<template>
    <div :class="{ 'modal-background': show, 'modal-hide': true }" @click.prevent="$store.commit('todoModal/hideModal')">
        Hi
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
    name: 'TodoModal',
    computed: {
        ...mapState('todoModal', {
            show: state => state.show,
            todo: state => state.todo,
        })
    },
    methods: {
        ...mapMutations([
            'todoModal/hideModal'
        ])
    }
}

</script>

<style scoped>
.modal-hide {
    color: white;

    pointer-events: none;
    position: absolute;
    transition: opacity 0.1s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: #000;
    opacity: 0;
    z-index: 2;
}

.modal-background {
    pointer-events: auto;
    opacity: 0.85;
}

</style>