const Store = require('electron-store');
const store = new Store();

export default {
    namespaced: true,
    
    state: {
        groups: [
            {
                id: 1,
                name: 'ooga booga',
                items: [
                    1
                ]
            }
        ]
    },
    getters: {
		getById: (state) => (id) => {
			return state.groups[id];
		},
    },
    mutations: {
        init (state) {
            state.groups = store.get('groups');
        },
        addGroup (state, group) {
            state.groups.push(group);
            store.set(`groups`, state.groups);
        },
        removeGroup (state, id) {
            state.groups = state.groups.filter((group) => group.id !== id);
            store.set(`groups`, state.groups);
        }
    }
}