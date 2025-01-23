// Import the 'http' module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Respond based on the URL path
  if (req.url === '/') {
    res.end('Welcome to the Home Page!');
  } else if (req.url === '/about') {
    res.end('This is the About Page.');
  } else {
    res.end('Page not found!');
  }
});

// Start the server and listen on port 5000
server.listen(5004, () => {
  console.log('Server is running on http://localhost:5004');
});
