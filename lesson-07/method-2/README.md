# Lesson 7 - Routes

Lesson 7 shows how to organize and manage routes into a single subfolder.

The second method is from [Chapter 14 of Ethan Brown's 'Web Development with Node and Exress'](https://github.com/EthanRBrown/web-development-with-node-and-express/tree/master/ch14) [(https://github.com/EthanRBrown/web-development-with-node-and-express/tree/master/ch14)].

The dependencies are already included in `package.json` so begin by installing them:

````bash
npm install
````

Launch the application and view in your browser:

````bash
node index.js
````

Browse to [http://localhost:3000/](http://localhost:3000/)


Routes are stored in a new `handlers` folder.

Here is `handlers/main.js`:

````javascript
exports.home = function(req, res){
	res.render('home');
};

exports.about = function(req, res){
	res.render('about');
};
````

The routes are invoked from the main `index.js` file:

````javascript
require('./routes.js')(app);
````

Here is the `routes.js` file:

````javascript
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
````

Note how we can easily alias a page url such as `about-us` by replicating the `abount` line in `routes.js`.