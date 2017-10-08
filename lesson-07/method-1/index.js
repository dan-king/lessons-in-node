var express = require('express');

var app = express();
app.set('port', process.env.PORT || 3000);

// Set up handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Define static middleware for the public path
app.use(express.static(__dirname + '/public'));

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

//
// Special routes if page not found or an error occured
//

// custom 404 page
app.use(function(req, res){
        res.status(404);
        res.render('404');
});

// custom 500 page
app.use(function(err, req, res, next){
        console.error(err.stack);
        res.status(500);
        res.render('500');
});

//
// Listen on the given port
//
app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});
