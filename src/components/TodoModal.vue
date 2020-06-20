<template>
    <div id="modal" v-show="show">
        Hi
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    name: 'TodoModal',
    computed: {
        ...mapState('todoModal', {
            show: state => state.show,
            todo: state => state.todo,
        })
    }
}

</script>

<style scoped>
#modal {
    position: absolute;
    top: 50%;
    left: 50%;
}
</style>