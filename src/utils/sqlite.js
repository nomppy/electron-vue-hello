const sqlite3 = require('sql.js').verbose();

function addTodo(brief, description) {
	let db = new sqlite3.Database('../db/todo.db');
	// db.run("CREATE TABLE [IF NOT EXISTS] todo(todoID INTEGER PRIMARY KEY AUTOINCREMENT, brief text NOT NULL, description text)");
	// db.run(`INSERT INTO todo(brief, description) VALUES(${brief}, ${description})`, [], (err) => {
	// 	if (err) {
	// 		return console.log(err.message);
	// 	}

	// 	return this.lastID;
	// });

	console.log(brief + description);

	db.close();
}

function removeTodo(id) {
	let db = new sqlite3.Database('../db/todo.db');
	db.run(`DELETE FROM todo WHERE todoID = ${id}`, [], (err) => {
		if (err) {
			return console.log(err.message);
		}

		return `deleted todo with id ${id}`;
	});
}

// function _getTodo(id) {
// 	let db = new sqlite3.Database('../db/todo.db');
// 	db.run(`SELECT `)
// }

module.exports = {
	addTodo,
	removeTodo
}
// export default {
// 	addTodo,
// 	removeTodo,
// }