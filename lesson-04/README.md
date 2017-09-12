This lesson get its own folder! 

Node.js is augmented by an extensive library of add-on packages, including the wildly popular Express.js web framework.

To use a Node package we use the `npm` command (npm stands for Node Package Manager).

But first we will create a new project using the "init" option of npm:

```javascript
npm init
````

Click enter to accept the defaults.

When asked for the project license you can enter `UNLICENSED` if your project is propriety. If you project is open source you can enter of one of the many open source licenses, such as `MIT` (see Massachusetts Institute of Technology).

The npm init command creates a file called package.json which is used to document our project’s dependencies.

Next we will install Express.js like this:

```javascript
npm install express --save
````

The install argument will create a `node_modules` folder and download the files required by the Express.js package.

The `--save` argument adds a line to our `package.json` configuration file.

The cool thing about the package.json is that we can re-install the all the packages for our project with the command "npm install".

Go ahead, try it out. Delete the `node_modules` folder and run `npm install`. It will re-create the `node_modules` folder and download the files required by the Express.js package.

Our lesson-04.js file invokes the Express.js module and uses it to create and present our Home, About and Not-Found pages.

```javascript

//
// Define an Express.js application
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
	res.send('Home Sweet Home!');
});

// About
app.get('/about', function(req, res){
	res.type('text/plain');
	res.send('This is the about page.');
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

```

Browsing to [http://localhost:3000/](http://localhost:3000/) will display 

	Home Sweet Home!

Broswing to [http://localhost:3000/about](http://localhost:3000/about) will display 

	This is the about page.

Browsing to any other page, such as [http://localhost:3000/bogus](http://localhost:3000/bogus), will display 

	404 - Not Found
