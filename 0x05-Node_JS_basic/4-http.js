const http = require('node:http');

const app = http.createServer((request, response) => {
  request.on('error', (error) => {
    console.error(error);
  });

  response.on('error', (error) => {
    console.error(error);
  });
  response.end('Hello Holberton School!');
}).listen(1245);

module.exports = app;
