// Including Modules with require()
const module = require('module-name');


const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});


// Example: Creating a Simple HTTP Server
const _ = require('lodash');

const array = [1, 2, 3, 4, 5];
const sum = _.sum(array);

console.log(sum); // Output: 15


const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
});

server

.listen(3000, () => {
  console.log('Server listening on port 3000');
});


// Synchronous Programming
function synchronousTask() {
    console.log("Starting synchronous task");
    
    // Simulate a time-consuming operation
    for (let i = 0; i < 1000000000; i++) {
      // Do some computation
    }
    
    console.log("Synchronous task completed");
}
  
console.log("Before synchronous task");
synchronousTask();
console.log("After synchronous task");


// Asynchronous Programming
function asynchronousTask() {
console.log("Starting asynchronous task");
    
setTimeout(() => {
    console.log("Asynchronous task completed");
}, 2000);
}
  
console.log("Before asynchronous task");
asynchronousTask();
console.log("After asynchronous task");


// Example: Asynchronous File Read
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (error, data) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('File content:', data);
  }
});