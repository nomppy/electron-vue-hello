
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
        getItems: (state) => (idArr) => {
            return state.items.filter((item, index) => {
                return idArr.contains(index);
            });
        }
    }
};