const fs = require('fs-extra');

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
	console.log("pushing to local...");
	local.groups.forEach(group => {
		fs.writeFile("./db/group/" + String(group.id) + ".json", JSON.stringify(group), (err) => {
			console.error(err);
		});
	});
	local.todos.forEach(todo => {
		Object.entries(todo).forEach((key, value) => {
			fs.writeFile(`./db/group/${key}.json`, JSON.stringify(value), (err) => {
				console.error(err);
			});
		});
	});
	fs.writeFile("./db/group/test.json", "{dafdafd: fdafd}", (err) => {
		console.error(err);
	});
	callback();
}

export default {
	fetch: fetchLocal,
	push: pushLocal,
}