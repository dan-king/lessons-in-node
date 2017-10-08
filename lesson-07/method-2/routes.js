var main = require('./handlers/main.js'),
	helloworld = require('./handlers/helloworld.js');

module.exports = function(app){

	// homepage and 'about' routes
	app.get('/', main.home);
	app.get('/home', main.home);
	app.get('/homepage', main.home);
	app.get('/about', main.about);
	app.get('/about-us', main.about);

	// 'hello world' routes
	app.get('/hello', helloworld.hello);
	app.get('/hello-world', helloworld.hello);
	app.get('/helloworld', helloworld.hello);

};