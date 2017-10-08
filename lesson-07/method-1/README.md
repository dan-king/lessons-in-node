# Lesson 7 - Routes

Lesson 7 shows how to organize and manage routes into a single subfolder.

The first method is to create and invoke each route file within the subfolder.

The dependencies are already included in `package.json` so begin by installing them:

````bash
npm install
````

Launch the application and view in your browser:

````bash
node index.js
````

Browse to [http://localhost:3000/](http://localhost:3000/)


Routes are stored in a new `routes` folder.

Here is `routes/homepage.js`:

````javascript
var express = require('express')
var router = express.Router()

// Homepage
router.get('/', function(req, res){
	res.render('hello-world')
});

module.exports = router
````

The routes are invoked from the main `index.js` file:

````javascript
//
// Define routes
//

// Home
app.get('/', function(req, res){
	res.redirect(303, '/home')
});
var homepage = require('./routes/homepage')
app.use('/home', homepage)

// About
var about = require('./routes/about')
app.use('/about', about)

// Hello World
var helloworld = require('./routes/helloworld')
app.use('/hello-world', helloworld)
````
