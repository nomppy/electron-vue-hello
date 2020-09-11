import Vue from 'vue'
import Vuex from 'vuex'

import todo from './modules/todo'
import group from './modules/group'

import local from '../utils/store.js';

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
		init (state, data) {
			state.group.groups = data.groups;
			state.todo.items = data.todos;
		},
		addTodo (state, {todo, group} ) {
			local.addTodo(todo, (id) => {
				state.todo.items[id] = todo;
				
				state.group.groups[group].items.push(id);
				local.addTodoToGroup(id, group);
			})
		}
	},
	actions: {
		async init (context) {
			let data = await local.fetchLocal();
			context.commit('init', data);
		},
		addTodo (state, {todo, group} ) {
			local.addTodo(todo, (id) => {
				state.todo.items[id] = todo;
				
				state.group.groups[group].items.push(id);
				local.addTodoToGroup(id, group);
			})
		}
	},
	modules: {
		todo,
		group,
	}
})
