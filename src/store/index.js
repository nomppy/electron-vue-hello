import Vue from 'vue'
import Vuex from 'vuex'

import todo from './modules/todo'
import group from './modules/group'

Vue.use(Vuex)


export default new Vuex.Store({
	state: {
	},
	getters: {
		getTodosInGroup: (state, getters) => (group) => {
			return getters['group/getById'](group).items.map( id => getters['todo/getById'](id) );
		}
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		todo,
		group,
	}
})
