// Lessons in Node
// 
// Lesson 4: Hello World with Express
//
// ********************
//
// Init project
//
// npm init
//
// Answer questions (or hit enter to accept default). View the new package.json file
//
// ********************
//
// Install express
//
// npm install --save express
//
// The "--save" flag updates the package.json

//
// Define and express application
//
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

//
// Define routes
//

// Home
app.get('/', function(req, res){
	res.type('text/plain');
	res.send('Home Sweet Home');
});

// About
app.get('/about', function(req, res){
	res.type('text/plain');
	res.send('This is the about page');
});

//
// Special routes if page not found or an error occured
//

// custom 404 page
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

// custom 500 page
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

//
// Listen on the given port
//
app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' +
	app.get('port') + '; press Ctrl-C to terminate.' );
});
