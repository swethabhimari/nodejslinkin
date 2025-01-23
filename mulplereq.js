
// Blocking code

// const fs = require('fs');

// const data = fs.readFileSync('example.txt', 'utf8'); // Waits until file reading is complete
// console.log(data);
// console.log('This message is logged after the file is read.');
//non-blocking code

// Non-blocking code
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data); // Logs the file content after it is read
// });

// console.log('This message is logged immediately, without waiting for the file to be read.');


//Handling Multiple Requests with Non-Blocking Architecture

const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/slow') {
    // Simulating a slow operation (non-blocking)
    setTimeout(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('This was a slow response!');
    }, 5000); // 5-second delay
  } else {
    // Fast response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Fast response!');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

