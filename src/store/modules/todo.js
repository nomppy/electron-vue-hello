import local from '../../utils/store.js';

export default {
    namespaced: true,

    state: {
        items: {}
	},
    mutations: {
        toggleComplete(state, todoId) {
			state.items[todoId].completed = !state.items[todoId].completed;
			local.push(state);
		},
		addTodo(state, todo) {
			state.items[todo.id] = todo;
			local.push(state);
		},
		removeTodo(state, id) {
			delete state.items[id];
			local.push(state);
		}
    },
    getters: {
        getById: (state) => (id) => {
			return state.items[id];
		},
    }
};