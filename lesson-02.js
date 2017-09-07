// Lessons in Node
// 
// Lesson 2: Hello World in the browser
//
// How to run:
//		node lesson-02.js
// Browse to http://localhost:3000/
// Expected output in the browser:
// 		Hello World!

var http = require('http');

http.createServer(function(req,res){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World!');
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');
