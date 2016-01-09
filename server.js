var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [{
	id: 1, 
	description: "Meet mom for lunch",
	completed: false
}, {
	id: 2, 
	description: "Go to market",
	completed: false
}, {
	id: 3, 
	description: "blah blah",
	completed: true
}]

app.get('/', function(req, res) {
	res.send('TODO API root');
});

app.get('/todos', function(req,res) {
	res.json(todos);
});

app.get('/todos/:id', function(req, res) {
	var todoID = parseInt(req.params.id, 10);
	var full_item;

	for (i = 0; i < todos.length; i++) {
		if (todos[i].id === todoID) {
			full_item = todos[i];
		}
	};

	if (typeof full_item != "undefined") {
		res.json(full_item);
	} else {
		res.status(404).send();
	};
	
});

app.listen(PORT, function() {
	console.log("listening on port: " + PORT + "!");
});