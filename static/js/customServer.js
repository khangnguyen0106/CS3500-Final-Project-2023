const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function (req, res) {
  const { url } = req;

  if (url === '/' || url === '/index.html') {
    // Serve the main HTML page
    const indexPath = path.join(__dirname, 'index.html');
    fs.readFile(indexPath, 'utf8', function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (url === '/customServer.js') {
    // Serve your JavaScript file (this file)
    const serverScriptPath = path.join(__dirname, 'customServer.js');
    fs.readFile(serverScriptPath, 'utf8', function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(data);
      }
    });
  } else if (url === '/your-script.js') {
    // Serve your JavaScript code file (replace 'your-script.js' with the actual filename)
    const scriptPath = path.join(__dirname, 'your-script.js');
    fs.readFile(scriptPath, 'utf8', function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(data);
      }
    });
  } else if (url === '/your-styles.css') {
    // Serve your CSS styles file (replace 'your-styles.css' with the actual filename)
    const stylesPath = path.join(__dirname, 'your-styles.css');
    fs.readFile(stylesPath, 'utf8', function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);
      }
    });
  } else if (url === '/news') {
    // Handle news API requests here
    // Your existing code for fetching and displaying news articles
    // should go here
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Node.js web server is running on port ${port}`);
});
