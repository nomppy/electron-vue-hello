const fs = require('fs');

async function fetchLocal(callback) {
	var local = {
		groups: [],
		todos: {}
	};

	fs.readdir("./db/group/", (err, files) => {
		if (err) {
			console.error(err);
		}
		else {
			files.forEach(file => {
				fs.readFile(file, (err, data) => {
					if (err) {
						console.error(err);
					}
					else {
						local.groups.push(JSON.parse(data));
					}
				})
			})
		}
	});

	fs.readdir("./db/todo/", (err, files) => {
		if (err) {
			console.error(err);
		}
		else {
			files.forEach(file => {
				fs.readFile(file, (err, data) => {
					if (err) {
						console.error(err);
					}
					else {
						let tmp = JSON.parse(data);
						local.todos[tmp.id] = tmp;
					}
				})
			})
		}
	});

	callback(local);
}

async function pushLocal(local, callback) {
	local.groups.forEach(group => {
		fs.outputJSON("./db/group/" + String(group.id) + ".json", group, (err) => {
			if (err)
				console.error(err);
			else
				console.log(group.id);
		});
		console.log(group);
	});

	local.todos.forEach(todo => {
		Object.entries(todo).forEach((key, value) => {
			fs.outputJSON(`./db/group/${key}.json`, value, (err) => {
				console.error(err);
			});
		});
	});

	callback();
}

export default {
	fetch: fetchLocal,
	push: pushLocal,
}