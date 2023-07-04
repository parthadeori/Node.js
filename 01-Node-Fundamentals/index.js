console.log("Hello, World!");


// JavaScript code
alert("Hello, JavaScript!");


// Node.js code
// Import the required modules
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Write the response
  res.write('Hello, Node.js!');
  
  // End the response
  res.end();
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


// Accessing the global object in Node.js
console.log(global.process.version);


// Accessing the global object in JavaScript
console.log(window.document.title);


// Backend Development (server.js)
const express = require('express');
const app = express();

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'Guest';
  const greeting = `Hello, ${name}!`;
  res.json({ greeting });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});