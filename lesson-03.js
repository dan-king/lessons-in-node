// Lessons in Node
// 
// Lesson 3: Hello World in the browser and additional pages via path.
// Also display 404 for invalid paths.
//
// How to run:
//		node lesson-03.js
//
// Browse to http://localhost:3000/
// Expected output in the browser:
// 		Hello World!
//
// Browse to http://localhost:3000/about
// Expected output in the browser:
// 		All about this website...
//
// Browse to http://localhost:3000/bogus-path
// Expected output in the browser:
// 		Not Found

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
