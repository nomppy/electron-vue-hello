
export default {
    namespaced: true,

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
        pushTodo ({ commit }, todo) {
            commit('setTodo', todo);
            commit('showModal');
        },
    }
}