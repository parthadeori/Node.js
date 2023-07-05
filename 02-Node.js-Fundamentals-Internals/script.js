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


// Example: Asynchronous Function with setTimeout
console.log('Before setTimeout');

setTimeout(() => {
  console.log('Inside setTimeout');
}, 2000);

console.log('After setTimeout');


// Example: Multi-threading in Node.js
const { Worker } = require('worker_threads');

function performTask(data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData: data });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

async function main() {
  try {
    const result = await performTask('input data');
    console.log('Result:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();


// Example: Multi-threading in Node.js
const { Worker } = require('worker_threads');

function performTask(data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData: data });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

async function main() {
  try {
    const result = await performTask('input data');
    console.log('Result:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();


// Example: Event Loop in JavaScript
console.log('Start');

setTimeout(() => {
  console.log('Timer callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise callback');
});

console.log('End');


// Example: Event Loop Phases
console.log('Start');

setTimeout(() => {
  console.log('Timer callback');
}, 0);

setImmediate(() => {
  console.log('Immediate callback');
});

console.log('End');


// Code Example: Stock Market
class Stock {
  constructor(symbol, price) {
    this.symbol = symbol;
    this.price = price;
  }
}

class StockMarket {
  constructor() {
    this.stocks = new Map();
    this.observers = new Set();
  }

  addStock(stock) {
    this.stocks.set(stock.symbol, stock);
  }

  removeStock(symbol) {
    this.stocks.delete(symbol);
  }

  updateStockPrice(symbol, newPrice) {
    const stock = this.stocks.get(symbol);
    if (stock) {
      stock.price = newPrice;
      this.notifyObservers(stock);
    }
  }

  addObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.delete(observer);
  }

  notifyObservers(stock) {
    this.observers.forEach((observer) => {
      observer.update(stock);
    });
  }
}

class StockObserver {
  constructor(name) {
    this.name = name;
  }

  update(stock) {
    console.log(`[${this.name}] Stock ${stock.symbol} price updated: $${stock.price}`);
  }
}

// Usage
const stockMarket = new StockMarket();

const appleStock = new Stock('AAPL', 150.50);
const googleStock = new Stock('GOOGL', 2500.75);

const johnObserver = new StockObserver('John');
const emilyObserver = new StockObserver('Emily');

stockMarket.addStock(appleStock);
stockMarket.addStock(googleStock);

stockMarket.addObserver(johnObserver);
stockMarket.addObserver(emilyObserver);

stockMarket.updateStockPrice('AAPL', 155.20);
stockMarket.updateStockPrice('GOOGL', 2530.40);


// Code Example: Creating and Using an EventEmitter
const EventEmitter = require('events');

// Create an EventEmitter instance
const serverEmitter = new EventEmitter();

// Register a listener for the 'start' event
serverEmitter.on('start', (port) => {
  console.log(`Server started on port ${port}`);
});

// Register a listener for the 'error' event
serverEmitter.on('error', (error) => {
  console.error(`Server error: ${error}`);
});

// Simulate server startup process
function startServer(port) {
  // Simulate an error condition
  if (port === 0) {
    serverEmitter.emit('error', 'Invalid port number');
  } else {
    serverEmitter.emit('start', port);
  }
}

// Start the server
startServer(3000);