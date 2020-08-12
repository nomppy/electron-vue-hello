
export default {
    namespaced: true,

    state: {
        items: {}
	},
    mutations: {
        toggleComplete(state, todoId) {
			state.items[todoId].completed = !state.items[todoId].completed;
		}
    },
    getters: {
        getById: (state) => (id) => {
			return state.items[id];
		},
    }
};