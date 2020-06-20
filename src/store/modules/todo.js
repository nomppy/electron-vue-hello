
export default {
    namespaced: true,

    state: {
        items: {
			0: {
				id: 0,
				brief: 'brief description',
				details: 'details',
				completed: false,
			},
			1: {
				id: 1,
				brief: 'dafda',
				details: 'dfadfa',
				completed: true,
			},
			2: {
				id: 2,
				brief: 'die',
				details: 'never say goodbye',
				completed: true,
			},
			3: {
				id: 3,
				brief: 'give you up let you down run around and dsert you',
				details: 'never gonna',
				completed: false,
			}
		},
    },
    mutations: {
        toggleComplete(state, todoId) {
			state.items[todoId].completed = !state.items[todoId].completed;
		},
    },
    actions: {

    },
    getters: {
        getById: (state) => (id) => {
			return state.items[id];
		},
    }
};