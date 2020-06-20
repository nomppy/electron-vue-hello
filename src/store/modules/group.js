
export default {
    namespaced: true,
    
    state: {
        groups: [
            {
                id: 0,
                name: 'template',
                items: [
                    0, 1
                ]
            },
            {
                id: 1,
                name: 'hi',
                items: [
                    2
                ]
            },
            {
                id: 2,
                name: 'never gonna',
                items: [
                    3
                ],
            }
        ],
    },
    getters: {
		getById: (state) => (id) => {
			return state.groups[id];
		},
	},
}