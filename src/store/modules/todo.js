const Store = require('electron-store');
const store = new Store();

export default {
    namespaced: true,

    state: {
        items: {}
	},
    mutations: {
        toggleComplete(state, todoId) {
			state.items[todoId].completed = !state.items[todoId].completed;
			store.set(`items.${todoId}.completed`, !store.get(`items.${todoId}.completed`));
		},
		init(state) {
			state.items = store.get('items');
		},
		addTodo(state, todo) {
			state.items[todo.id] = todo;
			store.set(`items.${todo.id}`, todo);
		},
		removeTodo(state, id) {
			delete state.items[id];
			store.delete(`items.${id}`);
		}
    },
    getters: {
        getById: (state) => (id) => {
			return state.items[id];
		},
    }
};