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
