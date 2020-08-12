const fs = require('fs-extra');

function fetchLocal(callback) {
	var local = {
		groups: [],
		todos: {}
	};

	fs.readFile(`./db/groups.json`, (err, data) => {
		if (err) {
			if (err.code === "ENOENT") {
				_writeGroup([]);
				return;
			}
			console.error(err);
		}
		else {
			local.groups = JSON.parse(data);
		}
	});

	fs.readFile(`./db/todos.json`, (err, data) => {
		if (err) {
			if (err.code === "ENOENT") {
				_writeTodo({});
				return;
			}
			console.error(err);
		}
		else {
			local.todos = JSON.parse(data);
		}
	});
	callback(local);
}

async function pushLocal(local) {
	if (!local.groups) {
		local.groups = [];
	}

	_writeGroup(local.groups);

	if (!local.todos) {
		local.todos = {};
	}

	_writeTodo(local.todos);
}

function addGroup(group) {
	_getNextGroupId((id) => {
		fs.readFile('./db/groups.json', (err, data) => {
			if (err) {
				console.error(err);
			}
			else {
				data = JSON.parse(data);
				data.push({ id, ...group });
				_writeGroup(data);
			}
		});
	});
}

async function removeGroup(groupId) {
	fs.readFile("./db/groups.json", (err, data) => {
		if (err) {
			console.error(err);
		}
		else {
			data = data.filter(group => group.id !== groupId);
			_writeGroup(data);
		}
	})
}

function addTodo(todo, cb) {
	_getNextTodoId((id) => {
		fs.readFile('./db/todos.json', (err, data) => {
			if (err) {
				console.error(err);
			}
			else {
				data = JSON.parse(data);
				data[id] = { id, ...todo};

				_writeTodo(data);
			}
		})
		cb(id);
	})
}

function addTodoToGroup(todoId, groupId) {
	fs.readFile(`./db/groups.json`, (err, data) => {
		if (err) {
			console.error(err);
		}
		else {
			data = JSON.parse(data);
			data.forEach(group => {
				if (group.id === groupId) {
					group.items.push(todoId);
				}
			});
			_writeGroup(data);
		}
	})
}

async function _getNextGroupId(cb) {
	fs.readFile('./db/groups.json', (err, data) => {
		if (err) {
			console.log(err);
		}
		else {
			cb(JSON.parse(data).length);
		}
	})
}

async function _getNextTodoId(cb) {
	fs.readFile('./db/todos.json', (err, data) => {
		if (err) {
			console.error(err);
		}
		else {
			data = JSON.parse(data);
			cb(Object.keys(data).length);
		}
	})
}

function _writeGroup(group) {
	fs.writeJSON('./db/groups.json', group, (err) => {
		if (err) {
			console.error(err);
		}
	});
}

function _writeTodo(todo) {
	fs.writeJSON('./db/todos.json', todo, (err) => {
		if (err) {
			console.error(err);
		}
	})
}

export default {
	fetch: fetchLocal,
	push: pushLocal,
	addTodo,
	addGroup,
	removeGroup,
	addTodoToGroup
}
