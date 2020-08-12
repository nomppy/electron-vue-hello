import local from '../../utils/store.js';

export default {
    namespaced: true,
    
    state: {
        groups: []
    },
    getters: {
		getById: (state) => (id) => {
			return state.groups[id];
		},
    },
    mutations: {
        addGroup (state, group) {
            state.groups.push({id: state.groups.length, ...group});
            local.addGroup(group);
        },
        removeGroup (state, id) {
            state.groups = state.groups.filter((group) => group.id !== id);
            local.removeGroup(state);
        }
    }
}