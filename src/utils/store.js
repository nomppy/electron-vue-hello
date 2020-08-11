const fs = require('fs-extra');

function fetchLocal(callback) {
	var local = {
		groups: [],
		todos: {}
	};

	fs.readdir("./db/group/", (err, files) => {
		if (err) {
			console.error(err);
		}
		else {
			for (var i = 0; i < files.length; i++) {
				fs.readFile(`./db/group/${i}.json`, (err, data) => {
					if (err) {
						console.error(err);
					}
					else {
						local.groups.push(JSON.parse(data));
					}
				});
			}
		
		}
	});

	fs.readdir("./db/todo/", (err, files) => {
		if (err) {
			console.error(err);
		}
		else {
			for (var i = 0; i < files.length; i++) {
				fs.readFile(`./db/group/${i}.json`, (err, data) => {
					if (err) {
						console.error(err);
					}
					else {
						let tmp = JSON.parse(data);
						local.todos[tmp.id] = tmp;
					}
				});
			}
		}
	});

	callback(local);
}

async function pushLocal(local) {
	if (!local.groups) {
		local.groups = [];
	}

	local.groups.forEach((group) => {
		fs.outputJSON("./db/group/" + String(group.id) + ".json", group, (err) => {
			if (err)
				console.error(err);
		});
	});

	if (!local.todos) {
		local.todos = {};
	}

	local.todos.forEach(todo => {
		Object.entries(todo).forEach((key, value) => {
			fs.outputJSON(`./db/group/${key}.json`, value, (err) => {
				console.error(err);
			});
		});
	});
}

function addGroup(group) {
	_getNextGroupId((id) => {
		fs.outputJSON("./db/group/" + id + ".json", {id, ...group}, (err) => {
			if (err) {
				console.log(err);
			}
		});
	})

}

async function removeGroup(groupId) {
	fs.unlink(`./db/group/${groupId}.json`, (err) => {
		if (err) {
			console.error(err);
		}
	})
}

function addTodo(todo, cb) {
	_getNextTodoId((id) => {
		fs.outputJSON("./db/todo/" + id + ".json", todo, (err) => {
			if (err) {
				console.log(err);
			}
		});
		cb(id);
	})
}

function addTodoToGroup(todoId, groupId) {
	fs.readFile(`./db/group/${groupId}.json`, (err, data) => {
		if (err) {
			console.error(err);
		}
		else {
			let tmp = JSON.parse(data).items.push(todoId);
			fs.writeJSON(`./db/group/${groupId}.json`, tmp, (err) => {
				if(err) {
					console.error(err);
				}
			})
		}
	})
}

async function _getNextGroupId(cb) {
	fs.readdir("./db/group", (err, files) => {
		if (err) {
			console.log(err);
		}
		else {
			cb(files.length);
		}
	})
}

async function _getNextTodoId(cb) {
	fs.readdir("./db/todo", (err, files) => {
		if (err) {
			console.log(err);
		}
		else {
			cb(files.length);
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
