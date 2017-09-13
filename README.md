# Lessons in node
Short lessons in Node.js beginning with simple Hello World examples.

# Lesson 1 - Hello World from the command line
The first lesson shows how to print 'Hello World!' from the command line. 
This example is used to illustrate that plain old JavaScript is valid in Node.

```javascript
console.log("Hello World!");
```

# Lesson 2 - Hello World in the browser
The second lesson shows how to print 'Hello World!' in the browser. 
Here we invoke the http class to present the text in the browser.
The results can be viewed by browsing to [http://localhost:3000/](http://localhost:3000/)

```javascript
var http = require('http');

http.createServer(function(req,res){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!');
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
```

# Lesson 3 - Hello World in the browser with additional paths
Building on Lesson 2 we add an option for browsing to another path, "/about".
We also add a 404 Not Found page for invalid links.
```javascript
var http = require('http');

http.createServer(function(req,res){
	// Normalize url by removing querystring, optional trailing slash, and making it lowercase.
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path) {
		case '':
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.end('Hello World!');
			break;
		case '/about':
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.end('All about this website...');
			break;
		default:
			res.writeHead(404, { 'Content-Type': 'text/plain' });
			res.end('Not Found');
			break;
	}
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
```


# Lesson 4 - Hello World with the Express.js web framework package.

This lesson get its own folder! Look at the [README.md](./lesson-04/README.md) file in the [lesson-04](./lesson-04) folder for the steps to create a web-based Node.js application using the popular [Express.js](https://expressjs.com/) web framework.


# Lesson 5