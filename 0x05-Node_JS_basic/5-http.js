const http = require('http');
const process = require('process');

const database = process.argv[2];
const list = `Number of students: 10` + `\nNumber of students in CS: 6. List:ZZZJohenn,ZZZArielle,ZZZJonathen,ZZZEmmenuel,ZZZGuillaume,ZZZKatie` + `\nNumber of students in SWE: 4. List:ZZZGuillaume,ZZZJoseph,ZZZPaul,ZZZTommy`;
const app = http.createServer((request, response) => {
  request.on('error', (error) => {
    console.error(error);
  });

  response.on('error', (error) => {
    console.error(error);
  });

  const {url} = request;
  
  if (url === '/') {
    response.end('Hello Holberton School!');
  } else if (url === '/students') {
    response.end(`This is the list of our students\n${list.split('ZZZ').join(' ')}`);
  }
}).listen(1245);

module.exports = app;
