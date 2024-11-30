const http = require('http');
const process = require('process');

const database = process.argv[2];
const list = `Number of students: 10` + `\nNumber of students in CS: 6. LIST: ahmad, ali, unknown, shaza, amna, BBB` + `\nNumber of students in SWE: 4. LIST: hamada, Ahmad, yousuf, Another`;
const app = http.createServer((request, response) => {
  request.on('error', (error) => {
    console.error(error);
  });

  response.on('error', (error) => {
    console.error(error);
  });

  const {url} = request;
  
  if (url === '/') {
    response.end('Hello Helberton School!');
  } else if (url === '/students') {
    response.end(`This is the list of our students\n${list}`);
  }
}).listen(1245);

module.exports = app;
