
export default {
    state: {
        show: false,
        todo: {},
    },
    mutations: {
        setTodo(state, todo) {
            state.todo = todo;
        },
        showModal(state) {
            state.show = true;
        },
        hideModal(state) {
            state.show = false;
        }
    },
    actions: {
        
    }
}